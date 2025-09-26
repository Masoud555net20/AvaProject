const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config({ path: './.env' });

const app = express();
const PORT = 3001;

app.use(cors({ 
  origin: function (origin, callback) {
    if (!origin || origin.includes('localhost:517')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'), false);
    }
  }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log('BOT_TOKEN:', process.env.BOT_TOKEN ? 'Loaded' : 'Not loaded');
console.log('CHAT_ID:', process.env.CHAT_ID ? 'Loaded' : 'Not loaded');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: false });
const chatId = process.env.CHAT_ID;

console.log('Bot created:', bot ? 'Yes' : 'No');

// Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is running on port 3001!' });
});

app.get('/api/test-telegram', async (req, res) => {
  try {
    await bot.sendMessage(chatId, 'Test message from backend');
    res.json({ success: true, message: 'Test message sent to Telegram' });
  } catch (error) {
    console.error('Test Telegram error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/send-order', upload.single('file'), async (req, res) => {
  try {
    console.log('Received request with body:', req.body);
    console.log('File:', req.file ? req.file.filename : 'No file');
    console.log('Bot token exists:', !!process.env.BOT_TOKEN);
    console.log('Chat ID exists:', !!process.env.CHAT_ID);

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
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
