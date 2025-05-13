import React from "react";

const queueData = [
  {
    date: "5-8-2025",
    sentences: [
      { text: "Build additional seat maps for two venues", isCompleted: true },
    ],
  },
  {
    date: "5-9-2025",
    sentences: [
      {
        text: "Add the 50th anniversary logo to header and footer. Gold logo on home hero and footer, white logo on all other pages.",
        isCompleted: true,
      },
      {
        text: "Make the Camp page dynamic so all text can be edited easily",
        isCompleted: true,
      },
      {
        text: "Update camp information side panel to align with new data. Enter in all new data.",
        isCompleted: true,
      },
      {
        text: "Create a Media page with a video player, scrolling comments, and a photo carousel",
        isCompleted: false,
      },
      {
        text: "Add an instrument field to the Camp application",
        isCompleted: false,
      },
      { text: "Remove the magnifying glass icon", isCompleted: true },
      {
        text: "Move the Login/Register link to a more discreet location",
        isCompleted: false,
      },
      {
        text: "Add interactive maps to the Venue page with dynamic latitude and longitude fields",
        isCompleted: false,
      },
      {
        text: "Add longitude & latitude to Prisma Venue modal.",
        isCompleted: false,
      },
      {
        text: "Add a link to a tool that converts addresses to coordinates so the venue location works properly with the Open Layer map on the Venues page",
        isCompleted: false,
      },
      {
        text: "Add longitude & latitude inputs fields to Venue form so map works",
        isCompleted: false,
      },
      {
        text: "Create staff page",
        isCompleted: false,
      },
    ],
  },
  {
    date: "5-11-2025",
    sentences: [
      {
        text: "Fix concert details page not showing the correct address on the Open Layer map when clicking on the ConcertDetailsLocator component",
        isCompleted: false,
      },
      {
        text: "Update text from 'extending' to 'extended' on the landing page. Make this text",
        isCompleted: true,
      },
      {
        text: "Update colors of the table header text on the Chair Sponsorship page",
        isCompleted: false,
      },
      { text: "Link advertising sheet to download button", isCompleted: true },
      {
        text: "Recreate specs and prices for Advertise With Us page",
        isCompleted: false,
      },
      {
        text: "Update Newsletter nav link to say Connect With Us",
        isCompleted: true,
      },
    ],
  },
];

const PopsQueue = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">In Queue</h1>
      <ul className="flex flex-col">
        {queueData?.map((queue, queueIndex) => (
          <li
            key={queueIndex}
            className="list-desc grid grid-cols-[1fr_4fr] gap-y-4 py-3 text-[#b2b2b2] font-lato text-sm"
          >
            <div className="font-semibold text-right pr-4 border-r border-[#555]">
              {queue.date}
            </div>
            <div className={`"text-zinc-200 pl-4`}>
              <ul className="list-disc pl-5">
                {queue.sentences.map((sentence, sentenceIndex) => (
                  <li
                    key={sentenceIndex}
                    className={`text-sm ${
                      sentence.isCompleted
                        ? "line-through text-lime-500"
                        : "text-white"
                    }`}
                  >
                    {sentence.text}
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
