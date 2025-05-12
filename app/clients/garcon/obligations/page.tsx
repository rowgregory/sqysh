import React from "react";

const obligationsData = [
  {
    date: "6-13-2025",
    message: `Prepare 8 pizzas for donation to Collins Middle School’s semi-formal dance on June 13th`,
  },
];

const Obligations = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Obligations</h1>
      <div className="flex flex-col">
        {obligationsData?.map((queue, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_4fr] gap-y-4 py-3 text-[#b2b2b2] font-lato text-sm"
          >
            <div className="font-semibold text-right pr-4 border-r border-[#555]">
              {queue.date}
            </div>
            <div className="text-zinc-200 pl-4">
              <ul className="list-disc pl-5">
                {queue.message.split(".").map((sentence, index) => (
                  <li key={index} className="text-sm ">
                    {sentence.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Obligations;
