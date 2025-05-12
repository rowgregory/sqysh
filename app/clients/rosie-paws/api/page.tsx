import React from "react";

const apiData = [
  {
    title: "Auth",
    endpoints: [
      {
        method: "POST",
        route: "/api/auth/register",
        description: "Register a new user with name, email, and password.",
      },
      {
        method: "POST",
        route: "/api/auth/login",
        description: "Authenticate a user and return a token or session.",
      },
      {
        method: "POST",
        route: "/api/auth/forgot-password",
        description: "Send a password reset email to the user.",
      },
    ],
  },
  {
    title: "Blog",
    endpoints: [
      {
        method: "GET",
        route: "/api/blog/fetch-blogs",
        description: "Fetch all blog posts for display on the blog section.",
      },
      {
        method: "POST",
        route: "/api/blog/create-blog",
        description: "Create a new blog post (admin only).",
      },
      {
        method: "GET",
        route: "/api/blog/fetch-blog-by-id",
        description: "Fetch a single blog post by its ID.",
      },
      {
        method: "PUT",
        route: "/api/blog/update-blog",
        description: "Update an existing blog post (admin only).",
      },
      {
        method: "DELETE",
        route: "/api/blog/delete-blog",
        description: "Delete a blog post by its ID (admin only).",
      },
    ],
  },
  {
    title: "Newsletter",
    endpoints: [
      {
        method: "POST",
        route: "/api/newsletter/subscribe",
        description:
          "Subscribe a user to the newsletter using EmailOctopus API.",
      },
      {
        method: "GET",
        route: "/api/newsletter/fetch-subscribers",
        description:
          "Fetch all newsletter subscribers using EmailOctopus API (admin only).",
      },
    ],
  },
  {
    title: "Medication Tracker",
    endpoints: [
      {
        method: "POST",
        route: "/api/medications/create-medication",
        description:
          "Create a new medication with details like name and dosage (admin or authorized user only).",
      },
      {
        method: "PUT",
        route: "/api/medications/update-medication",
        description:
          "Update medication details (admin or authorized user only).",
      },
      {
        method: "GET",
        route: "/api/medications/fetch-medications-by-id",
        description:
          "Retrieve all medication logs for the currently logged-in user (admin or authorized user only).",
      },
      {
        method: "GET",
        route: "/api/medications/fetch-all-medications",
        description:
          "Retrieve all medication records across users (admin only).",
      },
      {
        method: "DELETE",
        route: "/api/medications/delete-medication",
        description:
          "Delete medication tracker (admin or authorized user only).",
      },
    ],
  },
  {
    title: "Notes & Journaling",
    endpoints: [
      {
        method: "POST",
        route: "/api/journals/create-note",
        description:
          "Create a new journal or note entry for a user (admin or authorized user only).",
      },
      {
        method: "PUT",
        route: "/api/journals/update-note",
        description:
          "Update a specific note by its ID (admin or authorized user only).",
      },
      {
        method: "DELETE",
        route: "/api/journals/delete-note",
        description:
          "Delete a journal entry by its ID (admin or authorized user only).",
      },
      {
        method: "GET",
        route: "/api/journals/fetch-notes-by-id",
        description:
          "Retrieve all journal entries for the currently logged-in user (admin or authorized user only).",
      },
      {
        method: "GET",
        route: "/api/journals/fetch-all-notes",
        description:
          "Admin route to retrieve all notes and journaling (admin only).",
      },
    ],
  },

  {
    title: "Admin Dashboard",
    endpoints: [
      {
        method: "GET",
        route: "/api/admin/overview",
        description:
          "Fetch platform-wide stats and overview data (admin only).",
      },
    ],
  },
  {
    title: "Client Dashboard",
    endpoints: [
      {
        method: "GET",
        route: "/api/client/dashboard",
        description:
          "Get all personalized dashboard data for a user (client only).",
      },
    ],
  },
  {
    title: "Feeding Schedule",
    endpoints: [
      {
        method: "POST",
        route: "/api/feedings/create-feeding",
        description: "Log a new feeding entry (admin or authorized user only).",
      },
      {
        method: "PUT",
        route: "/api/feedings/update-feeding",
        description:
          "Update an existing feeding entry by its ID (admin or authorized user only).",
      },
      {
        method: "DELETE",
        route: "/api/feedings/delete-feeding",
        description:
          "Delete a feeding entry by its ID (admin or authorized user only).",
      },
      {
        method: "GET",
        route: "/api/feedings/fetch-feedings-by-id.",
        description:
          "Retrieve feeding history for the logged-in user's pet (admin or authorized user only).",
      },
      {
        method: "GET",
        route: "/api/feedings/fetch-all-feedings",
        description:
          "Admin route to fetch all feeding schedulees (admin only).",
      },
    ],
  },
  {
    title: "Walk Schedule",
    endpoints: [
      {
        method: "POST",
        route: "/api/walks/create-walk",
        description:
          "Create a new walk entry including duration and notes (admin or authorized user only).",
      },
      {
        method: "PUT",
        route: "/api/walks/update-walk",
        description:
          "Update an existing walk entry by its ID (admin or authorized user only).",
      },
      {
        method: "DELETE",
        route: "/api/walks/delete-walk",
        description:
          "Delete a walk entry by its ID (admin or authorized user only).",
      },
      {
        method: "GET",
        route: "/api/walks/fetch-walk-schedules-by-id",
        description:
          "Fetch walk history for the user or upcoming scheduled walks. (admin or authorized user only)",
      },
      {
        method: "GET",
        route: "/api/walks/fetch-all-walks",
        description: "Admin route to retrieve all walk schedules (admin only).",
      },
    ],
  },
  {
    title: "Water Intake",
    endpoints: [
      {
        method: "POST",
        route: "/api/water/create-intake",
        description: "Create water intake (admin or authorized user only).",
      },
      {
        method: "PUT",
        route: "/api/water/update-intake",
        description: "Update a water intake (admin or authorized user only).",
      },
      {
        method: "DELETE",
        route: "/api/water/delete-intake",
        description: "Delete a water intake (admin or authorized user only).",
      },
      {
        method: "GET",
        route: "/api/water/fetch-water-intakes-by-id",
        description:
          "Retrieve water intake logs for the current user's pets (admin or authorized user only).",
      },
      {
        method: "GET",
        route: "/api/water/fetch-all-intakes",
        description: "Admin route to fetch all water intakes (admin only).",
      },
    ],
  },
  {
    title: "Ebook",
    endpoints: [
      {
        method: "GET",
        route: "/api/ebook/fetch-eboks",
        description: "Fetch all eBooks (Public).",
      },
      {
        method: "GET",
        route: "/api/ebook/fetch-ebok-by-id",
        description: "Fetch downloadable eBook by id (Public).",
      },
      {
        method: "POST",
        route: "/api/ebook/create-ebook",
        description:
          "Admin route to add a new eBook to the system (admin only).",
      },
      {
        method: "PUT",
        route: "/api/ebook/update-ebook",
        description: "Update existing eBook (admin only).",
      },
      {
        method: "DELETE",
        route: "/api/ebook/delete-ebook",
        description: "Delete an eBook (admin only).",
      },
    ],
  },
  {
    title: "Stripe Subscription Management",
    endpoints: [
      {
        method: "POST",
        route: "/api/stripe/create-customer",
        description:
          "Create a new Stripe customer when a user signs up (Public).",
      },
      {
        method: "POST",
        route: "/api/stripe/create-checkout-session",
        description:
          "Start a Stripe Checkout session for a selected subscription plan (Public).",
      },
      {
        method: "POST",
        route: "/api/stripe/webhook",
        description:
          "Handle Stripe webhook events like payment success, failure, or cancellation (Background).",
      },
      {
        method: "GET",
        route: "/api/stripe/subscription-status",
        description:
          "Retrieve the current subscription status for a logged-in user (admin or authorized user only).",
      },
      {
        method: "POST",
        route: "/api/stripe/portal-session",
        description:
          "Generate a Stripe customer portal session for billing management (admin or authorized user only).",
      },
      {
        method: "DELETE",
        route: "/api/stripe/cancel-subscription",
        description: "Cancel a user’s active subscription (client only).",
      },
    ],
  },
];

const RosiePawsApi = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">API</h1>
      <div className="flex flex-col">
        {apiData?.map((section, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-lg text-white font-bold mb-4">
              {section.title}
            </h3>
            <ul className="space-y-4">
              {section.endpoints.map((endpoint, j) => (
                <li
                  key={j}
                  className="grid grid-cols-[1fr_4fr] gap-y-2 text-[#b2b2b2] font-lato text-sm"
                >
                  <div className="font-semibold text-right pr-4 border-r border-[#555]">
                    {endpoint.method}
                  </div>
                  <div className="pl-4">
                    <p className="text-zinc-200">{endpoint.route}</p>
                    <p className="text-sm text-[#888]">
                      {endpoint.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default RosiePawsApi;
