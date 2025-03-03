import { NextResponse } from "next/server";
import { customers } from "@/lib/constants/db.constant";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const path = request.url.split("/")
  const id = path[path.length-1]

  if (!id) {
    return NextResponse.json(
      { status: 400, message: "Invalid or missing customer ID" },
      { status: 400 }
    );
  }

  const customer = customers.find((c) => c.id === id);

  if (!customer) {
    return NextResponse.json(
      { status: 404, message: "Customer not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { status: 200, message: "Success", data: customer },
    { status: 200 }
  );
}
