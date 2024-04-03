// import { Resend } from 'resend';
import nodemailer from 'nodemailer';

// const resend = new Resend(process.env.NEXT_RESEND_KEY);

// const domain = process.env.NEXT_PUBLIC_API_URL;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'tasicigor123@gmail.com',
    pass: 'bsel kcxt drvb srcx',
  },
});

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  const mailOptions = {
    from: 'zihadm654@gmail.com',
    to: email,
    subject: 'Contact Form Submission',
    html: `
                <p>Info: ${token}</p>
            `,
  };
  await transporter.sendMail(mailOptions);
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;
  const mailOptions = {
    from: 'zihadm654@gmail.com',
    to: email,
    subject: 'Contact Form Submission',
    html: `
                <p>Info: ${resetLink}</p>
            `,
  };
  await transporter.sendMail(mailOptions);
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  const mailOptions = {
    from: 'zihadm654@gmail.com',
    to: email,
    subject: 'Contact Form Submission',
    html: `
                <p>Info: ${confirmLink}</p>
            `,
  };
  await transporter.sendMail(mailOptions);
};
