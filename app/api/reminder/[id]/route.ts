import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

// ✅ GET: Obtener un recordatorio por ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Convertimos el ID a número ya que la base de datos lo requiere como tal
  const reminder = await prisma.reminder.findUnique({
    where: { id: Number(id) },
  });

  if (!reminder) {
    return NextResponse.json(
      { error: "Recordatorio no encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(reminder);
}

// ✅ PUT: Actualizar un recordatorio por ID
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { title, description, important, done } = await request.json();

  try {
    const updatedReminder = await prisma.reminder.update({
      where: { id: Number(id) },
      data: { title, description, important, done },
    });

    return NextResponse.json(updatedReminder);
  } catch (error) {
    return NextResponse.json({ error: "Error al actualizar" }, { status: 500 });
  }
}

// ✅ DELETE: Eliminar un recordatorio por ID
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    await prisma.reminder.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "Eliminado correctamente" });
  } catch (error) {
    return NextResponse.json({ error: "Error al eliminar" }, { status: 500 });
  }
}
