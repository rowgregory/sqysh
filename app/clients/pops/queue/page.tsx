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
        isResolved: true,
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
        isCompleted: true,
      },
    ],
  },
  {
    date: "5-21-2025",
    sentences: [
      {
        text: "Update all gray/zinc text to white",
        isCompleted: true,
      },
      {
        text: "Update Charir Sponsorships table to use the gold color from the 50th logo",
        isCompleted: true,
      },
      {
        text: "Update form switch colors so they have more contrast",
        isCompleted: true,
      },
      {
        text: "Update privacy statement with more relaxed wording",
        isCompleted: true,
      },
      {
        text: "Add new Sundays@Neel link to HeaderLower component.",
        isCompleted: false,
      },
      {
        text: "Add new option in concert form dropdown to include Sundays@Neel.",
        isCompleted: false,
      },
      {
        text: "Build new page starting with full screen with PageBanner (some feature design by Matthew)",
        isCompleted: false,
      },
      {
        text: "Develop content of page which will consist of two columns. Main large column on the left(col-span-8) and right side column(col-span-4). Elements will shift to mobile view at 990px.",
        isCompleted: false,
      },
      {
        text: "Create variety of concert cards for main content. i.e. Full column width image with description below. Small image on left with description on the right. Full column width carousel(requires more than one for this particular concert) with description below",
        isCompleted: false,
      },
      {
        text: "Add new boolean(true or false) attribute to Prisma Concert model called isLive which will allow admin to create/update a concert without it being visible to the public. Once the switch is flipped, the concert will be visible on the frontend.",
        isCompleted: false,
      },
    ],
  },
  {
    date: "6-4-2025",
    sentences: [
      {
        text: "Add instructional text in the team member form to guide admins on how and where to use the pipe in the team member description",
        isCompleted: true,
      },
      {
        text: "Add Hotjar script",
        isCompleted: true,
      },
    ],
  },
  {
    date: "6-5-2025",
    sentences: [
      {
        text: "Createe analytics pages explaining what each three tools do and how they can benefit The Pops!",
        isCompleted: true,
      },
    ],
  },
  {
    date: "6-14-2025",
    sentences: [
      {
        text: "Add SeasonPackageBanner component with real-time text editing capabilities for admin",
        isCompleted: true,
      },
      {
        text: "Update admin dashboard with interactive graph optimized for both desktop and mobile viewing",
        isCompleted: true,
      },
      {
        text: "Implement daily metrics tracking and performance data visualization in dashboard charts",
        isCompleted: true,
      },
      {
        text: "Create season package banner admin control card with visibility toggle switches",
        isCompleted: true,
      },
      {
        text: "Add admin-only visibility switch to allow banner testing before public release",
        isCompleted: true,
      },
      {
        text: "Implement public visibility switch to make banner accessible to all users",
        isCompleted: true,
      },
      {
        text: "Enable direct text editing functionality when clicking on banner text in admin mode",
        isCompleted: true,
      },
      {
        text: "Develop Header Button Studio for comprehensive header button management",
        isCompleted: true,
      },
      {
        text: "Implement real-time button preview capabilities in Header Button Studio",
        isCompleted: true,
      },
      {
        text: "Add button customization controls for text, colors, hover states, and destinations",
        isCompleted: true,
      },
    ],
  },
  {
    date: "6-14-2025",
    sentences: [
      {
        text: "Update Login/Register link with light gray lucide-icon right arrow button with redux dispatch function",
        isCompleted: true,
      },
      {
        text: "Build InconspicuousSignInDrawer component for admin only. This will hopefully resolve the issue of users getting confused why they land at a login page they don't have credentials for",
        isCompleted: true,
      },
    ],
  },
  {
    date: "6-07-2025",
    sentences: [
      {
        text: "Create select all camp applications button with bulk delete",
        isCompleted: true,
      },
      {
        text: "Create export to CSV button for camp applications",
        isCompleted: true,
      },
      {
        text: "Build camp application feature toggle card with two toggle switches for admin and the public",
        isCompleted: true,
      },
      {
        text: "Build hidden gems page",
        isCompleted: true,
      },
      {
        text: "Create PushSubscription Prisma model and schema",
        isCompleted: true,
      },
      {
        text: "Build push notification subscription API endpoint",
        isCompleted: true,
      },
      {
        text: "Deploy PushSubscription model to production database",
        isCompleted: true,
      },
    ],
  },
  {
    date: "7-22-2025",
    sentences: [
      {
        text: "Create button on Advertise page to direct people to buy advertising",
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
