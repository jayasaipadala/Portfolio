// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  error: string
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  let nodemailer = require('nodemailer');

  const { firstName, lastName, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: true,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "jaisaipadala@gmail.com",
      subject,
      html: `<p>${message}</p><br/><p>From: ${firstName} ${lastName}, ${email}</p>`,
    });

    res.status(200).json({ error: '' });
  } catch (error: any) {
    const statusCode = error.response ? error.response.status : 500;
    res.status(statusCode).json({ error: error.message });
  }
}

export default handler;