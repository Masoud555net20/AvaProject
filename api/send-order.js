import TelegramBot from 'node-telegram-bot-api';
import multer from 'multer';

const bot = new TelegramBot(process.env.BOT_TOKEN || '', { polling: false });
const chatId = process.env.CHAT_ID;

const storage = multer.memoryStorage();
const upload = multer({ storage });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const uploadMiddleware = upload.single('file');

  uploadMiddleware(req, res, async (err) => {
    if (err) {
      console.error('Multer error:', err);
      return res.status(500).json({ success: false, message: 'خطا در بارگذاری فایل' });
    }

    try {
      const { name, phone, email, service, description, urgency, address, contactMethod } = req.body;
      
      if (!name || !phone || !service) {
        return res.status(400).json({ success: false, message: 'اطلاعات الزامی پر نشده است' });
      }

      let message = `🆕 *سفارش جدید ثبت شد!*\n\n`;
      message += `👤 *نام:* ${name}\n`;
      message += `📞 *تلفن:* ${phone}\n`;
      message += `📧 *ایمیل:* ${email || 'نداده'}\n`;
      message += `🔧 *خدمت:* ${service}\n`;
      message += `📝 *توضیحات:* ${description || 'نداده'}\n`;
      message += `⚡ *فوریت:* ${urgency === 'urgent' ? 'فوری' : 'عادی'}\n`;
      message += `📍 *آدرس:* ${address || 'نداده'}\n`;
      message += `💬 *روش تماس:* ${contactMethod || 'تلفن'}\n`;

      if (req.file) {
        message += `\n📎 *فایل:* ${req.file.originalname}`;
        await bot.sendDocument(chatId, req.file.buffer, {
          caption: message,
          parse_mode: 'Markdown',
          filename: req.file.originalname
        });
      } else {
        await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
      }

      res.json({ success: true, message: 'سفارش به تلگرام ارسال شد' });
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      if (error.message.includes('chat not found') || error.message.includes('bot token')) {
        return res.status(500).json({ success: false, message: 'تنظیمات ربات تلگرام نادرست است' });
      }
      res.status(500).json({ success: false, message: 'خطا در ارسال به تلگرام' });
    }
  });
}
