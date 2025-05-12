import React from "react";

const deadlinesData = [
  {
    date: "5-20-2025",
    message:
      "Rough draft or visual for the Rosie Paws app due to show at the end of Jaci's lecture. Should highlight key features and interface ideas",
  },
  {
    date: "6-20-2025",
    message:
      "Final version of the app completed before the lecture airs. Should be fully functional and ready for real use or testing",
  },
];

const Deadlines = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Rosie Paws Deadlines</h1>
      <div className="flex flex-col">
        {deadlinesData?.map((deadline, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_4fr] gap-y-4 py-3 text-[#b2b2b2] font-lato text-sm"
          >
            <div className="font-semibold text-right pr-4 border-r border-[#555]">
              {deadline.date}
            </div>
            <div className={`text-zinc-200 pl-4`}>
              <ul className="list-disc pl-5">
                {deadline.message.split(".").map((sentence, index) => (
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

export default Deadlines;
