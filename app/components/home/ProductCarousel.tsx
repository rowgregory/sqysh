'use client'

import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import {
  DdogsDesktop,
  DdogsIpad,
  DdogsMobile,
  DHDesktop,
  DHIpad,
  DHMobile,
  LpdrDesktop,
  LpdrIpad,
  LpdrMobile,
  NeonRightChevron,
  RcDesktop,
  RcIpad,
  RcMobile,
} from "@/public/images";

const carouselData = [
  {
    desktop: LpdrDesktop,
    mobile: LpdrMobile,
    ipad: LpdrIpad,
    alt: "Little Paws Dachshund Rescue",
    linkKey: 'https://www.littlepawsdr.org'
  },
  {
    desktop: DdogsDesktop,
    mobile: DdogsMobile,
    ipad: DdogsIpad,
    alt: `Danielle's Dogs`,
    linkKey: 'https://danielles-dogs.herokuapp.com/'
  },
  {
    desktop: RcDesktop,
    mobile: RcMobile,
    ipad: RcIpad,
    alt: `Royal Caribbean`,
    linkKey: 'https://royal-caribbean-clone.vercel.app/'

  },
  {
    desktop: DHDesktop,
    mobile: DHMobile,
    ipad: DHIpad,
    alt: `Devon Hunt with Nest Forward`,
    linkKey: 'https://www.devonhuntrealtor.com/'
  },
];

const ProductCarousel = () => {
  return (
    <Carousel
      leftControl={
        <Image src={NeonRightChevron} alt="Prev slide" className="rotate-180" />
      }
      rightControl={<Image src={NeonRightChevron} alt="Next slide" />}
      className='h-[425px] sm:h-[575px]'
    >
      {carouselData.map((obj: any, i: number) => (
        <div key={i} className="relative  my-24" onClick={() => window.open(obj.linkKey, '_blank')}>
          <div className="browser browser-0 z-20"></div>
          <div className="browser z-20">
            <Image src={obj.desktop} width={450} priority alt={obj.alt} />
          </div>
          <div className="ipad">
            <Image
              src={obj.ipad}
              priority
              alt={obj.alt}
            />
          </div>
          <div className="phone">
            <Image
              src={obj.mobile}
              width={150}
              priority
              alt={obj.alt}
              className="object-cover h-full w-full rounded-[6px]"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
