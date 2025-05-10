import React from "react";

const queueData = [
  {
    date: " 5-8-2025",
    message: `Build additional seat maps for two venues.`,
  },
  {
    date: " 5-9-2025",
    message: `Add the 50th anniversary logo. Make the Camp page dynamic so Robyn can edit all text. Create a Media page with a video player, scrolling comments, and a photo carousel. Add an instrument field to the Camp application. Remove the magnifying glass icon. Remove 'Robyn' from the logo and make it smaller. Move the Login/Register link to a more discreet location. Add interactive maps to the Venue page with dynamic latitude and longitude fields. Include a link to a tool that converts addresses to coordinates. Split the Board Members page into two pages.`,
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
