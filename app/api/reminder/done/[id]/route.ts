import { prisma } from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const updateReminderToDone = await prisma.reminder.update({
      where: {
        id: Number(id),
      },
      data: {
        done: true,
      },
    });

    return NextResponse.json(updateReminderToDone);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}
