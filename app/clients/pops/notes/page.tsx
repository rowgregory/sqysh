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
