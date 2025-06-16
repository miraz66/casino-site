import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { data } from "@/app/assets/Data.jsx";
import GameCarousel from "@/app/components/GameCarousel";
import ProvidersCarousel from "@/app/components/ProvidersCarousel";

// Dynamically import all icons at once
const iconImports = {
  slots: require("@/app/assets/sidebar_slots.png").default,
  blackjack: require("@/app/assets/sidebar_blackjack.png").default,
  roulette: require("@/app/assets/sidebar_roulette.png").default,
  live: require("@/app/assets/sidebar_live_dealers.png").default,
  baccarat: require("@/app/assets/sidebar_baccarat.png").default,
  crash: require("@/app/assets/sidebar_crash.png").default,
  dice: require("@/app/assets/sidebar_dice.png").default,
};

const menuList = [
  { id: 1, name: "Slots", iconKey: "slots" },
  { id: 2, name: "Blackjack", iconKey: "blackjack" },
  { id: 3, name: "Roulette", iconKey: "roulette" },
  { id: 4, name: "Live", iconKey: "live" },
  { id: 5, name: "Baccarat", iconKey: "baccarat" },
  { id: 6, name: "Crash", iconKey: "crash" },
  { id: 7, name: "Dice", iconKey: "dice" },
];

export default function ManuList() {
  return (
    <>
      <div className="mt-6 hidden text-sm lg:block">
        <ul className="flex justify-between gap-2">
          {/* All Games Button */}
          <li className="bg-primary flex items-center justify-center rounded py-2 pr-9 pl-5">
            {iconImports.dice && (
              <Image
                src={iconImports.dice}
                alt="All games icon"
                width={30}
                height={30}
              />
            )}
            <span className="tracking-wide text-white">All Games</span>
          </li>

          {/* Menu Items */}
          {menuList.map((item) => {
            const icon = iconImports[item.iconKey];
            return (
              <li
                key={item.id}
                className="flex items-center justify-center rounded bg-[#223444] pr-3 pl-1"
              >
                {icon && (
                  <Image
                    src={icon}
                    alt={`${item.name} icon`}
                    width={24}
                    height={24}
                  />
                )}
                <span>{item.name}</span>
              </li>
            );
          })}

          {/* Collections Dropdown */}
          <li className="bg-primary flex items-center justify-center rounded px-4 pr-2">
            {iconImports.dice && (
              <Image
                src={iconImports.dice}
                alt="Collections icon"
                width={24}
                height={24}
              />
            )}
            <span className="tracking-widest">Collections</span>
            <ChevronDownIcon className="ml-4 h-6 w-6 rounded bg-gray-700/50 p-0.5" />
          </li>

          {/* Providers Dropdown */}
          <li className="bg-primary flex items-center justify-center rounded px-4 pr-2">
            {iconImports.dice && (
              <Image
                src={iconImports.dice}
                alt="Providers icon"
                width={24}
                height={24}
              />
            )}
            <span>Providers</span>
            <ChevronDownIcon className="ml-6 h-6 w-6 rounded bg-gray-700/50 p-0.5" />
          </li>
        </ul>
      </div>

      {/* Conditional Rendering for Carousels */}
      {data
        .filter((item) => item.name !== "Providers")
        .map((item) => (
          <GameCarousel data={item} key={item.name} />
        ))}

      {data
        .filter((item) => item.name === "Providers")
        .map((item) => (
          <ProvidersCarousel data={item} key={item.name} />
        ))}
    </>
  );
}
