import { NextResponse, type NextRequest } from "next/server";
import { transactions } from "@/lib/constants/db.constant";


export async function GET(request: NextRequest) {
  const path = request.url.split("/")
  const id = path[path.length-1]
  if (!id) {
    return NextResponse.json(
      { status: 400, message: "Invalid transaction ID" },
      { status: 400 }
    );
  }

  // Filter transactions by string comparison
  const customerTransactions = transactions.filter((t) => t.customer_id === id);

  if (customerTransactions.length === 0) {
    return NextResponse.json(
      { status: 404, message: "Transactions not found for this customer" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { status: 200, message: "Success", data: customerTransactions },
    { status: 200 }
  );
}
