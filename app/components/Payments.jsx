import React from "react";
import Image from "next/image";
import Image1 from "@/app/assets/payments.png";

export default function Payments() {
  return (
    <>
      <div className="bg-primary-dark w-full grid-cols-5 gap-4 space-y-4 rounded-md p-6 px-6 md:grid md:space-y-0">
        <h1 className="col-span-1 text-xl font-bold">
          You don’t have Crypto? No problem.
        </h1>
        <Image
          src={Image1}
          alt="Card image"
          className="col-span-3 h-full w-full rounded-md object-cover"
        />
        <div className="col-span-1 flex items-center justify-center">
          <button className="bg-accent w-full rounded py-2.5 text-white">
            Buy Now
          </button>
        </div>
      </div>

      <div className="bg-primary-dark relative mt-6 overflow-hidden rounded-md p-6 px-6">
        <h4 className="mb-2 text-xl font-bold">*******Casino</h4>
        <p className="max-h-[200px] overflow-hidden text-sm text-gray-500">
          {/* long content */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellat
          repellendus optio. Quae, autem quas. Quae, autem quas. Quae, autem
          quas. Quae, autem quas. Quae, autem quas. Quae, autem quas. Quae,
          autem quas. Quae, autem quas. Quae, autem quas. Quae, autem quas.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellat
          repellendus optio. Quae, autem quas. Quae, autem quas. Quae, autem
          quas. Quae, autem quas. Quae, autem quas. Quae, autem quas. Quae,
          autem quas. Quae, autem quas. Quae, autem quas. Quae, autem quas.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellat
          repellendus optio. Quae, autem quas. Quae, autem quas. Quae, autem
          quas. Quae, autem quas. Quae, autem quas. Quae, autem quas. Quae,
          autem quas. Quae, autem quas. Quae, autem quas. Quae, autem quas.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellat
          repellendus optio. Quae, autem quas. Quae, autem quas. Quae, autem
          quas. Quae, autem quas. Quae, autem quas. Quae, autem quas. Quae,
          autem quas. Quae, autem quas. Quae, autem quas. Quae, autem quas.
          Quae, autem quas. Quae, autem quas. Quae, autem quas. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quia repellat repellendus
          optio. Quae, autem quas. Quae, autem quas. Quae, autem quas. Quae,
          autem quas. Quae, autem quas. Quae, autem quas. Quae, autem quas.
          Quae, autem quas. Quae, autem quas. Quae, autem quas.
        </p>

        {/* Fade overlay */}
        <div className="from-primary-dark pointer-events-none absolute right-0 bottom-16 left-0 h-20 bg-gradient-to-t to-transparent" />

        <button className="bg-accent hover:bg-accent/80 mx-auto mt-2 block w-full cursor-pointer rounded py-3 text-sm text-white uppercase transition duration-300 ease-in md:w-1/3">
          Read more
        </button>
      </div>
    </>
  );
}
