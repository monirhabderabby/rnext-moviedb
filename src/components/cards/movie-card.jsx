import Link from "next/link";

const MovieCard = ({ isTextRender }) => {
  return (
    <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
      <Link href="/">
        <img
          src="https://image.tmdb.org/t/p/original/aosm8NMQ3UyoBVpSxyimorCQykC.jpg"
          alt="Venom: The Last Dance"
          className="w-full rounded-lg"
        />
        {isTextRender && (
          <div className="mt-2">
            <h3 className="text-light text-sm font-bold truncate">Smile 2</h3>
            <p className="text-primary text-xs">2023</p>
          </div>
        )}
      </Link>
    </div>
  );
};

export default MovieCard;
