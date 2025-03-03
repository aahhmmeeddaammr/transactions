import { customers } from "@/lib/constants/db.constant";

export function GET() {
  return Response.json({ status: 200, message: "Done", data: customers });
}
