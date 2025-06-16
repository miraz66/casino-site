import Image from "next/image";
import Headers from "@/app/components/Headers";
import Hero from "@/app/components/Hero";
import ManuList from "@/app/components/ManuList";
import Payments from "@/app/components/Payments";
import Footer from "@/app/components/Footer";

/**
 * Import sidebar icons with descriptive names
 * Each import is named according to its purpose for better maintainability
 */
import menuIcon from "./assets/menu_image.png";
import promotionsIcon from "./assets/promotions_image.png";
import vipClubIcon from "./assets/sidebar_vip_club.png";
import tournamentIcon from "./assets/sidebar_tournament.png";
import slotsIcon from "./assets/sidebar_slots.png";
import blackjackIcon from "./assets/sidebar_blackjack.png";
import rouletteIcon from "./assets/sidebar_roulette.png";
import baccaratIcon from "./assets/sidebar_baccarat.png";
import liveDealersIcon from "./assets/sidebar_live_dealers.png";
import providersIcon from "./assets/sidebar_providers.png";
import supportIcon from "./assets/sidebar_support.png";

/**
 * Array of sidebar icons with metadata for better accessibility and future extensibility
 * Each item includes:
 * - icon: The imported image
 * - alt: Descriptive alt text for accessibility
 * - id: Unique identifier
 */
const sidebarIcons = [
  { icon: menuIcon, alt: "Menu", id: "menu" },
  { icon: promotionsIcon, alt: "Promotions", id: "promotions" },
  { icon: vipClubIcon, alt: "VIP Club", id: "vip-club" },
  { icon: tournamentIcon, alt: "Tournaments", id: "tournaments" },
  { icon: slotsIcon, alt: "Slot Games", id: "slots" },
  { icon: blackjackIcon, alt: "Blackjack Games", id: "blackjack" },
  { icon: rouletteIcon, alt: "Roulette Games", id: "roulette" },
  { icon: baccaratIcon, alt: "Baccarat Games", id: "baccarat" },
  { icon: liveDealersIcon, alt: "Live Dealers", id: "live-dealers" },
  { icon: providersIcon, alt: "Game Providers", id: "providers" },
  { icon: supportIcon, alt: "Customer Support", id: "support" },
];

export default function Home() {
  return (
    <main className="font-display text-text-primary bg-tertiary">
      {/*
        Fixed Sidebar Navigation
        - Hidden on mobile (shown on md screens and up)
        - Fixed positioning for persistent access
      */}
      <aside className="bg-primary fixed hidden min-h-screen w-14 py-4 md:block">
        <nav className="flex w-full flex-col items-center justify-center gap-4">
          {sidebarIcons.map(({ icon, alt, id }) => (
            <Image
              key={id}
              src={icon}
              alt={alt}
              width={32} // Explicit width for performance
              height={32} // Explicit height for performance
              className="cursor-pointer transition-opacity hover:opacity-80"
              role="button" // Indicates interactive element
              tabIndex={0} // Make focusable for keyboard navigation
            />
          ))}
        </nav>
      </aside>

      {/*
        Main Page Layout
        - Responsive max-width containers
        - Padding adjusts for different screen sizes
      */}
      <div className="ml-0 md:ml-14">
        {" "}
        {/* Account for sidebar width on larger screens */}
        {/* Header Component */}
        <Headers />
        {/* Main Content Area */}
        <div className="mx-auto p-4 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl xl:p-10">
          <Hero />
          <ManuList />
          <Payments />
        </div>
        {/* Footer Component */}
        <Footer />
      </div>
    </main>
  );
}
