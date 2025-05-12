import React from "react";

const queueData = [
  {
    date: "5-8-2025",
    message: `Build additional seat maps for two venues.`,
    isCompleted: true,
    completeTime: "May 12, 2025",
  },
  {
    date: " 5-9-2025",
    message: `Add the 50th anniversary logo. Make the Camp page dynamic so Robyn can edit all text. Create a Media page with a video player, scrolling comments, and a photo carousel. Add an instrument field to the Camp application. Remove the magnifying glass icon. Remove 'Robyn' from the logo and make it smaller. Move the Login/Register link to a more discreet location. Add interactive maps to the Venue page with dynamic latitude and longitude fields. Include a link to a tool that converts addresses to coordinates. Split the Board Members page into two pages.`,
  },
  {
    date: " 5-11-2025",
    message: `Fix concert details page not showing the correct address on the Open Layer map when clicking on the ConcertDetailsLocator component. Update text from 'extending to 'extended' on the landing page. Update colors of the table header text on the Chair Sponsorship page. Link advertising sheet to download button. Recreate specs and prices for Advertise With Us page. Update Newsletter nav link to say Connect With Us`,
  },
];

const PopsQueue = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">In Queue</h1>
      <ul className="flex flex-col">
        {queueData?.map((queue, i) => (
          <li
            key={i}
            className="list-desc grid grid-cols-[1fr_4fr] gap-y-4 py-3 text-[#b2b2b2] font-lato text-sm"
          >
            <div
              className={`${
                queue.isCompleted ? "text-lime-500" : ""
              } font-semibold text-right pr-4 border-r border-[#555]`}
            >
              {queue.date}
            </div>
            <div
              className={`${
                queue.isCompleted
                  ? "text-lime-500 line-through"
                  : "text-zinc-200"
              } pl-4`}
            >
              <ul className="list-disc pl-5">
                {queue.message.split(".").map((sentence, index) => (
                  <li key={index} className="text-sm ">
                    {sentence.trim()}.
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PopsQueue;
