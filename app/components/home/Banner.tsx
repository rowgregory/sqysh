import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="pt-8 md:pt-16">
      <h1 className="font-Cabin text-[36px] text-5xl md:text-7xl lg:text-8xl text-center fold-bold tracking-wide leading-tight">
        Transform Your Digital Future with{" "}
        <span className="font-Paytone-One">Sqysh</span>
      </h1>
      <p className="font-Raleway text-[#5c6382] md:text-xl text-center mt-6">
        Next-gen software solutions: modular and scalable, <br /> crafted to
        grow with your business.
      </p>
      <div className="w-full flex justify-center">
        <Link
          href="/quote"
          className="btn-anim py-4 px-8 bg-[linear-gradient(to_right,_#25aae1,_#4481eb,_#04befe,_#3f86ed)] text-white font-bold uppercase text-xl font-Raleway rounded-full mt-12 mb-20 group"
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
