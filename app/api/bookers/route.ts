import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const createBookerSchema = z.object({
  name: z.string().min(1).max(191),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createBookerSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newBooker = await client.booker.create({
    data: { name: body.name },
  });

  return NextResponse.json(newBooker, { status: 201 });
}
