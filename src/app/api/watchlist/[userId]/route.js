import { WatchlistModel } from "@/models/watchlist-modal";

export async function GET(req, { params }) {
  const userId = params?.userId;

  try {
    const res = await WatchlistModel.find({
      userId,
    });

    return new Response(JSON.stringify(res), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify("Failed to fetch watchlist"), {
      status: 500,
    });
  }
}
