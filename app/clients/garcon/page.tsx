import React from "react";

const changelogData = [
  {
    date: " 5-3-2025",
    message: `Recorded in-store footage for social media content and future promos.`,
  },
  {
    date: " 5-5-2025",
    message: `Started organizing all current social media credentials in a spreadsheet. Facebook login confirmed. Instagram access still pending.`,
  },
  {
    date: "5-6-2025",
    message:
      "Created a Canva ticket design for 15% off any item for summer 2025 promo. Purchased perforated scissors for ticket cutting",
  },
  {
    date: "5-7-2025",
    message:
      "Purchased Udemy course on After Effects for content editing and animation.",
  },
  {
    date: "5-8-2025",
    message:
      "Created YouTube, TikTok, and Snapchat channels; updated profile and hero images with correct sizes and filled in all necessary initial setup details. Gained access to Instagram by logging into Keenans personal facebook account. Updated Fb Hero image with horizontal logo. Responded to facebook message from People360 Inc.",
  },
];

const GarconChangeLog = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl mb-4">
        Garcon Super Slice Pizza Pie Parlor Changelog
      </h1>
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

export default GarconChangeLog;
