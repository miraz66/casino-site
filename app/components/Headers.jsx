import React from "react";
import { BellAlertIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import DepositIcon from "../assets/deposit_icon.png";

export default function Headers() {
  return (
    <div className="bg-secondary">
      <div className="mx-auto px-4 py-2.5 sm:max-w-2xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl xl:px-10">
        <div className="flex items-center justify-between">
          <p className="bg-text-primary h-8 w-14 rounded-md md:h-10 md:w-20"></p>
          <div className="flex">
            <div className="flex">
              <button className="bg-primary-dark flex items-center justify-center rounded rounded-r-none border border-r-0 border-gray-600 px-4 py-1 text-xs md:py-1.5 md:text-sm">
                <p className="font-bold">$ 10,566.12</p>
              </button>
              <button className="bg-accent rounded rounded-l-none px-4 py-1 text-xs text-white md:px-4 md:py-2 md:text-sm">
                <span className="hidden md:block">DEPOSIT</span>
                <Image
                  className="md:hidden"
                  src={DepositIcon}
                  alt="DepositIcon"
                />
              </button>
            </div>

            <div className="ml-2 flex gap-2">
              <BellAlertIcon className="h-10 w-10 rounded bg-gray-500/15 p-2 text-sm text-white" />
              <UserCircleIcon className="h-10 w-10 rounded bg-gray-500/15 p-2 text-sm text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
