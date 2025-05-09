import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faChartBar, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";

const IHelpEnhance = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-screen-lg w-full mx-auto mb-40 px-3">
      <div className="flex flex-col">
        <h1 className="text-white font-Raleway text-3xl mb-4 font-bold">
          We Help Enhance Your Business Success
        </h1>
        <p className="text-zinc-300 max-w-lg w-full mb-7 md:text-[18px]">
          Sqysh builds custom solutions that simplify your workflow, boost
          efficiency, and help your business grow.
        </p>
        <div className="grid grid-cols-12 gap-4">
          <article className="col-span-12 sm:col-span-6 flex flex-col items-center sm:items-start p-10 rounded-3xl shadow-[inset_0px_0px_30px_-12px_#38bdf8]">
            <div className="h-12 w-12 rounded-full bg-[#111] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faScaleBalanced}
                className="text-sky-400"
              />
            </div>
            <p className="text-white text-2xl my-3 text-center sm:text-left">
              Scalability
            </p>
            <p className="text-zinc-300 text-center">
              Scalability ensures your software grows seamlessly with your
              business, adapting to increased demands and opportunities.
            </p>
          </article>
          <article className="col-span-12 sm:col-span-6 flex flex-col items-center sm:items-start p-10 rounded-3xl shadow-[inset_0px_0px_30px_-12px_#38bdf8]">
            <div className="h-12 w-12 rounded-full bg-[#111] flex items-center justify-center">
              <FontAwesomeIcon icon={faChartBar} className="text-sky-400" />
            </div>
            <p className="text-white text-2xl my-3">Analytics and Insights</p>
            <p className="text-zinc-300 text-center">
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
