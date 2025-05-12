import React from "react";

const queueData = [
  {
    date: "5-11-2025",
    message: `Create landing page with Header, HomeHero, About, Mission, Blog, Send Us a Message, and Footer blocks`,
    isCompleted: false,
  },
  {
    date: "5-12-2025",
    message: `Build out authentication with JSON Web Token for sign up, login, and session management. Set up PostgreSQL schema with Prisma and create models for Users, Pets, Subscriptions, and BlogPosts. Create API routes for user signup/login, fetching user data, and pet profile management. Develop protected dashboard pages: My Pets, My Subscription, and Account Settings. Build admin routes and pages for managing blog posts. Integrate Stripe test mode for subscription plans and create checkout flow`,
    isCompleted: false,
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
            <div
              className={`${
                queue.isCompleted
                  ? "text-lime-500 line-through"
                  : "text-zinc-200"
              } pl-4`}
            >
              <ul className="list-disc pl-5">
                {queue.message.split(".").map((sentence, index) => (
                  <li key={index} className="text-sm">
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

export default RosiePawsQueue;
