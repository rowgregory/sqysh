import servicesData from "@/public/data/servicesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SqyshQuoteBtn from "../components/common/SqyshQuoteBtn";

export const metadata = {
  title: "Our Services | Sqysh",
  description:
    "Discover how Sqysh can help you with custom web development and digital solutions!",
  alternates: {
    canonical: "https://sqysh.io/services",
  },
};

const Services = () => {
  return (
    <div className="w-full flex flex-col pt-8 md:pt-24 pb-32">
      <p
        className="text-center text-5xl md:text-7xl font-bold text mb-20"
        style={{ textShadow: "#fff 1px 0 10px" }}
      >
        Explore Our Services Below
      </p>
      <SqyshQuoteBtn />
      <div className="w-full grid grid-cols-12 aspect-square gap-5 mt-40 mb-4">
        {servicesData.map((obj: any, i: number) => (
          <section
            data-testid={`service-${i}`}
            key={i}
            className="pt-5 pb-10 px-6 col-span-12 lg:col-span-6 xl:col-span-4 border-l-1 border-zinc-600"
          >
            <FontAwesomeIcon icon={obj.icon} color={obj.color} />
            <h2 className="text-2xl font-bold my-5">{obj.title}</h2>
            <ul className="list-disc ml-5">
              <li className="text-slate-300">{obj.text}</li>
            </ul>
          </section>
        ))}
      </div>
      <div className="w-full h-[1px] bg-gray-white-gray my-20"></div>
      <p className="text-center max-w-screen-md mx-auto mb-20">
        By providing a holistic suite of services,{" "}
        <span className="font-Paytone-One">Sqysh</span> ensures that every
        aspect of your project is handled with expertise, creativity, and a
        focus on delivering exceptional results.
      </p>
      <SqyshQuoteBtn />
    </div>
  );
};

export default Services;
