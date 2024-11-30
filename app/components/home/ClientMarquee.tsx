import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { C21NEJG, SC, PNest, LPDR, DD, SB } from "@/public/images";

const ClientMarquee = () => {
  return (
    <Marquee autoFill={true}>
      <Image
        src={LPDR}
        alt="Little Paws Dachshund Rescue"
        width={180}
        className="aspect-square bg-white object-contain p-1 mr-2"
      />
      <Image
        src={DD}
        alt={`Daniele's Dogs`}
        width={180}
        className="aspect-square bg-[#f8d8df] object-contain p-1 mr-2"
      />
      <Image
        src={PNest}
        alt="Devon Hunt with Proper Nest"
        width={180}
        className="aspect-square bg-white object-contain p-1 mr-2"
      />
      <Image
        src={C21NEJG}
        alt="Eileen Jonah with Century 21 North East Jonah Group"
        width={180}
        className="aspect-square bg-[#303030] object-contain p-1 mr-2"
      />
      <Image
        src={SC}
        alt="Grant Story with Story Construction"
        width={180}
        className="aspect-square bg-white object-contain p-1 mr-2"
      />
      <Image
        src={SB}
        alt="Pam Driscoll with Saltwater Bookkeeping"
        width={180}
        className="aspect-square bg-white object-contain p-1 mr-2"
      />
    </Marquee>
  );
};

export default ClientMarquee;
