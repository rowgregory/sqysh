import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faChartBar, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";

const IHelpEnhance = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-screen-lg w-full mx-auto mb-40 px-3">
      <div className="flex flex-col">
        <h1 className="text-white font-Raleway text-3xl mb-4 font-bold">
          I Help Enhance Your Business Success
        </h1>
        <p className="text-[#3d415b] max-w-lg w-full mb-7 md:text-xl">
          As a custom software developer, I enhance your business success by
          creating tailored solutions that streamline operations, improve
          efficiency, and drive growth.
        </p>
        <div className="grid grid-cols-12 gap-4">
          <article className="col-span-12 sm:col-span-6 flex flex-col items-center sm:items-start p-10 rounded-3xl bg-[#070b20] shadow-[inset_0px_0px_30px_-12px_rgba(255,255,255,0.2)]">
            <div className="h-12 w-12 rounded-full bg-[#111636] flex items-center justify-center">
              <FontAwesomeIcon icon={faScaleBalanced} color="#2e54b7" />
            </div>
            <p className="text-white text-2xl my-3 text-center sm:text-left">
              Scalability
            </p>
            <p className="text-[#3d415b] text-center">
              Scalability ensures your software grows seamlessly with your
              business, adapting to increased demands and opportunities.
            </p>
          </article>
          <article className="col-span-12 sm:col-span-6 flex flex-col items-center sm:items-start p-10 rounded-3xl bg-[#070b20] shadow-[inset_0px_0px_30px_-12px_rgba(255,255,255,0.2)]">
            <div className="h-12 w-12 rounded-full bg-[#111636] flex items-center justify-center">
              <FontAwesomeIcon icon={faChartBar} color="#2e54b7" />
            </div>
            <p className="text-white text-2xl my-3">Analytics and Insights</p>
            <p className="text-[#3d415b] text-center">
              Providing valuable insights that inform strategic decision-making,
              optimize performance, and drive business growth.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default IHelpEnhance;
