import React from "react";

const queueData = [
  {
    date: " 5-8-2025",
    message: `Build additional seat maps for two venues.`,
  },
  {
    date: " 5-9-2025",
    message: `Add in 50th anniversay logo. Make camp page dynamic so Robyn can edit all text. Create "Media" page which will consist of a dynamic video player, scrolling comments, and a photo carousel. Add in additional field the camp application asking for which instrument they play.`,
  },
];

const PopsQueue = () => {
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

export default PopsQueue;
