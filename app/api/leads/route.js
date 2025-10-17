import { NextResponse } from "next/server";
// We will import our Supabase client here later

export async function POST(request) {
  const body = await request.json();

  // TODO: Add logic to save the lead data to Supabase
  console.log("API received lead:", body);

  // Return a success response
  return NextResponse.json(
    { message: "Lead captured successfully" },
    { status: 201 }
  );
}

