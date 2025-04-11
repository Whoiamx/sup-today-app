import { prisma } from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  const reminders = await prisma.reminder.findMany({
    orderBy: { id: "asc" },
  });
  return NextResponse.json(reminders);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, description, email, phone } = body;

  const setNewReminder = await prisma.reminder.create({
    data: body,
  });

  return NextResponse.json("Se genero correctamente el recordatorio");
}
