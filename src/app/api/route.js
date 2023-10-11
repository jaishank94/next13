import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req, res) {
  const body = await req.json();
  try {
    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
