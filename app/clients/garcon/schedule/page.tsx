"use client";

import React from "react";

const GarconSchedule = () => {
  const weeklyTasks = [
    {
      platform: "Facebook & Instagram",
      days: ["Monday", "Thursday", "Saturday"],
      time: "9:00 AM – 10:30 AM",
      tasks: ["Post 3x per week", "Respond to all messages and comments"],
    },
    {
      platform: "TikTok & Snapchat",
      days: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
      time: "11:00 AM – 12:30 PM",
      tasks: [
        "Short-form content uploads",
        "Engaging, trendy, or behind-the-scenes content",
        "Respond to DMs and comments",
      ],
    },
    {
      platform: "YouTube",
      days: ["Every other Sunday (long-form)", "Daily (shorts)"],
      time: "2:00 PM – 3:30 PM",
      tasks: [
        "2 long-form videos per month",
        "Respond to all comments and DMs",
        "Shorts can be repurposed from TikTok content",
      ],
    },
    {
      platform: "Engagement & Growth",
      days: ["Daily (comments)", "Weekly (outreach)"],
      time: "4:00 PM – 5:00 PM",
      tasks: [
        "Shoot content once a month (1-day production)",
        "Comment on other relevant accounts daily",
        "Reach out to 1 food/pizza influencer every 7 days",
      ],
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Social Media Management Plan</h1>
      <div className="grid grid-cols-12 gap-y-5 lg:gap-5">
        {weeklyTasks.map((section, index) => (
          <div
            key={index}
            className="col-span-12 lg:col-span-6 border-l-1 border-gray-700"
          >
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-1">{section.platform}</h2>
              <p className="text-sm text-gray-400">
                Posting Days: {section.days.join(", ")}
              </p>
              <p className="text-sm text-gray-400 mb-4">Time: {section.time}</p>
              <ul className="space-y-2">
                {section.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>{task}</span>
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

export default GarconSchedule;
