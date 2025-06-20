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
  {
    date: "5-16-2025",
    message: `Add the /api/pet/fetch-my-pets GET route to retrieve pets owned by the logged-in user, requiring authentication. Create the /api/pet/fetch-all-pets GET route to fetch all pets in the system, restricted to admin users. Add the /api/pet/create POST route to allow logged-in users to create new pets. Implement authentication API routes for user login, logout, and registration. Create header logo and home hero logo in Canva. Add admin and client dashboard links to header for demonstration`,
  },
  {
    date: "5-18-2025",
    message: `Developed Header, HomeHero, About, Subscription, and Footer blocks for the landing page.`,
  },
  {
    date: "5-20-2025",
    message: `Create API routes for authentication and pet management to support core app functionality. Build admin and guardian dashboards to improve user experience. Implement dynamic graphs showing gross volume, net sales, and guardian pet data. Enable guardians to add new pets, view pet details, and record pain scoring, view all record pain scorings, and view the pain scorings on a graph on the dashboard page`,
  },
  {
    date: "6-4-2025",
    message: `Add functionality to create and view feedings. Implement API routes to handle feeding creation and retrieval. Integrate feeding features with Redux Toolkit for state management. Add frontend form validation to ensure feeding data is correctly submitted. Feedings are displayed in reverse chronological order for easier tracking`,
  },
  {
    date: "6-7-2025",
    message: `Add functionality to create and view blood sugar readings. Implement API routes to handle blood sugar creation and retrieval. Integrate blood sugar features with Redux Toolkit for state management. Add frontend form validation to ensure feeding data is correctly submitted. Update dashboard UI. Add Pet Selector component. Add UI for subscription, profile, and settings pages`,
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
