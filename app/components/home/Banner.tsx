import {
  DdogsDesktop,
  DdogsIpad,
  DdogsMobile,
  LpdrDesktop,
  LpdrIpad,
  LpdrMobile,
  NeonRightChevron,
  RcDesktop,
  RcIpad,
  RcMobile,
} from "@/public/images";
import {
  faArrowRight,
  faChartBar,
  faDog,
  faPaw,
  faScaleBalanced,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "flowbite-react";

const carouselData = [
  {
    desktop: LpdrDesktop,
    mobile: LpdrMobile,
    ipad: LpdrIpad,
    alt: "Little Paws Dachshund Rescue",
  },
  {
    desktop: DdogsDesktop,
    mobile: DdogsMobile,
    ipad: DdogsIpad,
    alt: `Danielle's Dogs`,
  },
  {
    desktop: RcDesktop,
    mobile: RcMobile,
    ipad: RcIpad,
    alt: `Royal Caribbean`,
  },
];

const Banner = () => {
  return (
    <div className="pt-32 pb-48">
      <h1 className="font-Cabin text-8xl text-center tracking-wide leading-tight">
        Transform Your Future <br /> with Sqysh
      </h1>
      <p className="font-Raleway text-[#5c6382] text-xl text-center mt-6">
        Next-gen software solutions: modular and scalable, <br /> crafted to
        grow with your business.
      </p>
      <div className="w-full flex justify-center">
        <Link
          href="/request-a-quote"
          className="py-4 px-8 bg-[#3a6ef2] text-white text-xl font-Raleway rounded-xl mt-12 mb-20 group"
        >
          Request a Quote{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            color="#fff"
            className="-rotate-45 group-hover:rotate-45 duration-200"
            size="lg"
          />
        </Link>
      </div>

      <Carousel
        leftControl={
          <Image
            src={NeonRightChevron}
            alt="Prev slide"
            className="rotate-180"
          />
        }
        rightControl={<Image src={NeonRightChevron} alt="Next slide" />}
      >
        {carouselData.map((obj: any, i: number) => (
          <div key={i} className="relative h-[575px] my-24">
            <div className="browser browser-0 z-20"></div>
            <div className="browser z-20">
              <Image src={obj.desktop} width={450} priority alt={obj.alt} />
            </div>
            <Image
              src={obj.ipad}
              width={270}
              priority
              alt={obj.alt}
              className="absolute left-[46%] top-0 z-10"
            />
            <div className="phone">
              <Image
                src={obj.mobile}
                width={150}
                priority
                alt={obj.alt}
                className="object-cover h-full w-full rounded-[18px]"
              />
            </div>
          </div>
        ))}
      </Carousel>
      <div className='w-full my-5 h-[1px] bg-gray-white-gray '></div>
      <p className="text-[#4a4f65] text-center text-lg my-8 font-bold">
        Trusted by top clients across the Northeastern United States
      </p>
      <div className="flex items-center justify-center mb-32 gap-8">
        <div className="flex items-center">
          <div className="rounded-full h-8 w-8 bg-[#3c405a] flex items-center justify-center mr-2">
            <FontAwesomeIcon icon={faPaw} color="#05071a" />
          </div>
          <p className="text-[#3c405a] font-bold text-2xl">
            Little Paws Dachshund Rescue
          </p>
        </div>
        <div className="flex items-center">
          <div className="rounded-full h-8 w-8 bg-[#3c405a] flex items-center justify-center mr-2">
            <FontAwesomeIcon icon={faDog} color="#05071a" />
          </div>
          <p className="text-[#3c405a] font-bold text-2xl">Danielle's Dogs</p>
        </div>
        <div className="flex items-center">
          <div className="rounded-full h-8 w-8 bg-[#3c405a] flex items-center justify-center mr-2">
            <FontAwesomeIcon icon={faTree} color="#05071a" />
          </div>
          <p className="text-[#3c405a] font-bold text-2xl">Budz of Boston</p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-7 items-center mx-auto">
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <h1 className="text-white font-Raleway text-3xl mb-4">
            I Help Enhance <br /> Your Business Success
          </h1>
          <p className="text-[#3d415b]">
            As a custom software developer, I enhance your business success by
            creating tailored solutions that streamline operations, improve
            efficiency, and drive growth.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 flex flex-col items-center justify-center p-10 rounded-3xl bg-[#070b20] shadow-[inset_0px_0px_30px_-12px_rgba(255,255,255,0.2)]">
          <div className="h-12 w-12 rounded-full bg-[#0c0f20] flex items-center justify-center">
            <FontAwesomeIcon icon={faScaleBalanced} color="#2e54b7" />
          </div>
          <p className="text-white text-2xl my-3">Scalability</p>
          <p className="text-[#3d415b] text-center">
            Scalability ensures your software grows seamlessly with your
            business, adapting to increased demands and opportunities.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 flex flex-col items-center justify-center p-10 rounded-3xl bg-[#070b20] shadow-[inset_0px_0px_30px_-12px_rgba(255,255,255,0.2)]">
          <div className="h-12 w-12 rounded-full bg-[#111636] flex items-center justify-center">
            <FontAwesomeIcon icon={faChartBar} color="#2e54b7" />
          </div>
          <p className="text-white text-2xl my-3">Analytics and Insights</p>
          <p className="text-[#3d415b] text-center">
            Providing valuable insights that inform strategic decision-making,
            optimize performance, and drive business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
