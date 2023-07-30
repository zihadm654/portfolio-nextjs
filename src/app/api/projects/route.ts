import connectMongo from '@/lib/dbConfig';
import { Project } from '@/lib/model';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectMongo();
  try {
    const data = await Project.find();
    return NextResponse.json(data.reverse());
  } catch (error) {
    return NextResponse.json('error', { status: 500 });
  }
}
// export async function Post(req: Request) {
//   await connectMongo();
//   try {
//     const body: IProject = await req.json();
//     const newPost = new Project(body);
//     const saved = await newPost.save();
//     return NextResponse.json(saved);
//   } catch {
//     return NextResponse.json('error', {
//       status: 500,
//     });
//   }
// }
