import { prisma } from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

// ✅ GET: Obtener recordatorio por ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const infoReminder = await prisma.reminder.findMany({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(infoReminder);
}

// ✅ PUT: Actualizar un recordatorio
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    return NextResponse.json("Se generó correctamente el recordatorio");
  } catch (error) {
    return NextResponse.json("Surgió un error");
  }
}

// ✅ DELETE: Eliminar un recordatorio por ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.reminder.deleteMany({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json(
      {
        message: `Se eliminó el registro correctamente`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Surgió un error terrible" },
      { status: 500 }
    );
  }
}
