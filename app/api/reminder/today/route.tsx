import { prisma } from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

const now = new Date();

// Obtenés el inicio del día (00:00:00)
const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

// Obtenés el final del día (23:59:59.999)
const endOfToday = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  23,
  59,
  59,
  999
);

export async function GET(request: Request) {
  const remindersToday = await prisma.reminder.findMany({
    where: {
      createdAt: {
        gte: startOfToday,
        lte: endOfToday,
      },
    },
    orderBy: { id: "asc" },
  });
  return NextResponse.json(remindersToday);
}
