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
        isCompleted: true,
      },
      {
        text: "Add an instrument field to the Camp application",
        isCompleted: true,
      },
      { text: "Remove the magnifying glass icon", isCompleted: true },
      {
        text: "Move the Login/Register link to a more discreet location",
        isCompleted: false,
      },
      {
        text: "Add interactive maps to the Venue page with dynamic latitude and longitude fields",
        isCompleted: true,
      },
      {
        text: "Add longitude & latitude to Prisma Venue modal.",
        isCompleted: true,
      },
      {
        text: "Add open cage api so the address would automatically generate longitute and latitude for Open Layer maps",
        isCompleted: true,
      },
      {
        text: "Create staff page",
        isCompleted: true,
      },
    ],
  },
  {
    date: "5-11-2025",
    sentences: [
      {
        text: "Fix concert details page not showing the correct address on the Open Layer map when clicking on the ConcertDetailsLocator component",
        isCompleted: true,
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
        isCompleted: true,
      },
      {
        text: "Update Newsletter nav link to say Connect With Us",
        isCompleted: true,
      },
    ],
  },
  {
    date: "5-13-2025",
    sentences: [
      {
        text: "Add other sections of seat maps to Venues page",
        isCompleted: true,
      },
    ],
  },
  {
    date: "5-14-2025",
    sentences: [
      {
        text: "Fix mislabled rows in Second half of neel seat map.",
        isCompleted: true,
      },
    ],
  },
  {
    date: "5-15-2025",
    sentences: [
      {
        text: "Adjust spacing on landing page.",
        isCompleted: true,
      },
      {
        text: "Reposition 'Have A Question' background image so singer is visible on mobile.",
        isCompleted: true,
      },
      {
        text: "Replace fixed header logo with new 50th logo.",
        isCompleted: true,
      },
      {
        text: "Change name of 'Summper Camp' link to 'Camping With the Pops'",
        isCompleted: true,
      },
    ],
  },
  {
    date: "5-20-2025",
    sentences: [
      {
        text: "Instead of parsing the description by splitting on periods, i'll update the structure of the team member form to allow the admin to manually define bullet points using a custom delimiter (e.g., /// or a pipe |). This change will let each bullet point contain one or more full sentences, without the system auto-splitting based on periods.",
        isCompleted: false,
      },
    ],
  },
  {
    date: "5-21-2025",
    sentences: [
      {
        text: "Update all gray/zinc text to white",
        isCompleted: false,
      },
      {
        text: "Update Charir Sponsorships table to use the gold color from the 50th logo",
        isCompleted: false,
      },
      {
        text: "Update form switch colors so they have more contrast",
        isCompleted: false,
      },
      {
        text: "Update privacy statement with more relaxed wording",
        isCompleted: false,
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
