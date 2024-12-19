import { base64 } from "@/lib/base64";
import { getFullImageSrc } from "@/lib/imagePathGenerate";
import Image from "next/image";

const MovieSearchCard = ({ data, onSelect }) => {
  const { original_title, poster_path, release_date } = data || {};
  const src = getFullImageSrc(poster_path);
  const date = new Date(release_date);
  return (
    <div
      class="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded"
      onClick={() => onSelect(data)}
    >
      <Image
        src={src}
        height={64}
        width={96}
        alt={original_title}
        class="w-16 h-24 object-cover rounded"
        placeholder="blur"
        blurDataURL={base64}
      />
      <div>
        <h3 class="font-bold">{original_title}</h3>
        <p class="text-sm text-gray-400">{date.getFullYear()}</p>
      </div>
    </div>
  );
};

export default MovieSearchCard;
