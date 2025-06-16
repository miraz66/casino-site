import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { data } from "@/app/assets/Data.jsx";

// import Icon
import Icon1 from "@/app/assets/sidebar_slots.png";
import Icon2 from "@/app/assets/sidebar_blackjack.png";
import Icon3 from "@/app/assets/sidebar_roulette.png";
import Icon4 from "@/app/assets/sidebar_live_dealers.png";
import Icon5 from "@/app/assets/sidebar_baccarat.png";
import Icon6 from "@/app/assets/sidebar_crash.png";
import Icon7 from "@/app/assets/sidebar_dice.png";
import GameCarousel from "@/app/components/GameCarousel";
import ProvidersCarousel from "@/app/components/ProvidersCarousel";

const manuList = [
  {
    id: 1,
    name: "Slots",
    icon: Icon1
  },
  {
    id: 2,
    name: "Blackjack",
    icon: Icon2
  },
  {
    id: 3,
    name: "Roulette",
    icon: Icon3
  },
  {
    id: 4,
    name: "Live",
    icon: Icon4
  },
  {
    id: 5,
    name: "Baccarat",
    icon: Icon5
  },
  {
    id: 6,
    name: "Crash",
    icon: Icon6
  },
  {
    id: 7,
    name: "Dice",
    icon: Icon7
  }

];

export default function ManuList() {
  return (
    <>
      <div className="mt-6 hidden lg:block text-sm">
        <ul className="flex gap-2 justify-between">
          <li className="rounded bg-primary pr-4 flex items-center justify-center">
            <Image src={Icon7} alt="Icon7" />
            <span className="text-white tracking-wide">All Games</span>
          </li>

          {
            manuList.map((item) => (
              <li key={item.id} className="rounded bg-[#223444] flex items-center justify-center pr-3 pl-1">
                <Image src={item.icon} alt="Icon" />
                <span>{item.name}</span>
              </li>
            ))
          }

          <li className="rounded bg-primary pr-2 flex items-center justify-center">
            <Image src={Icon7} alt="Icon7" />
            <span className="tracking-widest">Collections</span>
            <ChevronDownIcon className="ml-4 p-0.5 w-6 h-6 bg-gray-700/50 rounded" />
          </li>
          <li className="rounded bg-primary pr-2 flex items-center justify-center">
            <Image src={Icon7} alt="Icon7" />
            <span>Providers</span>
            <ChevronDownIcon className="ml-6 p-0.5 w-6 h-6 bg-gray-700/50 rounded" />
          </li>
        </ul>
      </div>

      {/* Game Carousel */}
      {
        data.filter((item) => item.name !== "Providers").map((item, index) => (
          <GameCarousel data={...item} key={index} />
        ))
      }

      {/*Providers Carousel */}
      {
        data.filter((item) => item.name === "Providers").map((item, index) => (
          <ProvidersCarousel data={...item} key={index} />
        ))
      }
    </>
  );
};
