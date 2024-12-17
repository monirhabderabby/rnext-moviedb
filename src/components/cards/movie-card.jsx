import Link from "next/link";

const MovieCard = ({ isTextRender }) => {
  return (
    <div class="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
      <Link href="/">
        <img
          src="https://image.tmdb.org/t/p/original/aosm8NMQ3UyoBVpSxyimorCQykC.jpg"
          alt="Venom: The Last Dance"
          class="w-full rounded-lg"
        />
        {isTextRender && (
          <div class="mt-2">
            <h3 class="text-light text-sm font-bold truncate">Smile 2</h3>
            <p class="text-primary text-xs">2023</p>
          </div>
        )}
      </Link>
    </div>
  );
};

export default MovieCard;
