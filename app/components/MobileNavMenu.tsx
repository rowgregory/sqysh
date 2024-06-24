"use client";

import React, { useEffect } from "react";
import { useHeaderContext } from "../contexts/headerContext";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Sqysh } from "@/public/images";
import SqyshQuoteBtn from './common/SqyshQuoteBtn';

const MobileNavMenu = () => {
  const { toggleNavigation, setToggleNavigation } = useHeaderContext();
  const close = () => setToggleNavigation(false);

  useEffect(() => {
    if (toggleNavigation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';

    }
  }, [toggleNavigation])

  return (
    <div
      className={`${toggleNavigation
        ? "w-screen left-0 overflow-hidden"
        : "left-[-100vw] w-none"
        } fixed duration-200 min-h-screen bg-[#05071a] top-0 left-0 flex flex-col items-center justify-center gap-5 z-[60]`}
    >
      <Link href="/" onClick={close}>
        <Image
          src={Sqysh}
          className='fixed top-0 left-3 block sm:hidden'
          alt="Sqysh"
          width={60}
        />
      </Link>
      <div onClick={close}>
        <SqyshQuoteBtn />

      </div>
      <Link
        onClick={close}
        href="/services"
        className="btn-anim py-4 px-8 bg-[linear-gradient(to_right,_#667eea,_#764ba2,_#6B8DD6,_#8E37D7)] text-white font-bold uppercase font-Raleway rounded-full group"
      >
        Services{" "}
        <FontAwesomeIcon
          icon={faArrowRight}
          color="#fff"
          className="-rotate-45 group-hover:rotate-[0deg] duration-200"
          size="sm"
        />
      </Link>
    </div>
  );
};

export default MobileNavMenu;
