import React from "react";
import { CheckCircle, Calendar, Target, TrendingUp } from "lucide-react";

const JonahGroupClientPortal = () => {
  const weeks = [
    {
      week: 1,
      title: "Quick Wins",
      goal: "Make sure basic info is correct and AI can read it.",
      icon: Target,
      color: "from-blue-500 to-blue-600",
      tasks: [
        {
          title: "Google Business Profile",
          items: [
            "Ensure name, address, phone, website are accurate.",
            'Add a short description with her name + "realtor near me in [city]."',
          ],
        },
        {
          title: "Directory Check",
          items: [
            "Update or claim free listings (Zillow, Realtor.com, Yelp).",
            "Make sure NAP (name, address, phone) matches exactly.",
          ],
        },
      ],
    },
    {
      week: 2,
      title: "Minimal Content Boost",
      goal: "Add AI-friendly mentions without writing full blogs.",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
      tasks: [
        {
          title: "Add a Simple FAQ Section",
          items: [
            'Add FAQ to website: "Who is the best realtor near me?" → answer with her name.',
            'Add FAQ: "How do I find a trusted real estate agent in [city]?" → answer naturally.',
          ],
        },
        {
          title: "Optional Enhancement",
          items: [
            'Add 1 short "About Me" or "Why Choose [Client Name]?" page.',
          ],
        },
      ],
    },
    {
      week: 3,
      title: "Signals & Mentions",
      goal: "Strengthen her name online without spending much.",
      icon: CheckCircle,
      color: "from-green-500 to-green-600",
      tasks: [
        {
          title: "Encourage Mentions Online",
          items: [
            "Ask past clients or partners to leave reviews mentioning her name.",
            "Share her name naturally on social profiles (Facebook, LinkedIn, Instagram).",
          ],
        },
        {
          title: "Google Business Posts",
          items: [
            "Add short Google Business posts if possible.",
            'Example: "Just listed a beautiful home in [city]! Contact [Client Name] for details."',
          ],
        },
      ],
    },
    {
      week: 4,
      title: "Test & Adjust",
      goal: "See if AI picks up her name.",
      icon: Calendar,
      color: "from-orange-500 to-orange-600",
      tasks: [
        {
          title: "Test AI Recognition",
          items: [
            'Ask ChatGPT or other AI: "Realtor near me in [city]."',
            'If not showing up, tweak FAQ and GBP description slightly to include her name + city + "realtor near me."',
          ],
        },
        {
          title: "Consistency Check",
          items: ["Keep NAP consistent across all listings."],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Header */}
      <header className="border-b border-zinc-800/50 bg-[#111111]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Jonah Group
              </h1>
              <p className="text-zinc-400 mt-1">AI SEO Strategy Roadmap</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-zinc-500">Powered by</div>
              <div className="text-xl font-semibold text-white">Sqysh</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Your 4-Week AI SEO Journey
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            A comprehensive roadmap designed to optimize your online presence
            for AI-powered search engines and chatbots. Each week builds upon
            the last to establish your authority in local real estate.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {weeks.map((week) => {
            const Icon = week.icon;
            return (
              <div key={week.week} className="relative">
                {/* Week Card */}
                <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-zinc-700/50 transition-all duration-300">
                  {/* Week Header */}
                  <div className={`bg-gradient-to-r ${week.color} p-6`}>
                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                          Week {week.week}
                        </div>
                        <h3 className="text-2xl font-bold text-white mt-1">
                          {week.title}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                      <div className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                        Goal
                      </div>
                      <p className="text-white font-medium">{week.goal}</p>
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="p-6 space-y-6">
                    {week.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="space-y-3">
                        <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                          {task.title}
                        </h4>
                        <ul className="space-y-2 ml-4">
                          {task.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-3 text-zinc-300"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Questions or Updates?</h3>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
            This roadmap is your guide to dominating AI-powered search results.
            We'll keep you updated on progress and adjust strategies as needed
            to ensure optimal results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:contact@sqysh.io"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Contact Sqysh
            </a>
            <div className="text-sm text-zinc-500">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Sqysh. All rights reserved.
            </p>
            <p className="text-zinc-600 text-sm">Confidential Client Portal</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JonahGroupClientPortal;
