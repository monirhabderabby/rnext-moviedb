import { base64 } from "@/lib/base64";
import { getCasts } from "@/lib/queries";
import Image from "next/image";

const Cast = async ({ movieId }) => {
  const casts = await getCasts(movieId);

  return (
    <div className="mb-6">
      <h3 className="text-gray-400 mb-2">Cast</h3>
      <div className="flex flex-wrap gap-4">
        {casts.slice(0, 5).map(({ original_name, profile_path }) => {
          const src = `https://image.tmdb.org/t/p/original/${profile_path}`;

          return (
            <div className="text-center" key={original_name}>
              <Image
                width={96}
                height={96}
                src={src}
                alt="Naomi Scott"
                className="w-24 h-24 rounded-full object-cover mb-2"
                placeholder="blur"
                blurDataURL={base64}
              />
              <p className="text-sm">{original_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cast;
