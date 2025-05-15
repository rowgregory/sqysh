import React from "react";

const changelogData = [
  {
    date: " 5-7-2025",
    message: `Initialized GitHub repo, obtained client assets, set up Vercel, and pushed changes to make the site live immediately`,
  },
  {
    date: "5-9-2025",
    message: `Imported color palette to tailwind config file and Canva. Imported barlow_condensed font family and font weight styles 100-900. Create HomeHero spiral sunray. One full rotation takes 2 minutes`,
  },
  {
    date: "5-11-2025",
    message: `Find transparent texture to overlay the sprial sunray to give it a grainy texture`,
  },
  {
    date: "5-12-2025",
    message: `The backend configuration for Stripe were set up, including the installation of necessary packages and configuration of environment variables for the Stripe secret key and webhook secret. Stripe routes were added to handle customer creation, subscription management, and payment method setup. A webhook handler was implemented to process relevant events and update subscription statuses accordingly. Ngrok was installed and configured for local webhook testing, and the webhook endpoint was registered in the Stripe dashboard using the ngrok forwarding URL. The system was configured to properly verify webhook signatures and handle raw request buffering. Additionally, the foundation for admin pages was started, focusing on the necessary structures for managing and viewing user subscriptions. Dicussed potential monthly plan prices and tier packages with Jaci. This app is designed for end of life care, so it's possible that users may no longer use the app as their pets' journeys come to a close, therefore, making the tiers all monthly is the best decision; users will not have to worry about getting their money back; they'll be able to reflect and look at all the data colleted`,
  },
  {
    date: "5-14-2025",
    message: `Install Recharts to enable data visualizations on the dashboard. Begin building out the main dashboard layout. Create a "Today" section that shows gross volume and key summary stats. Add a "Recent Payments" section to display the latest transactions. Position two graphs alongside it to compare the current week's gross and net sales against previous weeks`,
  },
];

const RosiePaws = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Rosie Paws Changelog</h1>
      <div className="flex flex-col">
        {changelogData?.map((log, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_4fr] gap-y-4 py-3 text-[#b2b2b2] font-lato text-sm"
          >
            <div className="font-semibold text-right pr-4 border-r border-[#555]">
              {log.date}
            </div>
            <div className="text-zinc-200 pl-4">
              <ul className="list-disc pl-5">
                {log.message.split(".").map((sentence, index) => (
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

export default RosiePaws;
