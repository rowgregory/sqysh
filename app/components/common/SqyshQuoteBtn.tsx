import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const SqyshQuoteBtn = () => {
  return (
    <Link
      href="/quote"
      className="block btn-anim py-3 px-8 bg-[linear-gradient(to_right,_#25aae1,_#4481eb,_#04befe,_#3f86ed)] text-white font-bold uppercase font-Raleway rounded-full group w-fit mx-auto"
    >
      Get in touch with <span className="font-Paytone-One">Sqysh</span>{" "}
      <FontAwesomeIcon
        icon={faArrowRight}
        color="#fff"
        className="-rotate-45 group-hover:rotate-[0deg] duration-200 w-4 h-4"
        size="sm"
      />
    </Link>
  );
};

export default SqyshQuoteBtn;
