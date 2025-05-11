import React from "react";

const queueData = [
  {
    date: " 5-11-2025",
    message: `Create landing page with Header, HomeHero, About, Mission, Blog, Send Us a Message, and Footer blocks.`,
  },
];

const RosiePawsQueue = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">In Queue</h1>
      <div className="flex flex-col">
        {queueData?.map((queue, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_4fr] gap-y-4 py-3 text-[#b2b2b2] font-lato text-sm"
          >
            <div className="font-semibold text-right pr-4 border-r border-[#555]">
              {queue.date}
            </div>
            <div className="pl-4 text-zinc-200">{queue.message}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RosiePawsQueue;
