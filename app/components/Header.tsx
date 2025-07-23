"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import useCustomPathname from "../hooks/useCustomPathname";

const Header = () => {
  const path = useCustomPathname();
  const invalidPaths = ["/clients"];
  const isInvalidPath = !invalidPaths.some((pathname) =>
    path.startsWith(pathname)
  );

  if (!path) return;

  return (
    <div className="w-full">
      <header
        className={`sticky w-full p-2 z-50 top-0 left-0 bg-black shadow-[0_25px_50px_-12px_rgb(0,0.0,1)]`}
      >
        <div className="flex items-center justify-between mx-auto max-w-screen-2xl">
          <section className="flex items-center">
            <Link className="flex items-center" href="/" as="/" scroll={false}>
              <div className="bg-sqysh bg-no-repeat bg-cover bg-center w-[148px] h-[64px]" />
            </Link>
          </section>
          {isInvalidPath && (
            <section className="flex items-center gap-3 sm:gap-5">
              <div className="relative overflow-hidden">
                <Link
                  className="nav-link text-slate-400 font-bold hover:text-slate-300 duration-200 active:text-slate-300 hidden sm:block"
                  href="/services"
                  scroll={false}
                >
                  Services
                </Link>
              </div>
              <Link
                href="/quote"
                className="btn-anim py-1.5 px-4 bg-[linear-gradient(to_right,_#25aae1,_#4481eb,_#04befe,_#3f86ed)] text-white font-bold uppercase font-Raleway rounded-full group hidden sm:block"
              >
                Request a <span className="font-Paytone-One">Sqysh</span> Quote{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-white w-3 h-3 -rotate-45 group-hover:rotate-[0deg] duration-200"
                  data-testid="quote-arrow-icon"
                />
              </Link>
            </section>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
