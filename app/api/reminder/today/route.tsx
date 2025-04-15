import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

const now = new Date();

const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

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
      remindAt: {
        gte: startOfToday,
        lte: endOfToday,
      },
    },
    orderBy: { id: "asc" },
  });
  return NextResponse.json(remindersToday);
}
