import { base64 } from "@/lib/base64";
import moment from "moment";
import Image from "next/image";
import { Suspense } from "react";
import Cast from "./cast";
import WatchlistButtons from "./watchlist-container";

const MovieDetails = ({ data }) => {
  const {
    poster_path,
    original_title,
    overview,
    release_date,
    runtime,
    genres,
    id,
  } = data || {};

  const src = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <div id="movieDetails" className="min-h-screen pt-20 mb-8">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            fill
            src={src}
            alt={original_title}
            placeholder="blur"
            blurDataURL={base64}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
        </div>

        <div className="relative container mx-auto px-4 pt-32">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 relative">
              <Image
                src={src}
                alt={original_title}
                fill
                className="w-full rounded-lg shadow-lg"
                placeholder="blur"
                blurDataURL={base64}
              />
            </div>

            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">{original_title}</h1>

              <div className="flex items-center mb-4 space-x-4">
                <span className="text-green-500">
                  {" "}
                  {moment(release_date).format("ll")}{" "}
                </span>
                <span>| </span>
                <span>{runtime} min</span>
              </div>

              <p className="text-lg mb-6">{overview}</p>

              <div className="mb-6">
                <h3 className="text-gray-400 mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {genres.map(({ id, name }) => (
                    <span
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                      key={id}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              <Suspense
                fallback={
                  <div className="h-[96px] flex justify-center items-center w-[200px]">
                    Loading...
                  </div>
                }
              >
                <Cast movieId={id} />
              </Suspense>

              <WatchlistButtons movieId={id} />

              <div className="mb-6">
                <h3 className="text-gray-400 mb-2">Share on social media</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="text-center cursor-pointer">
                    <img
                      src="http://facebook.com/favicon.ico"
                      alt="Facebook"
                      className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                    />
                    <p className="text-sm">Facebook</p>
                  </button>

                  <button className="text-center cursor-pointer">
                    <img
                      src="http://x.com/favicon.ico"
                      alt="Facebook"
                      className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                    />
                    <p className="text-sm">X</p>
                  </button>

                  <button className="text-center cursor-pointer">
                    <img
                      src="http://linkedin.com/favicon.ico"
                      alt="Facebook"
                      className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                    />
                    <p className="text-sm">Linkedin</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
