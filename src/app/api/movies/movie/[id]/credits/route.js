export async function GET(req, { params }) {
  const movieId = params.id;

  const apiKey = process.env.TMDB_API_KEY;

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
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
        data,
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
