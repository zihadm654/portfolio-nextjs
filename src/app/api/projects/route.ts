import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
	try {
  
	  const projects = await prisma.projects.findMany({
		orderBy:{
		  id:'desc'
		}
	  })
   
	  return NextResponse.json(projects);
	} catch (err) {
	  return NextResponse.json(
		{message:'Database Error', err},
		{status:500});
	}
  };

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()
    	const {title,description,repo,site,time,img,role,tags,client} = body

		const newProject = await prisma.projects.create({
			data:{
				title,description,time,site,repo,img,role,tags,client
			}
		});

		return NextResponse.json(newProject);
	} catch (error) {
		return NextResponse.json({message: 'post error',error},{status:500})
	}
}