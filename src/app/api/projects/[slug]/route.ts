import { Project } from '@/lib/model';
import connectMongo from '@/lib/dbConfig';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  await connectMongo();
  try {
    const slug = request.url.split('/')[5];
    const project = await Project.findById(slug);
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json('Database Error', err);
  }
};

export async function DELETE(request: NextRequest) {
  await connectMongo();
  try {
    const slug = request.url.split('/')[5];
    const deletedPost = await Project.findByIdAndDelete(slug);
    return NextResponse.json(deletedPost);
  } catch {
    return NextResponse.json(
      {
        error: 'Failed to remove post',
      },
      {
        status: 500,
      }
    );
  }
}
