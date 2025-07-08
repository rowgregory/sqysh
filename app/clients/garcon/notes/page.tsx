import React from "react";

const notesData = [
  {
    date: "5-16-2025",
    message: `I got signed out of Instagram, and when I try to log in through the Meta Business Suite, it prompts me to log in again. The Facebook credentials I use don’t work. I'm still able to respond to messages and comments on Instagram through the Meta Business Suite, but I can't proactively comment or follow anyone. Will be coming in the store to try and resolve this in person`,
  },
  {
    date: "5-27-2025",
    message: `Received comment on TikTok saying “need more real food posts”; I wasn’t sure who it was, so I asked Stu, and he said it was Keenan’s sister; I reached out to Keenan right away to explain the situation, letting him know the comment came off as a troll at first and that it’s not a good look for people close to staff to be posting things like that publicly; Told him it could misalign the brand and asked that it doesn’t happen again`,
  },
  {
    date: "6-28-2025",
    message: `Messaged Keenan about opening a Venmo account for the restaurant. Waiting to hear back`,
  },
  {
    date: "7-02-2025",
    message: `Went into restaurant to take photos of products`,
  },
  {
    date: "7-06-2025",
    message: `Stu sends over two flyers to post for the upcoming DJ's`,
  },
];

const GarconsNotes = () => {
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

export default GarconsNotes;
