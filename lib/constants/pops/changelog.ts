export const versions = [
  {
    version: "v2.2.1300",
    date: "2025-05-09",
    type: "Patch Release",
    changes: {
      features: [
        "New 50th anniversary logo integration",
        "Push notifications setup guide",
      ],
      improvements: [
        "Replace HomeHero image component with div background image for better layout control",
      ],
    },
  },
  {
    version: "v2.2.1301",
    date: "2025-05-11",
    type: "Patch Release",
    changes: {
      improvements: [
        "Fix EditableTextArea component's value and textKeyBlock attributes for consistent updating",
      ],
    },
  },
  {
    version: "v2.2.1302",
    date: "2025-05-12",
    type: "Patch Release",
    changes: {
      features: ["Create additional sections for two seat maps"],
    },
  },
  {
    version: "v2.2.1303",
    date: "2025-05-13",
    type: "Minor Release",
    changes: {
      features: [
        "New ticket banner video showing important dates",
        "Advertising PDF download functionality",
        "Editable camp page text system",
      ],
      improvements: [
        "Reduced HeaderTop component height",
        "Dynamic logo display (gold on home, white on others)",
        "Responsive call box office visibility for screens < 1200px",
        "Enhanced NavigationDrawer with 18px text and centered links",
        "Updated Newsletter link to 'Connect With Us'",
        "Updated camp application HTML structure",
        "Reduced Breadcrumb component height",
        "Removed red checkmark and student conductor bullet point editable text",
      ],
    },
  },
  {
    version: "v2.2.1304",
    date: "2025-05-14",
    type: "Minor Release",
    changes: {
      features: [
        "Instrument attribute added to CampApplication model",
        "Separate staff members page",
        "Missing venue seat maps added to Venue page",
      ],
      improvements: [
        "Migrated Prisma schema to Raleway and regenerated schema",
        "Added validation for instrument field in Step 4 of application form",
        "Removed success state from fetching and deleting camp applications",
        "Split PublicTeamMemberCard into separate modular file",
        "Added optional chaining to concerts map function",
        "Increased negative margin on HomeHero for perfect screen fit",
        "Updated navigation links for board members and staff pages",
      ],
    },
  },
  {
    version: "v2.2.1305",
    date: "2025-05-20",
    type: "Minor Release",
    changes: {
      features: [
        "OpenCage Data API integration for venue geocoding",
        "Media page with PhotoCarousel, VideoMedia player, and TestimonialCarousel",
        "Automatic latitude and longitude storage for venues",
      ],
      improvements: [
        "Enhanced venue creation/update flow with geographic coordinates",
        "Added error handling for geocoding process",
        "Improved location accuracy using longitude and latitude data",
      ],
    },
  },
  {
    version: "v2.2.1306",
    date: "2025-06-04",
    type: "Patch Release",
    changes: {
      features: ["Hotjar analytics integration"],
      improvements: [
        "Revised privacy policy language for better clarity",
        "Updated chair sponsorships table header to match 50th anniversary theme",
        "Enhanced form switch colors for stronger contrast",
        "Modified team member description parsing with pipe (|) formatting",
        "Changed all gray text to white for improved readability",
      ],
    },
  },
  {
    version: "v2.2.1307",
    date: "2025-06-05",
    type: "Minor Release",
    changes: {
      features: [
        "Analytics overview page showcasing GA4, Meta Pixel, and Hotjar",
        "Side-by-side comparison of analytics tools",
        "Client pitch page for analytics platform integration",
      ],
      improvements: [
        "Clear explanations of what each analytics tool offers",
        "Business value demonstration for analytics implementation",
      ],
    },
  },
  {
    version: "v2.2.1308",
    date: "2025-06-14",
    type: "Major Release",
    changes: {
      features: [
        "Comprehensive SeasonPackageBanner component with admin controls",
        "Interactive dashboard charts for desktop and mobile",
        "Header Button Studio for centralized button management",
        "Admin-only banner visibility toggle for testing",
        "Public banner visibility toggle",
        "Real-time banner text editing for administrators",
      ],
      improvements: [
        "Enhanced administrative control across platform",
        "Daily metrics tracking with graphical display",
        "Centralized command center for header button configurations",
        "Intuitive interface for button styling and behavior management",
        "Real-time button preview capabilities",
      ],
    },
  },
  {
    version: "v2.2.1309",
    date: "2025-06-19",
    type: "Patch Release",
    changes: {
      improvements: [
        "Modified EditableTextarea click handler logic for authenticated users",
        "Enhanced cursor styling for entire button interaction",
        "Improved event handling for public vs admin user interactions",
        "Removed unnecessary pointer-events-auto from EditableTextArea",
        "Better separation of admin editing vs public external link functionality",
      ],
    },
  },
  {
    version: "v2.2.1310",
    date: "2025-07-22",
    type: "Minor Release",
    changes: {
      features: [
        "Framer Motion animations with staggered reveals and hover effects",
        "Responsive call-to-action button with adaptive text",
        "Modernized pricing table with card-based design",
        "Direct CTA button linking to advertising purchase portal",
      ],
      improvements: [
        "Refactored repetitive code blocks into efficient loops",
        "Enhanced mobile responsiveness with adaptive sizing and spacing",
        "Interactive states for improved user engagement",
        "Adaptive button text ('Advertise Now' on mobile, 'Start Advertising' on desktop)",
      ],
    },
  },
  {
    version: "v2.3.0",
    date: "2025-07-31",
    type: "Minor Release",
    changes: {
      features: [
        "New interactive seat map component (1 of 3 venues)",
        "Complete sponsorship opportunities page with animated golden design",
        "Single tickets button added to season package banner",
        "Sponsorship navigation link in main header",
        "Animated golden swirls and floating particles background effects",
        "Responsive sponsorship tier cards with hover animations",
        "Contact section with marketing manager details",
        "Statistics dashboard showing Pops Orchestra metrics",
      ],
      improvements: [
        "Fixed React hydration errors in particle animations",
        "Enhanced black and gold luxury theme consistency",
        "Improved mobile responsiveness for sponsorship page",
        "Better navigation flow with new header link",
        "Optimized animation performance with useEffect hooks",
        "Enhanced user experience with Framer Motion transitions",
        "Upgraded seat selection interface design",
      ],
    },
  },
  {
    version: "v2.3.4",
    date: "2025-08-11",
    type: "Patch Release",
    changes: {
      features: [],
      improvements: [
        "Updated Sarasota Contemporary Dance image and information on Hidden Gems page",
      ],
    },
  },
  {
    version: "v2.4.0",
    date: "2025-08-20",
    type: "Minor Release",
    changes: {
      features: [
        "Introduced full sponsor management with brand-new API CRUD (create, read, update, delete) routes for seamless backend handling",
        "Launched a dedicated Admin Sponsor Page for streamlined control and oversight",
        "Added a robust Sponsor Model to structure and organize sponsor data efficiently",
        "Integrated a modern Sponsor Drawer for quick access and interaction",
        "Designed a flexible Sponsor Form for smooth sponsor creation and updates",
        "Rolled out the Sundays at Neel page featuring a unique dual criss-cross marquee layout for a dynamic visual experience",
      ],
      improvements: [
        "Enhanced concert form with a new Sundays-at-Neel dropdown option for quicker event setup",
        "Implemented Sqysh tracking parameters in URLs to better understand and measure incoming traffic sources",
      ],
    },
  },
  {
    version: "v2.4.2",
    date: "2025-08-29",
    type: "Patch Release",
    changes: {
      features: [
        "Added Sundays at Neel concert filtering and display functionality",
      ],
      improvements: [
        "Enhanced admin concert management with improved Form UI",
        "Updated header lower component with new Sunday at Neel's link",
        "Improved concert page filtering to properly handle Sundays-at-Neel concert types",
        "Refactored admin concert drawer with better state management and form handling",
      ],
    },
  },
];
