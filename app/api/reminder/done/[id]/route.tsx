import { prisma } from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

interface Params {
  params: { id: string };
}

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const updateReminderToDone = await prisma.reminder.update({
      where: {
        id: Number(params.id),
      },
      data: {
        done: true,
      },
    });

    // Return the JSON response
    return NextResponse.json(updateReminderToDone);
  } catch (error) {
    // Return error message with status code 500
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}
