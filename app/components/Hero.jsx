import React from "react";
import Image from "next/image";
import ImageSlider from "@/app/components/ImageSlider";
import MagnifyingGlass from "../assets/SVGRepo_iconCarrier.png";

import Image1 from "@/app/assets/image (2).png";
import Image2 from "@/app/assets/image (3).png";
import Image3 from "@/app/assets/image (4).png";
import Image4 from "@/app/assets/image (5).png";
import Image5 from "@/app/assets/image (6).png";
import Image6 from "@/app/assets/image (7).png";

export default function Hero() {
  return (
    <>
      <ImageSlider />

      <div className="mt-2 mb-4 flex items-center justify-center gap-2 md:hidden">
        <button className="bg-accent2 w-full rounded px-2 py-3 text-sm text-white">
          Log In
        </button>
        <button className="bg-accent w-full rounded px-2 py-3 text-sm text-white">
          Sign Up
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
        <Image
          src={Image1}
          alt=""
          className="h-full w-full rounded-md object-cover"
        />
        <Image
          src={Image2}
          alt=""
          className="h-full w-full rounded-md object-cover"
        />
        <div className="flex gap-2 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4">
          <Image src={Image3} alt="" className="h-full w-full object-cover" />
          <Image src={Image4} alt="" className="h-full w-full object-cover" />
          <Image src={Image5} alt="" className="h-full w-full object-cover" />
          <Image src={Image6} alt="" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="bg-primary mt-6 flex items-center justify-center gap-2 pl-2">
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          <Image
            className="h-5 w-5 md:h-6 md:w-6"
            src={MagnifyingGlass}
            alt="MagnifyingGlass"
          />
        </label>

        <input
          type="text"
          id="search"
          className="border-full text-text-primary h-full w-full rounded-md object-cover py-3 tracking-wider outline-none"
          placeholder="Search your game..."
          spellCheck="false"
          autoComplete="off"
          data-ms-editor="true"
        />
      </div>
    </>
  );
}
