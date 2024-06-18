import { Sqysh } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="pt-5 flex items-center justify-between">
      <section className='flex items-center'>
        <Link href="/">
          <Image src={Sqysh} alt="sqysh" width={60} priority />
        </Link>
        <p className="text-2xl ml-3 font-bold font-Paytone-One">Sqysh</p>
      </section>
      <section className='flex gap-5'>
        <Link className='text-[#4d516f]' href="/services">Services</Link>
        <Link className='text-[#4d516f]' href="/testimonials">Testimonials</Link>
        <Link className='text-[#4d516f]' href="/contact">Contact us</Link>
      </section>
      <section className='flex gap-5'>
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/register">Sign Up</Link>
      </section>
    </div>
  );
};

export default Header;
