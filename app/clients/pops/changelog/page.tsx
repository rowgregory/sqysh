import React from "react";

const changelogData = [
  {
    date: "5-9-2025",
    message: `Replace HomeHero image component with a div background image for better layout control. Received new 50th anniversary logo. Include steps to enable push notifications`,
  },
  {
    date: "5-11-2025",
    message: `Fix EditableTextArea component's value and textKeyBlock attributes for consistent updating`,
  },
  {
    date: "5-12-2025",
    message: `Create additional sections for two seat maps`,
  },
  {
    date: "5-13-2025",
    message: `Reduce the height of the HeaderTop component. Add ternary to HeaderLower component so gold logo displays on home page and white on all others. Hide call box office if screen is < 1200; call office button is still in the FixedHeader component which reveals itself as soon as you scroll, and in the NavigationDrawer, and on all the concerts; this was done to avoid the header navigation links from overlapping. Make link text in NavigationDrawer component 18 pixels and center links in middle of screen. Update Newsletter link to say Connect With Us. Update all other links that previously had '/newsletter'. All camp page text now editable. Update camp application file HTML structure to match new data. Remove red checkmark and student conductor bullet point editable text. Breadcrumb component height reduced. Add advertising pdf to repository and add link download button to pdf for instant downloading. Add new ticket banner video showing important dates`,
  },
  {
    date: "5-14-2025",
    message: `Add the instrument attribute to the CampApplication model. Migrate the Prisma schema to Raleway and regenerate the schema. Add validation for the instrument field and include it in Step 4 of the application form. Test and validate that the form receives the new attribute, with 30 minutes of testing. Remove the success state from fetching and deleting camp applications. Split staff members into a separate page and move PublicTeamMemberCard into its own file for modularity. Add optional chaining to the concerts map function to handle empty arrays. Increase the negative margin on HomeHero so the image fits perfectly within the screen. Add missing camp values to AdminCampApplicationViewDrawer. Update the getNavigationLinks function to include new paths for board members and staff, and add these paths to the showFooter and showHeader functions. Add missing venue seat maps to the Venue page`,
  },
  {
    date: "5-20-2025",
    message: `The OpenCage Data API is integrated into the venue creation and update process, automatically converting venue addresses into accurate geographic coordinates. The venue creation/update flow is updated to fetch and store latitude and longitude for each new venue, improving location accuracy. Error handling is added to the geocoding process to ensure data integrity. Additionally, a media page is built featuring a PhotoCarousel, a VideoMedia player, and a TestimonialCarousel to showcase multimedia content and enhance user engagement. Use longitude and latitude from the concert details page to populate coordinates for map`,
  },
  {
    date: "6-4-2025",
    message: `Revise the privacy policy language for better clarity. Update the chair sponsorships table header background color to align with the 50th anniversary logo. Improve form switch colors to provide stronger contrast. Modify the team member description parsing to use a pipe (|) after each period, enabling bullet point formatting on the frontend, and add instructional text in the form to guide admins on how and where to use the pipe. Change all gray text to white to improve overall readability across the site. Create Hotjar account. Add script to website. Push new code to Github and Vercel`,
  },
  {
    date: "6-5-2025",
    message: `Create an analytics overview page showcasing GA4, Meta Pixel, and Hotjar as powerful tools for understanding user behavior. Each section highlights what the tool does, why it matters, and how it can help businesses make smarter decisions. The goal is to give clients a clear, side by side look at what each platform offers so they can decide which ones to move forward with implementing. This page serves as a pitch to demonstrate the value of integrating GA4 & Pixel into the site`,
  },
  {
    date: "6-14-2025",
    message: `This release introduces the comprehensive SeasonPackageBanner component that enhances administrative control across the platform. The admin dashboard receives significant updates with new graphical capabilities, now displaying interactive charts optimized for both desktop and mobile viewing that track daily metrics. Admin gain complete control over the season package banner through a dedicated backend card interface featuring toggle switches for visibility management - one switch allows administrators to make the banner visible only to admin users for testing and editing purposes, while a second switch makes the banner publicly visible to all users. When in admin-only mode, administrators can click directly on the banner text or button text within the component for real-time editing. The platform now features a powerful Header Button Studio that provides admin with comprehensive control over header button configurations, styling, and behavior. The Header Button Studio serves as a centralized command center for all header button management across the application. This administrative tool empowers admin to create, customize, and deploy header buttons without requiring developer intervention. The studio provides an intuitive interface where administrators can define button text, colors, hover states, and destinations. Admin can preview button appearances in real-time`,
  },
  {
    date: "6-19-2025",
    message: `Modify click handler logic; EditableTextarea only calls e.stopPropagation() and e.preventDefault() when the user is authenticated. For non logged in users, the event bubbles up to the parent button, allowing the external link to open; updated cursor styling so entire button shows the cursor; remove pointer-events-auto from the EditableTextArea as it's not needed and could interfere with the click behavior; Now the behavior will be admin users can click on the text to open the editable modal and public users can click anywhere on the button, including the text, to open the external link`,
  },
];

const PopsChangelog = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Changelog</h1>
      <div className="flex flex-col">
        {changelogData?.map((log, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_4fr] gap-y-4 py-3 text-[#b2b2b2] font-lato text-sm"
          >
            <div className="font-semibold text-right pr-4 border-r border-[#555]">
              {log.date}
            </div>
            <div className={`text-zinc-200 pl-4`}>
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

export default PopsChangelog;
