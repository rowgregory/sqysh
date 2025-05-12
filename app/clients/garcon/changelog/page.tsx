import React from "react";

const changelogData = [
  {
    date: "5-3-2025",
    message: `Recorded in-store footage for social media content and future promos`,
  },
  {
    date: "5-5-2025",
    message: `Started organizing all current social media credentials in a spreadsheet. Facebook login confirmed. Instagram access still pending`,
  },
  {
    date: "5-6-2025",
    message:
      "Created a Canva ticket design for 15% off any item for summer 2025 promo. Purchased perforated scissors for ticket cutting",
  },
  {
    date: "5-7-2025",
    message:
      "Purchased Udemy course on After Effects for content editing and animation",
  },
  {
    date: "5-8-2025",
    message:
      "Created YouTube, TikTok, and Snapchat channels; updated profile and hero images with correct sizes and filled in all necessary initial setup details. Gained access to Instagram by logging into Keenans personal facebook account. Updated Fb Hero image with horizontal logo. Responded to facebook message from People360 Inc. Updated shared credentials google sheet under gs*********@gmail_com",
  },
  {
    date: "5-9-2025",
    message:
      "Paused the printing of the physical Canva tickets. Pro actively commented on a Facebook post from Bad Dad Brewing Co. Followed everyone back that started following the Instagram account within the past three weeks. Proactively commented on an Instagram post from mass_hydro about their Spring Sale. Deleted Instagram scam messages. Reached out to @sistersnacking on Instagram to share the Garcon Super Slice promo and sent them the 15% off ticket. Proactively commented on a Witch City Walking Tours Instagram post. Officially starting the Udemy course today. Plan to work on the first post about Garcon Super Slice being featured at Suffolk Downs for the 2024 season. Created two new pages to show work in the cue, and the schedule for posting. Followed Big Woods Pizza on Facebook and liked their most recent post",
  },
  {
    date: "5-11-2025",
    message:
      "Respond to Angel Nelson's pizza donation request through Facebook Messenger and pass the message along to Keenan via email. Started following Anzios Brick Oven Pizza and liked their post from today. Completed section 1 from Udemy course. Learned motion path and masking. Social media schedule starts tomorrow with the video I sent Keenan",
  },
  {
    date: "5-12-2025",
    message:
      "Upload first video of house made basil aioli to Facebook and Instagram ~ 9am. Follow everyone back on Instagram who followed us within the past two days. Reply back to Instagram message who was from a first time customer yesterday who raved about the restaurant and will be back. Emailed Keenan a second time to respond about the Salem 8th graders semi formal dance pizza proposition. Add 7 second TikTok and Snapchat Basil Aioli short video. Created facebook post to let poeple know to follow us on TikTok & Snapchat. Replied to Carol's comment on Facebook. Add the Basil Aoili short video to Facebook & Instagram stories. Replied back to Angel Nelson how we'll donate 8 pizzas to the Collins Middle School in Salem for their semi formal dance on June 13th.",
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
