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

  // Debug env vars (without logging token value)
  if (!process.env.BOT_TOKEN) {
    console.error('BOT_TOKEN is missing');
    return res.status(500).json({ success: false, message: 'BOT_TOKEN تنظیم نشده' });
  }
  if (!process.env.CHAT_ID) {
    console.error('CHAT_ID is missing');
    return res.status(500).json({ success: false, message: 'CHAT_ID تنظیم نشده' });
  }
  console.log('BOT_TOKEN exists:', !!process.env.BOT_TOKEN);
  console.log('CHAT_ID value type:', typeof process.env.CHAT_ID, 'length:', process.env.CHAT_ID.length);

  // Validate bot token
  try {
    const botInfo = await bot.getMe();
    console.log('Bot validated:', botInfo.username);
  } catch (botError) {
    console.error('Bot token invalid:', botError.message);
    return res.status(500).json({ success: false, message: 'توکن ربات نامعتبر است' });
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

      console.log('Form data received:', { name, phone, service, hasFile: !!req.file });

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
        console.log('Sending document to chat:', chatId);
        await bot.sendDocument(chatId, req.file.buffer, {
          caption: message,
          parse_mode: 'Markdown',
          filename: req.file.originalname
        });
      } else {
        console.log('Sending message to chat:', chatId);
        await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
      }

      console.log('Message sent successfully to Telegram');
      res.json({ success: true, message: 'سفارش به تلگرام ارسال شد' });
    } catch (error) {
      console.error('Error sending to Telegram:', error.message || error);
      let errorMsg = 'خطا در ارسال به تلگرام';
      if (error.message && error.message.includes('chat not found')) {
        errorMsg = 'چت ID یافت نشد - CHAT_ID را چک کنید';
      } else if (error.message && error.message.includes('Unauthorized')) {
        errorMsg = 'توکن ربات نامعتبر یا مجوز ندارد';
      } else if (error.message && error.message.includes('Bad Request')) {
        errorMsg = 'فرمت پیام یا Markdown اشتباه';
      } else if (error.message && error.message.includes('network error')) {
        errorMsg = 'مشکل اتصال به تلگرام';
      }
      res.status(500).json({ success: false, message: errorMsg });
    }
  });
}
