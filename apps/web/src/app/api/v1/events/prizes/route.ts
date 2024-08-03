import { apis } from "~/apis";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const data = await apis.eventApi.getPrizeList();

  return Response.json({ data });
}
