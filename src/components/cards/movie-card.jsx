import Image from "next/image";
import Link from "next/link";

const MovieCard = async ({ isTextRender, data }) => {
  const { poster_path, title, release_date } = data || {};
  const date = new Date(release_date);

  return (
    <div className="flex-shrink-0 w-48  cursor-pointer hover:scale-105 transition-transform">
      <Link href="/" className="">
        <Image
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          width={192}
          height={100}
          alt="Venom: The Last Dance"
          className="w-full rounded-lg bg-white/10"
        />
        {isTextRender && (
          <div className="mt-2">
            <h3 className="text-light text-sm font-bold truncate">{title}</h3>
            <p className="text-primary text-xs">{date.getFullYear()}</p>
          </div>
        )}
      </Link>
    </div>
  );
};

export default MovieCard;
