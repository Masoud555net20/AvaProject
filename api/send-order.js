import express from 'express';
import TelegramBot from 'node-telegram-bot-api';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: false });
const chatId = process.env.CHAT_ID;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, phone, email, service, description, urgency, address, contactMethod } = req.body;
    
    let message = `🆕 *سفارش جدید ثبت شد!*\n\n`;
    message += `👤 *نام:* ${name}\n`;
    message += `📞 *تلفن:* ${phone}\n`;
    message += `📧 *ایمیل:* ${email || 'نداده'}\n`;
    message += `🔧 *خدمت:* ${service}\n`;
    message += `📝 *توضیحات:* ${description}\n`;
    message += `⚡ *فوریت:* ${urgency === 'urgent' ? 'فوری' : 'عادی'}\n`;
    message += `📍 *آدرس:* ${address || 'نداده'}\n`;
    message += `💬 *روش تماس:* ${contactMethod}\n`;

    if (req.file) {
      message += `\n📎 *فایل:* ${req.file.filename}`;
      await bot.sendDocument(chatId, req.file.path, { caption: message, parse_mode: 'Markdown' });
    } else {
      await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
    }

    res.json({ success: true, message: 'سفارش به تلگرام ارسال شد' });
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    res.status(500).json({ success: false, message: 'خطا در ارسال' });
  }
}

// For Vercel, but multer needs special handling; for now, assume no file or use Vercel Blob
// Note: Multer may not work directly in serverless; consider disabling file upload or using external storage
