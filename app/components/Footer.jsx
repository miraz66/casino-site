import Image from "next/image";
import Image1 from "@/app/assets/footer_payments.png";
import LegalLogo from "@/app/assets/legal_logos.png";
import FooterImage1 from "@/app/assets/Footer_image.png";
import FooterImage2 from "@/app/assets/Footer_image_1.png";
import React from "react";

const data = [
  {
    id: 1,
    title: "Games",
    links: [
      { name: "Slots", link: "#" },
      { name: "Live Dealers", link: "#" },
      { name: "Baccarat", link: "#" },
      { name: "Crash", link: "#" },
      { name: "Dice", link: "#" },
    ],
  },
  {
    id: 2,
    title: "Promotions",
    links: [
      { name: "Welcome Bonus", link: "#" },
      { name: "Cash Back Deals", link: "#" },
      { name: "Weekly Cashback", link: "#" },
      { name: "Tournaments", link: "#" },
      { name: "VIP Club", link: "#" },
    ],
  },
  {
    id: 3,
    title: "Banking",
    links: [
      { name: "Deposit Options", link: "#" },
      { name: "Withdraw Options", link: "#" },
      { name: "Refund Policy", link: "#" },
      { name: "Payment Security", link: "#" },
      { name: "AML Policy", link: "#" },
    ],
  },
  {
    id: 4,
    title: "Casino",
    links: [
      { name: "Terms & Conditions", link: "#" },
      { name: "Privacy Policy", link: "#" },
      { name: "Contact Us", link: "#" },
      { name: "Bonus Terms", link: "#" },
      { name: "About *******", link: "#" },
    ],
  },
  {
    id: 5,
    title: "Customer Care",
    links: [
      { name: "Live Chat", link: "#" },
      { name: "Phone Support", link: "#" },
      { name: "Email Support", link: "#" },
      { name: "Help Desk", link: "#" },
      { name: "Responsible Gaming", link: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="bg-primary-dark">
      <div className="mx-auto p-4 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl xl:p-10">
        <div className="grid-cols-3 gap-4 md:grid">
          <div className="col-span-1">
            <div className="bg-text-primary h-14 w-28 rounded-md"></div>
            <p className="mt-4 text-sm">
              Strike it rich at *******! Experience heart-pounding action with
              massive jackpots, fast payouts, and VIP treatment that keeps
              champions coming back. Join thousands of winners today - your
              fortune awaits!
            </p>
          </div>
          <div className="col-span-2 mt-4 grid grid-cols-2 gap-8 md:mt-0 md:grid-cols-3 md:gap-8 lg:grid-cols-5 lg:gap-0">
            {data.map((item) => (
              <div key={item.id}>
                <h2 className="mb-2 text-lg font-bold text-white">
                  {item.title}
                </h2>
                <ul className="space-y-2 text-sm">
                  {item.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="block space-y-2 py-2 lg:hidden">
              <Image src={FooterImage1} alt="Footer Image" />
              <Image src={FooterImage2} alt="Footer Image" />
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <div className="bg-primary-dark flex justify-center">
          <Image src={Image1} alt="Footer Payments" />
        </div>
        <hr className="my-6 border-gray-600" />

        <div className="bg-primary-dark flex justify-center lg:hidden">
          <Image src={LegalLogo} alt="Footer Payments" />
        </div>

        <hr className="my-6 block border-gray-600 lg:hidden" />

        <div className="text-text-primary relative">
          <p className="text-center text-xs">
            Copyright © 2023 ******* Casino. All rights reserved.
          </p>
          <p className="mt-6 text-center text-sm uppercase">
            GAMBLING CAN BE ADDICTIVE. PLAY RESPONSIBLY!
          </p>
          <p className="mt-4 text-center text-xs leading-5">
            ******* casino is operated by *******, ensuring a secure and fair
            gaming environment for all players. We strictly adhere to all
            regulatory requirements to maintain transparency and fairness. Our
            commitment to integrity and ethical practices is at the core of our
            business. We employ advanced security measures, including SSL
            encryption and robust firewall systems, to protect your personal and
            financial information. Promoting responsible gaming is a priority at
            ******* Casino. We provide tools and resources to help you gamble
            responsibly. We offer a variety of secure payment methods and ensure
            seamless transactions. All payment processes are encrypted and
            compliant with industry standards. Our customer support team is
            available 24/7 to assist you with any questions or issues you may
            have. Contact us via Live Chat, Email, or Phone for prompt and
            professional assistance.
          </p>

          <Image
            className="absolute top-0 right-0 hidden lg:block"
            src={LegalLogo}
            alt="Legal logos"
          />
        </div>
      </div>
      <div className="bg-tertiary mt-2 flex items-center justify-center gap-2 px-4 py-10 md:hidden">
        <button className="bg-accent2 w-full rounded px-2 py-4 text-sm text-white">
          Log In
        </button>
        <button className="bg-accent w-full rounded px-2 py-4 text-sm text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
}
