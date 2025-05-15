import React from "react";

const changelogData = [
  {
    date: "5-3-2025",
    message: `Record in-store footage for social media content and future promos`,
  },
  {
    date: "5-5-2025",
    message: `Start organizing all current social media credentials in a spreadsheet. Confirm Fb login. Insta access still pending`,
  },
  {
    date: "5-6-2025",
    message: `Create a Canva ticket design for 15% off any item for summer 2025 promo. Purchase perforated scissors for ticket cutting`,
  },
  {
    date: "5-7-2025",
    message: `Purchase Udemy course on After Effects for content editing and animation`,
  },
  {
    date: "5-8-2025",
    message: `Create YouTube, TikTok, and Snap channels. Update profile and hero images with correct sizes and fill in all necessary setup details. Gain access to Insta via Keenan’s personal Fb account. Update Fb hero image with horizontal logo. Respond to Fb message from People360 Inc. Update shared credentials Google Sheet under gs*********@gmail_com`,
  },
  {
    date: "5-9-2025",
    message: `Pause printing of physical Canva tickets. Proactively comment on a Fb post from Bad Dad Brewing Co. Follow everyone back who started following the Insta account within the past three weeks. Proactively comment on an Insta post from mass_hydro about their Spring Sale. Delete Insta scam messages. Reach out to @sistersnacking on Insta to share the Garcon Super Slice promo and send them the 15% off ticket. Proactively comment on a Witch City Walking Tours Insta post. Officially start the Udemy course. Begin working on the first post about Garcon Super Slice being featured at Suffolk Downs for the 2024 season. Create two new pages to show work in the queue and the schedule for posting. Follow Big Woods Pizza on Fb and like their most recent post`,
  },
  {
    date: "5-11-2025",
    message: `Respond to Angel Nelson's pizza donation request through Fb Messenger and pass the message along to Keenan via email. Start following Anzios Brick Oven Pizza and like their post from today. Complete section 1 from Udemy course. Learn motion path and masking. Social media schedule starts tomorrow with the video I send Keenan`,
  },
  {
    date: "5-12-2025",
    message: `Upload first video of house-made basil aioli to Fb and Insta around 9am. Follow back everyone on Insta who followed us in the past two days. Reply to Insta message from a first-time customer who raved about the restaurant. Email Keenan again regarding the Salem 8th graders' semi-formal pizza proposition. Add 7-second TikTok and Snap basil aioli short video. Create Fb post to let people know to follow us on TikTok and Snap. Reply to Carol’s comment on Fb. Add basil aioli short video to Fb and Insta stories. Reply to Angel Nelson confirming we’ll donate 8 pizzas to Collins Middle School in Salem for their semi-formal dance on June 13th`,
  },
  {
    date: "5-13-2025",
    message: `Create short video of rainbow sugar cookies. Post to TikTok, Snap, and then to Fb and Insta stories`,
  },
  {
    date: "5-14-2025",
    message: `Create short video of chef preparing a pizza. Post to TikTok and Snap. Follow Woodcock Brothers Brewery on Fb`,
  },
  {
    date: "5-15-2025",
    message: `Create short video of new peach seltzer. Post to TikTok, Snap, Fb, and Insta. Follow BricknFire Pizza Company - Mobile on Fb. Follow willydoublel on Insta. Reach out to @theprosciuttopapi on Insta and send the 15% coupon. Follow back samantha04 & nicole_surgent on Insta`,
  },
];

const GarconChangeLog = () => {
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

export default GarconChangeLog;
