import React from "react";

const Journey = () => {
  return (
    <div className="flex flex-col justify-center items-end max-w-screen-lg w-full mx-auto p-3">
      <h1 className="text-white font-Raleway text-3xl mb-4 font-bold text-right">
        My Journey and Mission
      </h1>
      <p className="text-zinc-300 max-w-lg w-full mb-7 md:text-[18px] text-right">
        Committed to delivering exceptional software solutions that empower
        businesses to achieve their full potential through innovation and
        expertise.
      </p>
      <div className="grid grid-cols-12 gap-4">
        <article className="col-span-12 sm:col-span-6 flex flex-col p-10 rounded-3xl shadow-[inset_0px_0px_30px_-12px_#38bdf8]">
          <h3 className="text-2xl mb-3 text-center sm:text-left">
            From Vision to Code
          </h3>
          <p className="text-zinc-300 text-center sm:text-left">
            Turning Your Ideas into Custom Software Solutions
          </p>
        </article>
        <article className="col-span-12 sm:col-span-6 flex flex-col p-10 rounded-3xl shadow-[inset_0px_0px_30px_-12px_#38bdf8]">
          <h3 className="text-2xl mb-3 text-center sm:text-left">
            Automated Workflow Processes
          </h3>
          <p className="text-zinc-300 text-center sm:text-left">
            Designing custom software solutions that automate repetitive tasks,
            optimize operations, and boost efficiency.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Journey;
