import { NextResponse } from 'next/server';
import { Project, IProject } from '../../../lib/model/index';
import { connectToDatabase } from '../../../lib/utils';

connectToDatabase();

export async function GET() {
  try {
    const projects = await Project.find();
    return NextResponse.json(projects.reverse());
  } catch {
    return NextResponse.json('error', {
      status: 500,
    });
  }
}
export async function POST(req: Request) {
  try {
    const body: IProject = await req.json();
    const newPost = new Project(body);
    const saved = await newPost.save();
    return NextResponse.json(saved);
  } catch {
    return NextResponse.json('error', {
      status: 500,
    });
  }
}

export async function DELETE(req: Request) {
  const query = new URL(req.url).searchParams;
  const id = query.get('id');
  try {
    const deletedPost = await Project.findByIdAndDelete(id);

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
