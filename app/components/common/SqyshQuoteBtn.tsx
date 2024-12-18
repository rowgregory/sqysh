import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const SqyshQuoteBtn = () => {
  return (
    <Link
      href="/quote"
      className="btn-anim py-4 px-8 bg-[linear-gradient(to_right,_#25aae1,_#4481eb,_#04befe,_#3f86ed)] text-white font-bold uppercase font-Raleway rounded-full group w-fit mx-auto"
    >
      Request a <span className="font-Paytone-One">Sqysh</span> Quote{" "}
      <FontAwesomeIcon
        icon={faArrowRight}
        color="#fff"
        className="-rotate-45 group-hover:rotate-[0deg] duration-200"
        size="sm"
      />
    </Link>
  );
};

export default SqyshQuoteBtn;
