import { NextResponse } from "next/server";
import { transactions } from "@/lib/constants/db.constant";
import type { NextRequest } from "next/server";


export async function GET(request: NextRequest) {
  const path = request.url.split("/")
  const id = path[path.length-1]
  if (!id) {
    return NextResponse.json(
      { status: 400, message: "Invalid or missing transaction ID" },
      { status: 400 }
    );
  }

  // Ensure we correctly compare IDs as strings
  const transaction = transactions.find((t) => t.id === id);

  if (!transaction) {
    return NextResponse.json(
      { status: 404, message: "Transaction not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { status: 200, message: "Success", data: transaction },
    { status: 200 }
  );
}
