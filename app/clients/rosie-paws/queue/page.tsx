import React from "react";

const queueData = [
  {
    date: "5-11-2025",
    sentences: [
      {
        text: "Implement Header component for the landing page.",
        isCompleted: true,
      },
      {
        text: "Develop HomeHero section for the landing page.",
        isCompleted: true,
      },
      {
        text: "Construct About section for the landing page.",
        isCompleted: false,
      },
      {
        text: "Implement Footer component for the landing page.",
        isCompleted: false,
      },
    ],
  },
  {
    date: "5-12-2025",
    sentences: [
      {
        text: "Implement authentication using JSON Web Tokens for signup, login, and session handling.",
        isCompleted: false,
      },
      {
        text: "Configure PostgreSQL schema with Prisma and define necessary data models.",
        isCompleted: true,
      },
      {
        text: "Create API routes for managing subscriptions.",
        isCompleted: true,
      },
      {
        text: "Develop the admin dashboard interface.",
        isCompleted: false,
      },
      {
        text: "Integrate backend Stripe logic for payment processing.",
        isCompleted: true,
      },
    ],
  },
  {
    date: "5-15-2025",
    sentences: [
      {
        text: "Develop client dashboard interface.",
        isCompleted: false,
      },
      {
        text: "Create pet profile form and drawer for client-side pet creation.",
        isCompleted: false,
      },
      {
        text: "Implement logout functionality with redirection to login page.",
        isCompleted: true,
      },
      {
        text: "Establish API routes for authentication workflows.",
        isCompleted: true,
      },
      {
        text: "Establish API routes for pet management.",
        isCompleted: true,
      },
    ],
  },
];

const RosiePawsQueue = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">In Queue</h1>
      <div className="flex flex-col">
        {queueData?.map((queue, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_4fr] gap-y-4 py-3 text-[#b2b2b2] font-lato text-sm"
          >
            <div className="font-semibold text-right pr-4 border-r border-[#555]">
              {queue.date}
            </div>
            <div className={`"text-zinc-200 pl-4`}>
              <ul className="list-disc pl-5">
                {queue.sentences.map((sentence, sentenceIndex) => (
                  <li
                    key={sentenceIndex}
                    className={`text-sm ${
                      sentence.isCompleted
                        ? "line-through text-lime-500"
                        : "text-white"
                    }`}
                  >
                    {sentence.text}
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

export default RosiePawsQueue;
