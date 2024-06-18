import React from "react";

const Journey = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-screen-lg w-full mx-auto">
      <h1 className="text-white text-center text-7xl mb-5">
        My Journey and Mission
      </h1>
      <p className="text-[#3d415b] max-w-lg text-center w-full mb-7">
        Navigating the realm of custom software, crafting solutions that elevate
        businesses through innovation and dedication
      </p>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-6 flex flex-col p-10 rounded-3xl bg-[#070b20] shadow-[inset_0px_0px_30px_-12px_rgba(255,255,255,0.2)]">
          <h3 className='text-2xl mb-3'>From Vision to Code</h3>
          <p className='text-[#3d415b]'>Turning Your Ideas into Custom Software Solutions</p>
        </div>
        <div className="col-span-12 sm:col-span-6 flex flex-col p-10 rounded-3xl bg-[#070b20] shadow-[inset_0px_0px_30px_-12px_rgba(255,255,255,0.2)]">
          <h3 className='text-2xl mb-3'>Automated Workflow Processes</h3>
          <p className='text-[#3d415b]'>Designing custom software solutions that automate repetitive tasks, optimize operations, and boost efficiency.</p>
        </div>
      </div>
    </div>
  );
};

export default Journey;
