"use client";

import { Sqysh } from "@/public/images";
import {
  faFacebook,
  faInstagram,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col pb-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="flex items-center">
          <Link href="/" as="/" className='flex items-center'>
            <Image src={Sqysh} width={50} alt="Sqysh" />
            <p className="text-2xl ml-3 font-bold font-Paytone-One">Sqysh</p>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative overflow-hidden">
            <Link className="nav-link font-bold text-slate-400 duration-200 hover:text-white" href="/services">
              Services
            </Link>
          </div>
          <div className="relative overflow-hidden">
            <Link className="nav-link font-bold text-slate-400 duration-200 hover:text-white" href="/quote">
              Request a <span className='font-Paytone-One'>Sqysh</span> Quote
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#1b1d27] my-8"></div>
      <div className="flex items-center justify-center mb-5 gap-3 sm:hidden text-sm">
        <Link
          href="/privacy-policy"
          className="text-slate-500 cursor-pointer"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-of-service"
          className="text-slate-500 cursor-pointer"
        >
          Terms of Service
        </Link>
      </div>
      <div className="flex flex-col items-center justify-between sm:flex-row gap-4">
        <div className="flex items-center gap-5 text-xs">
          <p className="text-slate-500">
            Copyright &copy; {new Date().getFullYear()} Sqysh. All Rights
            Reserved
          </p>
          <Link
            href="/privacy-policy"
            className="text-slate-500 hidden sm:block cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-slate-500 hidden sm:block cursor-pointer"
          >
            Terms of Service
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            onClick={() =>
              window.open("https://www.instagram.com/sqyshio", "_target")
            }
            className="cursor-pointer"
            icon={faInstagram}
            size="lg"
            color="#fff"
            data-testid="instagram-icon"
          />
          <FontAwesomeIcon
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=61560974137345",
                "_target"
              )
            }
            className="cursor-pointer"
            icon={faFacebook}
            size="lg"
            color="#fff"
            data-testid="facebook-icon"
          />
          <FontAwesomeIcon
            onClick={() =>
              window.open("https://www.threads.net/@sqyshio  ", "_target")
            }
            className="cursor-pointer"
            icon={faThreads}
            size="lg"
            color="#fff"
            data-testid="threads-icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
