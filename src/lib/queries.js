export const getSingleMovie = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/movies/movie/${id}`,
      {
        cache: "no-store",
      }
    );

    const resData = await res.json();

    if (!res.ok) {
      throw new Error(resData?.message);
    }

    return resData?.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCasts = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/movies/movie/${id}/credits`,
      {
        cache: "no-store",
      }
    );

    const resData = await res.json();

    if (!res.ok) {
      throw new Error(resData?.message);
    }

    return resData?.data?.cast;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getSimilerMovies = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/movies/movie/${id}/similer`,
      {
        cache: "no-store",
      }
    );

    const resData = await res.json();

    if (!res.ok) {
      throw new Error(resData?.message);
    }

    return resData?.data?.results;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMoviesBySearch = async (term) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/movies/movie?q=${term}`,
      {
        cache: "no-store",
      }
    );

    const resData = await res.json();

    if (!res.ok) {
      throw new Error(resData?.message);
    }

    return resData;
  } catch (error) {
    throw new Error(error.message);
  }
};
