import { prisma } from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  const reminders = await prisma.reminder.findMany({
    where: {
      done: false,
    },
    orderBy: { id: "asc" },
  });
  return NextResponse.json(reminders);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, important } = body;

    const setNewReminder = await prisma.reminder.create({
      data: body,
    });

    return NextResponse.json("Se genero correctamente el recordatorio");
  } catch (error) {
    return NextResponse.json("Surgio un error");
  }
}
