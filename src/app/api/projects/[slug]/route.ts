import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';

export const GET = async (request:NextRequest,{params}) => {
  try {
    const {slug} = params;
    const id = slug

    const project = await prisma.projects.findUnique({
      where:{
        id
      }
    })
    if(!project){
      return NextResponse.json({
        message: "post not found"
      },{status:404})
    }

    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json({message:'Database Error', err},{status:500});
  }
};

export const Delete = async ({params}) => {
  try {
    const {slug} = params;
    const id = slug

    await prisma.projects.delete({
      where:{
        id
      }
    })

    return NextResponse.json("post has been deleted");
  } catch (err) {
    return NextResponse.json({message:'delete Error', err},{status:500});
  }
};

export const PATCH = async (request: NextRequest,{params}) => {
  try {
    const {slug} = params;
    const id = slug
    const body = await request.json()
    const {title,description,repo,site,time,img,role,tags,client} = body    

    const updateProject = await prisma.projects.update({
      where:{
        id
      },
      data:{
        title,description,repo,site,time,img,role,tags,client
      }
    })
    if(!updateProject){
      return NextResponse.json({
        message: "post not found"
      },{status:404})
    }

    return NextResponse.json(updateProject);
  } catch (err) {
    return NextResponse.json({message:'update Error', err},{status:500});
  }
};