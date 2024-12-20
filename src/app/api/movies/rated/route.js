export async function GET() {
  const apiKey = process.env.TMDB_API_KEY;
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    if (!res.ok) {
      const msg = "Failed to fetch trending movies";
      return new Response(
        JSON.stringify({
          message: msg,
        }),
        {
          status: res.status,
        }
      );
    }

    const data = await res.json();

    return new Response(
      JSON.stringify({
        data: data?.results,
        message: "Successfully reetrieved",
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      {
        status: 500,
      }
    );
  }
}
