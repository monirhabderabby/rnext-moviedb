"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SocialShareButtons = () => {
  const pathName = usePathname();
  const currentUrl = `${
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  }${pathName}`;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}&text=Check+this+out!`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      currentUrl
    )}`,
  };
  return (
    <div className="flex flex-wrap gap-4">
      <a
        href={shareLinks.facebook}
        className="text-center cursor-pointer"
        target="_blank"
      >
        <Image
          height={32}
          width={32}
          src="http://facebook.com/favicon.ico"
          alt="Facebook"
          className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
        />
        <p className="text-sm">Facebook</p>
      </a>

      <a
        href={shareLinks.twitter}
        target="_blank"
        className="text-center cursor-pointer"
      >
        <Image
          height={32}
          width={32}
          src="http://x.com/favicon.ico"
          alt="Facebook"
          className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
        />
        <p className="text-sm">X</p>
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        className="text-center cursor-pointer"
      >
        <Image
          src="http://linkedin.com/favicon.ico"
          alt="Facebook"
          height={32}
          width={32}
          className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
        />
        <p className="text-sm">Linkedin</p>
      </a>
    </div>
  );
};

export default SocialShareButtons;
