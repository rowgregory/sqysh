import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full sm:pt-5 z-50 bg-[rgb(5,7,26)] top-0 left-0">
      <div className="flex items-center justify-between mx-auto shadow-[0_5px_20px_5px_#000] sm:shadow-[0_30px_20px_-15px_#000] max-w-screen-2xl px-3 sm:px-6 md:px-12 lg:px-20 xl:px-28">
        <section className="flex items-center">
          <Link className="flex items-center" href="/" as="/" scroll={false}>
            <div className="bg-sqysh bg-cover bg-center bg-no-repeat w-16 h-16" />
            <p className="text-2xl ml-3 font-bold font-Paytone-One">Sqysh</p>
          </Link>
        </section>
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
              color="#fff"
              className="-rotate-45 group-hover:rotate-[0deg] duration-200"
              size="sm"
              data-testid="quote-arrow-icon"
            />
          </Link>
        </section>
      </div>
    </header>
  );
};

export default Header;
