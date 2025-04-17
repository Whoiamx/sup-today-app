import { prisma } from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

interface Params {
  params: { id: string };
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const updateReminderToDone = await prisma.reminder.update({
      where: {
        id: Number(params.id),
      },
      data: {
        done: true,
      },
    });

    NextResponse.json(updateReminderToDone);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
