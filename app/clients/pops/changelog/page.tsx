import React from "react";

const changelogData = [
  {
    date: "5-9-2025",
    message: `Explain how to update the concert card date via the Concert form. Replace HomeHero image component with a div background image for better layout control. Received new 50th anniversary logo. Include steps to enable push notifications. Explain who whos what in terms of copyrights.`,
  },
  {
    date: "5-11-2025",
    message: `Fix EditableTextArea component's value and textKeyBlock attributes for consistent updating.`,
  },
  {
    date: "5-12-2025",
    message: `Create additional sections for two seat maps. Received 50th anniversary asset. Emailed Robyn what to do with it.`,
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
            <div className="pl-4 text-zinc-200">{log.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopsChangelog;
