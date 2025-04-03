"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselData = [
  {
    img: "/images/ci1.png",
    alt: "Little Paws Dachshund Rescue",
    linkKey: "https://www.littlepawsdr.org",
  },
  {
    img: "/images/ci2.png",
    alt: `Danielle's Dogs`,
    linkKey: "https://danielles-dogs.herokuapp.com/",
  },
  {
    img: "/images/ci3.png",
    alt: `Royal Caribbean`,
    linkKey: "https://royal-caribbean-clone.vercel.app/",
  },
  {
    img: "/images/ci4.png",
    alt: `Devon Hunt with Proper Nest`,
    linkKey: "https://www.devonhuntrealtor.com/",
  },
  {
    img: "/images/ci5.png",
    alt: `Eileen Jonah with Century 21 North East`,
    linkKey: "https://www.jonahgroupre.com/",
  },
  {
    img: "/images/ci6.png",
    alt: `Grant Story with Story Construction`,
    linkKey: "https://storyconstruction.vercel.app/",
  },
  {
    img: "/images/ci7.png",
    alt: `Pam Driscoll with Saltwater Bookkeeping`,
    linkKey: "https://saltwaterbookkeeping.com",
  },
  {
    img: "/images/ci8.png",
    alt: `Stu Ginsburg with Platorum`,
    linkKey: "https://platorum.com",
  },
  {
    img: "/images/ci9.png",
    alt: `Adrinna DelDotto with Thoroughly Cleaned, LLC`,
    linkKey: "https://thoroughlycleaned.vercel.app",
  },
];

const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="hidden md:flex items-center justify-center absolute z-10 -left-20 lg:-left-36 top-1/2 bg-sunny rounded-full w-12 h-12
    transform -translate-y-1/2  translate-x-20 transition-all duration-300"
  >
    <div className="bg-neon-chevron rotate-180 aspect-square w-8 h-8 bg-cover bg-center bg-no-repeat"></div>
  </button>
);

const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="hidden md:flex items-center justify-center absolute z-10 -right-20 lg:-right-36 top-1/2 bg-sunny rounded-full w-12 h-12
    transform -translate-y-1/2  -translate-x-20 transition-all duration-300"
  >
    <div className="bg-neon-chevron aspect-square w-8 h-8 bg-cover bg-center bg-no-repeat"></div>
  </button>
);

const ProductCarousel = () => {
  const slider = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slider-container relative w-full h-[300px] sm:h-[600px] 1070:h-[900px]">
      <PrevArrow onClick={() => slider?.current?.slickPrev()} />
      <Slider ref={slider} {...settings}>
        {carouselData.map((obj: any, i: number) => (
          <div
            key={i}
            className="relative w-full"
            onClick={() => window.open(obj.linkKey, "_blank")}
          >
            <div
              style={{ backgroundImage: `url(${obj.img})` }}
              className="h-[300px] w-[300px] sm:w-[600px] 1070:w-[900px] sm:h-[600px] 1070:h-[900px] aspect-square bg-contain bg-center bg-no-repeat"
            />
          </div>
        ))}
      </Slider>
      <NextArrow onClick={() => slider?.current?.slickNext()} />
    </div>
  );
};

export default ProductCarousel;
