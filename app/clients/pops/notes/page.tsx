import React from "react";

const notesData = [
  {
    date: "5-9-2025",
    message: `Explain how to update the concert card date via the Concert form. Explain who owns what in terms of copyrights; I retain ownership of the codebase, while you own all the content you provide — including any data entered into forms and anything displayed on the website`,
  },
  {
    date: "5-12-2025",
    message: `Receive 50th anniversary asset. Email Robyn asking what to do with it`,
  },
  {
    date: "5-13-2025",
    message: `Request horizontal gold and white 50th anniversary logos from Matthew to put in the header. Thnk about where to put the Admin Dashboard link`,
  },
  {
    date: "5-14-2025",
    message: `Terry reaches out to let me know that row K is listed twice in the second half of Neel, and M is marked as K. Robyn emailed a group asking to Zoom to introduce Sundays@Neel Inititive; Responded right away. Followed up with a personal email to clarify if the Sundays@Neel initiative involves new technical work outside the current scope; Asked for early insight before the Zoom call to prepare accordingly. Robyn semi-confirms that the Sundays@Neel initiative falls within the existing project scope; more details at the meeting tomorrow morning`,
  },
  {
    date: "5-15-2025",
    message: `Joined a 30-minute Zoom call led by Robyn and her team to discuss the new Sundays@Neels initiative. Used the new AI-powered 4K webcam. Follow up by emailing Robyn about potential upcoming work on my end`,
  },
  {
    date: "5-21-2025",
    message: `Receive email from Robyn about more updates. Emailed back at 11:07am. Receive email back from Robyn discussing the new color for the "Renew now to retain your current seats" section and colors on the newsletter form`,
  },
  {
    date: "6-3-2025",
    message: `Received an email from Caryn requesting a Zoom meeting with herself, me, and someone named Jacuelyn Best—who is not listed on the website as a board member and whom I haven’t previously been introduced to. Will clarity on the chat today that taking unexpected Zoom calls about technology not outlined in the proposal is outside the scope of my role. I will explain that any new features or technical discussions should first be reviewed and approved between me and Robyn before moving forward`,
  },
  {
    date: "6-4-2025",
    message: `Received an email back from Robyn saying she asked to talk this afternoon at some point. Responded letting her know I’m available anytime and happy to chat whenever works best for her. Talk to Robyn on the phone. Explained Fb Pixel isn't something someone from another company can come and just install on our website. Focused the converstaion on Hotjar and the free tool it provides`,
  },
  {
    date: "6-5-2025",
    message: `Received voicemail from Caryn explaining the situation with the demo; she had questions about the analytics tool; decided to create pages for Caryn and & Robyn to look through`,
  },
  {
    date: "6-11-2025",
    message: `Receive calls from Robyn regarding the switches on the campaigns page. Explained that the switch toggles the button from call box office -> buy tickets. The link for buy tickets can be updated any time in the campgin form. Robyn and Terry were going to get the season ticket packages up and running on Audience View. Tried to steer Robyn in the right direction regarding the saturday packages, but was unsuccessful. Discussed new block with a button leading to the audience view packages will be available by this weekend`,
  },
  {
    date: "6-11-2025",
    message: `Receive email from Terry asking when the new seasosn package banner will be ready. Emailed back saying it will be ready later that night`,
  },
  {
    date: "6-15-2025",
    message: `Robyn reached out over text explaining the issue with the Login/Register at the top. Initially we were going to just change the naming to "Admin" but then thought to put a light gray arrow which opens an InconspicuousSignInDrawer for adnim only. Robyn liked it. Robyn also explained how they are having an issue with Audience View not loading their seat maps correctly and only loading all seats at $120. wtf. They are waiting on an AV ticket. >;|`,
  },
  {
    date: "6-19-2025",
    message: `Message Robyn about the GoldenButton fix; patrons can now click anywhere on the button to take them to AV. Discuss upcoming season ticket package user flow and propose implementing the GoldenModal with date selection to direct patrons to targeted AV pages based on their chosen performance day`,
  },
  {
    date: "7-3-2025",
    message: `Robyn reaches out saying to close camp applications page and they are full. YAY. She wants to be able to delete the camp applications and then reopen it for next year. She transferred each submission to a spreadsheet so I will create an export to CSV button. Also mentioned that the push notifications were not working for the camp application. Will look into that. Will need Robyn to go in and put in a card for Google Firebase video and image uploading`,
  },
  {
    date: "7-21-2025",
    message: `Reach out to Robyn to switch direct deposit account`,
  },
  {
    date: "7-22-2025",
    message: `Robyn reaches out needing a button on the Advertise page.`,
  },
];

const PopsNotes = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      <div className="flex flex-col">
        {notesData?.map((note, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_4fr] gap-y-4 py-3 text-[#b2b2b2] font-lato text-sm"
          >
            <div className="font-semibold text-right pr-4 border-r border-[#555]">
              {note.date}
            </div>
            <div className={`text-zinc-200 pl-4`}>
              <ul className="list-disc pl-5">
                {note.message.split(".").map((sentence, index) => (
                  <li key={index} className="text-sm text-sky-400">
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

export default PopsNotes;
