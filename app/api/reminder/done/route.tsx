import { prisma } from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  try {
    const remindersDone = await prisma.reminder.findMany({
      where: {
        done: true,
      },
      orderBy: { id: "asc" },
    });
    return NextResponse.json(remindersDone);
  } catch (error) {
    return NextResponse.json(error);
  }
}
