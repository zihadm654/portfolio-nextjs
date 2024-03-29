import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export const GET = async (req: NextRequest) => {
  try {
    const id = req.url.split('/').at(-1);

    const project = await db.projects.findUnique({
      where: {
        id,
      },
    });
    if (!project) {
      return NextResponse.json(
        {
          message: 'post not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json(
      { message: 'Database Error', err },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const id = req.url.split('/').at(-1);

    await db.projects.delete({
      where: {
        id,
      },
    });

    return NextResponse.json('post has been deleted');
  } catch (err) {
    return NextResponse.json({ message: 'delete Error', err }, { status: 500 });
  }
};

export const PATCH = async (request: Request) => {
  try {
    const id = request.url.split('/').at(-1);
    const body = await request.json();
    const { title, description, repo, site, time, img, client } = body;

    const updateProject = await db.projects.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        repo,
        site,
        time,
        img,
        client,
      },
    });
    if (!updateProject) {
      return NextResponse.json(
        {
          message: 'post not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(updateProject);
  } catch (err) {
    return NextResponse.json({ message: 'update Error', err }, { status: 500 });
  }
};
