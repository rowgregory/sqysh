import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import {
  C21NEJG,
  SC,
  PNest,
  LPDR,
  DD,
  SB,
  Platorum,
  TC,
  ThePops,
} from "@/public/images";

const clientMarqueeData = [
  {
    img: LPDR,
    alt: "Little Paws Dachshund Rescue",
    className: "bg-white",
  },
  {
    img: DD,
    alt: `Daniele's Dogs`,
    className: "bg-[#f8d8df]",
  },
  {
    img: PNest,
    alt: "Devon Hunt with Proper Nest",
    className: "bg-white",
  },
  {
    img: C21NEJG,
    alt: "Eileen Jonah with Century 21 North East Jonah Group",
    className: "bg-[#303030]",
  },
  {
    img: SC,
    alt: "Grant Story with Story Construction",
    className: "bg-white",
  },
  {
    img: SB,
    alt: "Pam Driscoll with Saltwater Bookkeeping",
    className: "bg-white",
  },
  {
    img: Platorum,
    alt: "Stu Ginsburg with Platorum",
    className: "bg-black",
  },
  {
    img: TC,
    alt: "Adrianna DelDotto with Thoroughly Cleaned, LLC",
    className: "bg-white",
  },
  {
    img: ThePops,
    alt: "Robyn Bell with The Pops Orchestra of Bradenton & Sarasota",
    className: "bg-black",
  },
];

const ClientMarquee = () => {
  return (
    <Marquee autoFill={true}>
      {clientMarqueeData.map((clientMarquee, i) => (
        <Image
          key={i}
          src={clientMarquee.img}
          alt={clientMarquee.alt}
          width={180}
          height={180}
          className={`${clientMarquee.className} aspect-square object-contain p-1 mr-2`}
        />
      ))}
    </Marquee>
  );
};

export default ClientMarquee;
