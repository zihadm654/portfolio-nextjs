import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import WelcomeEmail from '@/emails/welcome';

const resend = new Resend(process.env.NEXT_RESEND_KEY);

export async function POST(request: Request) {
  const { name, email } = await request.json();

  try {
    await resend.sendEmail({
      from: 'zihadm654@gmail.com' || '',
      to: email,
      subject: 'hello world',
      react: WelcomeEmail({
        name,
      }),
    });
    return NextResponse.json(
      {
        status: 'Ok',
      },
      {
        status: 200,
      }
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json(
      {
        error: 'Internal server error.',
      },
      {
        status: 500,
      }
    );
  }
}
