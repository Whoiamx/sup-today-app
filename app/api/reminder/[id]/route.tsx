import { prisma } from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

// ✅ GET: Obtener un recordatorio por ID
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  const infoReminder = await prisma.reminder.findUnique({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json(infoReminder);
}

// ✅ PUT: Actualizar un recordatorio por ID
export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const { title, description, important, done } = await request.json();

    const updated = await prisma.reminder.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        description,
        important,
        done,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { message: "Error al actualizar" },
      { status: 500 }
    );
  }
}

// ✅ DELETE: Eliminar un recordatorio por ID
export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;

    await prisma.reminder.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({ message: "Eliminado correctamente" });
  } catch (error) {
    return NextResponse.json({ message: "Error al eliminar" }, { status: 500 });
  }
}
