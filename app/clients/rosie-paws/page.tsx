import React from "react";

const changelogData = [
  {
    date: " 5-7-2025",
    message: `Initialized GitHub repo, obtained client assets, set up Vercel, and pushed changes to make the site live immediately.`,
  },
];

const RosiePaws = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl mb-4">Rosie Paws Changelog</h1>
      <div className="flex flex-col">
        {changelogData?.map((log, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_4fr] gap-y-4 py-3 text-[#b2b2b2] font-lato text-sm"
          >
            <div className="font-semibold text-right pr-4 border-r border-[#555]">
              {log.date}
            </div>
            <div className="pl-4">{log.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RosiePaws;
