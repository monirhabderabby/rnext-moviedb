export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjg0M2Q0NjhmYzZiMWQyZGJiMWQ4YWJhY2RhOThjMiIsIm5iZiI6MTcyOTY4NjkzNi43MTUwMDAyLCJzdWIiOiI2NzE4ZWQ5OGM3ODAyY2M1MDM1OWFiMGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iprcFJqKlYXARrv6ZvxzoC0mChzQnZ4CXXPxC1Lp6k0",
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
