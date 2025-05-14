import React from "react";

const changelogData = [
  {
    date: "5-9-2025",
    message: `Replace HomeHero image component with a div background image for better layout control. Received new 50th anniversary logo. Include steps to enable push notifications`,
  },
  {
    date: "5-11-2025",
    message: `Fix EditableTextArea component's value and textKeyBlock attributes for consistent updating`,
  },
  {
    date: "5-12-2025",
    message: `Create additional sections for two seat maps`,
  },
  {
    date: "5-13-2025",
    message: `Reduce the height of the HeaderTop component. Add ternary to HeaderLower component so gold logo displays on home page and white on all others. Hide call box office if screen is < 1200; call office button is still in the FixedHeader component which reveals itself as soon as you scroll, and in the NavigationDrawer, and on all the concerts; this was done to avoid the header navigation links from overlapping. Make link text in NavigationDrawer component 18 pixels and center links in middle of screen. Update Newsletter link to say Connect With Us. Update all other links that previously had '/newsletter'. All camp page text now editable. Update camp application file HTML structure to match new data. Remove red checkmark and student conductor bullet point editable text. Breadcrumb component height reduced. Add advertising pdf to repository and add link download button to pdf for instant downloading`,
  },
];

const PopsChangelog = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Changelog</h1>
      <div className="flex flex-col">
        {changelogData?.map((log, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_4fr] gap-y-4 py-3 text-[#b2b2b2] font-lato text-sm"
          >
            <div className="font-semibold text-right pr-4 border-r border-[#555]">
              {log.date}
            </div>
            <div className={`text-zinc-200 pl-4`}>
              <ul className="list-disc pl-5">
                {log.message.split(".").map((sentence, index) => (
                  <li key={index} className="text-sm ">
                    {sentence.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopsChangelog;
