import connectTodb from '@/lib/dbConfig';
import { User } from '@/lib/model/User';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

export async function Post(req: NextRequest) {
  await connectTodb();
  try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;

    console.log(reqBody);

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: 'user already exist' },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPass = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPass,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json({
      message: 'user created successfully',
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }), { status: 500 };
  }
}
