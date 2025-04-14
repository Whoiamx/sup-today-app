import { prisma } from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  return NextResponse.json("Hola");
}
export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedNote = await prisma.reminder.delete({
      where: {
        id: Number(params.id),
      },
    });
    if (!deletedNote)
      return NextResponse.json({ message: "Note not found" }, { status: 404 });

    return NextResponse.json(deletedNote);
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { title, content } = await request.json();

    const updatedNote = await prisma.reminder.update({
      where: {
        id: Number(params.id),
      },
      data: {},
    });

    return NextResponse.json(updatedNote);
  } catch (error) {
    return NextResponse.json(error);
  }
}
