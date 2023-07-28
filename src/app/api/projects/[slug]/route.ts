import { Project } from '@/lib/model';
import connectMongo from '@/lib/dbConfig';
import { NextResponse } from 'next/server';

export const GET = async ({ params }: { params: { slug: string } }) => {
  await connectMongo();
  const { slug } = params;
  try {
    const project = await Project.findById(slug);
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json('Database Error', err);
  }
};

export async function DELETE(
  req: Request,
  { params }: { params: { slug: string } }
) {
  await connectMongo();
  const { slug } = params;
  try {
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
