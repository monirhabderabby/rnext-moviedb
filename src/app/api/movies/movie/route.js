export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  const apiKey = process.env.TMDB_API_KEY;

  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

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
