import { prisma } from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  try {
    const remindersImportant = await prisma.reminder.findMany({
      where: {
        important: true,
      },
      orderBy: { id: "asc" },
    });
    return NextResponse.json(remindersImportant);
  } catch (error) {
    return NextResponse.json(error);
  }
}
