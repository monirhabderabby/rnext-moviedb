"use client";
import { base64 } from "@/lib/base64";
import { getFullImageSrc } from "@/lib/imagePathGenerate";
import { getMoviesBySearch } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchResultContaine = () => {
  const [movies, setMovies] = useState([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMoviesBySearch(query);
      console.log(data);

      setMovies(data?.data);
    };

    fetchMovies();
  }, [query]);

  let content;

  if (movies.length == 0) {
    content = <div className="text-white">No Result found</div>;
  } else if (movies.length > 0) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 pt-24 pb-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Search Results for &apos;{query}&apos;
        </h1>
        <p className="text-gray-400">Found {movies.length} results</p>
      </div>
      {content}
    </main>
  );
};

export default SearchResultContaine;

const MovieCard = ({ data }) => {
  const { id, poster_path, title, release_date, vote_average, backdrop_path } =
    data || {};
  const date = new Date(release_date);

  const src = getFullImageSrc(poster_path ?? backdrop_path);
  return (
    <Link
      href={`/movie/${id}`}
      className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
    >
      <Image
        src={src}
        width={300}
        height={100}
        placeholder="blur"
        blurDataURL={base64}
        alt={title}
        className="w-full aspect-[2/3] object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold mb-2">{title}</h3>
        <div className="flex justify-between text-sm text-gray-400">
          <span>{date.getFullYear()}</span>
          <span>⭐ {vote_average?.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
};
