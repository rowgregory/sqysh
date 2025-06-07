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
        isCompleted: true,
      },
      {
        text: "Implement Footer component for the landing page.",
        isCompleted: true,
      },
    ],
  },
  {
    date: "5-12-2025",
    sentences: [
      {
        text: "Configure PostgreSQL schema with Prisma and define necessary data models.",
        isCompleted: true,
      },
      {
        text: "Create API routes for managing subscriptions.",
        isCompleted: true,
      },
      {
        text: "Start building admin dashboard interface.",
        isCompleted: true,
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
        text: "Start building client dashboard interface.",
        isCompleted: true,
      },
      {
        text: "Create pet profile form and drawer for client-side pet creation.",
        isCompleted: true,
      },
      {
        text: "Establish API routes for pet management.",
        isCompleted: true,
      },
    ],
  },
  {
    date: "5-18-2025",
    sentences: [
      {
        text: "Create interface for guardians to see their recently created pet.",
        isCompleted: true,
      },
      {
        text: "Create admin view all pets page",
        isCompleted: true,
      },
    ],
  },
  {
    date: "5-20-2025",
    sentences: [
      {
        text: "Develop water intake form",
        isCompleted: false,
      },
      {
        text: "Develop create water intake drawer",
        isCompleted: false,
      },
      {
        text: "Build api route to create water intake",
        isCompleted: false,
      },
      {
        text: "Add create water intake api route to petApi file and petSlice file",
        isCompleted: false,
      },
      {
        text: "Add create water intake to redux state",
        isCompleted: false,
      },
      {
        text: "Develop guardian view all water intake logs page",
        isCompleted: false,
      },
      {
        text: "Build api route to view all logged in users water intakes",
        isCompleted: false,
      },
      {
        text: "Add water intake graph to guardian dashboaard",
        isCompleted: false,
      },
    ],
  },
  {
    date: "6-4-2025",
    sentences: [
      {
        text: "Develop feedings form",
        isCompleted: true,
      },
      {
        text: "Develop create feedings drawer",
        isCompleted: true,
      },
      {
        text: "Build api route to create feedings",
        isCompleted: true,
      },
      {
        text: "Add create feedings api route to petApi file and petSlice file",
        isCompleted: true,
      },
      {
        text: "Add create feedings to redux state",
        isCompleted: true,
      },
      {
        text: "Develop guardian view all feedings logs page",
        isCompleted: true,
      },
      {
        text: "Build api route to view all logged in users feedingss",
        isCompleted: true,
      },
      {
        text: "Add feedings graph to guardian dashboaard",
        isCompleted: true,
      },
    ],
  },
  {
    date: "6-7-2025",
    sentences: [
      {
        text: "Develop blood sugar form",
        isCompleted: true,
      },
      {
        text: "Develop create blood sugar drawer",
        isCompleted: true,
      },
      {
        text: "Build api route to create blood sugar",
        isCompleted: true,
      },
      {
        text: "Add create blood sugar api route to petApi file and petSlice file",
        isCompleted: true,
      },
      {
        text: "Add create blood sugar to redux state",
        isCompleted: true,
      },
      {
        text: "Develop guardian view all blood sugar logs page",
        isCompleted: true,
      },
      {
        text: "Build api route to view all logged in users blood sugars",
        isCompleted: true,
      },
      {
        text: "Add blood sugar graph to guardian dashboaard",
        isCompleted: true,
      },
      {
        text: "Create guardian subscriptions page UI",
        isCompleted: true,
      },
      {
        text: "Create guardian profile page UI",
        isCompleted: true,
      },
      {
        text: "Create guardian settings page UI",
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
