import { prisma } from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  const infoReminder = await prisma.reminder.findMany({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(infoReminder);
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { title, description, important, done } = await request.json();

    const updateReminder = await prisma.reminder.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title,
        description,
        important,
        done,
      },
    });

    return NextResponse.json("Se genero correctamente el recordatorio");
  } catch (error) {
    return NextResponse.json("Surgio un error");
  }
}
export async function DELETE(request: Request, { params }: Params) {
  try {
    const deleteReminder = await prisma.reminder.deleteMany({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json(
      {
        message: `Se elimino el registro correctamente`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Surgio un error terrible" },
      { status: 500 }
    );
  }
}
