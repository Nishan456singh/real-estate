import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { connectToDatabase } from '@/lib/database/index';

const gmailUser = process.env.GMAIL_USER;
const gmailPassword = process.env.GMAIL_PASSWORD;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please fill in all fields.' });
    }

    try {
      const { db } = await connectToDatabase();

      const collection = db.collection('contacts');
      await collection.insertOne({ name, email, message });

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailPassword,
        },
      });
      

      const mailOptions = {
        from: gmailUser,
        to: gmailUser,
        subject: 'New Contact Form Submission',
        text: `
          You have received a new contact form submission:
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Email sent:', info.response);
        }
      });

      return res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
      return res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
  }

  return res.status(400).json({ message: 'Invalid request method.' });
};

export default handler;