import React from "react";
import Image from "next/image";
import ImageSlider from "@/app/components/ImageSlider";

// Import images with descriptive names
import featuredBanner1 from "@/app/assets/image (2).png";
import featuredBanner2 from "@/app/assets/image (3).png";
import promoBanner1 from "@/app/assets/image (4).png";
import promoBanner2 from "@/app/assets/image (5).png";
import promoBanner3 from "@/app/assets/image (6).png";
import promoBanner4 from "@/app/assets/image (7).png";
import searchIcon from "../assets/SVGRepo_iconCarrier.png";

export default function Hero() {
  // Image gallery configuration
  const featuredImages = [
    { src: featuredBanner1, alt: "Featured game promotion" },
    { src: featuredBanner2, alt: "New game release" },
  ];

  const promoImages = [
    { src: promoBanner1, alt: "Special tournament announcement" },
    { src: promoBanner2, alt: "Weekly bonus offer" },
    { src: promoBanner3, alt: "VIP club benefits" },
    { src: promoBanner4, alt: "Limited-time jackpot" },
  ];

  return (
    <section className="space-y-4">
      {/* Main banner slider */}
      <ImageSlider />

      {/* Mobile auth buttons */}
      <div className="mt-2 mb-4 flex items-center justify-center gap-2 md:hidden">
        <button
          className="bg-accent2 hover:bg-accent2/90 w-full rounded px-2 py-3 text-sm text-white transition-colors"
          aria-label="Log in to your account"
        >
          Log In
        </button>
        <button
          className="bg-accent hover:bg-accent/90 w-full rounded px-2 py-3 text-sm text-white transition-colors"
          aria-label="Create new account"
        >
          Sign Up
        </button>
      </div>

      {/* Image gallery grid */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
        {/* Featured banners */}
        {featuredImages.map((image, index) => (
          <div key={`featured-${index}`} className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              className="h-full w-full rounded-md object-cover"
              priority={index === 0} // Only prioritize first image
            />
          </div>
        ))}

        {/* Promo banners grid */}
        <div className="col-span-2 grid w-full grid-cols-4 gap-2 md:col-span-1 md:grid-cols-2 md:gap-4">
          {promoImages.map((image, index) => (
            <div key={`promo-${index}`} className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Search bar */}
      <div className="bg-primary mt-6 flex items-center rounded-md px-3 py-1 md:py-2">
        <label htmlFor="search" className="sr-only">
          Search games
        </label>
        <Image
          src={searchIcon}
          alt=""
          width={24}
          height={24}
          className="h-5 w-5 md:h-6 md:w-6"
          aria-hidden="true"
        />
        <input
          type="search"
          id="search"
          className="text-text-primary w-full bg-transparent px-3 py-2 outline-none placeholder:text-gray-400"
          placeholder="Search your game..."
          spellCheck="false"
          autoComplete="off"
          aria-label="Search for games"
        />
      </div>
    </section>
  );
}
