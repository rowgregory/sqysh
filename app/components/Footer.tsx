import { Sqysh } from "@/public/images";
import { faFacebook, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col pb-10 mt-48">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={Sqysh} width={50} priority alt="Sqysh" />
          <p className="text-2xl ml-3 font-bold font-Paytone-One">Sqysh</p>
          <div className="h-4 w-[2.5px] bg-[#b2b3bb] mx-4"></div>
          <p className="text-[#6d698a]">
            Adaptable software for evolving businesses.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Link className="text-[#4d516f]" href="/services">
            Services
          </Link>
          <Link className="text-[#4d516f]" href="/testimonials">
            Testimonials
          </Link>
          <Link className="text-[#4d516f]" href="/contact">
            Contact us
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#1b1d27] my-8"></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5 text-sm">
          <p className="text-[#6f6f7b]">
            Copyright &copy; {new Date().getFullYear()} Sqysh. All Rights
            Reserved
          </p>
          <p className="text-[#e1e0e5]">Privacy Policy</p>
          <p className="text-[#e1e0e5]">Terms of Use</p>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#fff' />
          <FontAwesomeIcon icon={faFacebook} size='lg' color='#fff' />
          <FontAwesomeIcon icon={faThreads} size='lg' color='#fff' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
