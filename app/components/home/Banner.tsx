import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="pt-8 md:pt-24">
      <h1
        className="font-Cabin text-[36px] text-5xl md:text-7xl lg:text-8xl text-center fold-bold tracking-wide leading-tight"
        style={{ textShadow: "#fff 1px 0 10px" }}
      >
        Custom Websites & <br /> Mobile Apps
      </h1>
      <p className="font-Raleway text-zinc-300 text-sm md:text-xl text-center mt-6">
        Design. Develop. Deploy.
      </p>
      <div className="w-full flex justify-center">
        <Link
          href="/quote"
          className="btn-anim py-4 px-8 bg-[linear-gradient(to_right,_#25aae1,_#4481eb,_#04befe,_#3f86ed)] text-white font-bold uppercase text-base sm:text-xl font-Raleway rounded-full mt-12 mb-20 group"
        >
          Request a <span className="font-Paytone-One">Sqysh</span> Quote{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            color="#fff"
            className="-rotate-45 group-hover:rotate-[0deg] duration-200"
            size="lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
