// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 567,
        secure: true,
        auth: {
            user: 'nishan456singh@gmail.com', // replace your email
            pass: '100776106135', // replace with your password
        },
    });

    const mailOptions = {
      from: 'nishan456singh@gmail.com', // replace with your email
      to: 'kaurc7490@gmail.com', // replace with your email
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: 'Message received' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error sending email' });
    }
  } else {
    res.status(405).json({ status: 'Method not allowed' });
  }
};