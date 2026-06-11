import { Project, WorkProject } from "@/app/types/home.types";

export const PROJECTS: Project[] = [
  {
    name: "Education Comes First",
    desc: "Donation platform",
    url: "https://educationcomesfirst.org",
  },
  {
    name: "Elect Zosia VanMeter",
    desc: "9th District Essex County State Rep",
    url: "https://electzvm.com",
  },
  {
    name: "Boys & Girls Club of Lynn",
    desc: "Nonprofit events & ticketing",
    url: "https://bgcl.org",
  },
  {
    name: "Coastal Referral Exchange",
    desc: "Referral network platform",
    url: "https://coastal-referral-exchange.com",
  },
  {
    name: "The Pops Orchestra of Bradenton & Sarasota",
    desc: "Orchestra ticketing",
    url: "https://thepopsorchestra.org",
  },

  {
    name: "The Iron Roses",
    desc: "Touring punk band",
    url: "https://theironroses.info",
  },
  { name: "Rosie Paws", desc: "Pet health tracking SaaS" },
  { name: "Platorum", desc: "Music Promotion" },
  { name: "Thoroughly Cleaned", desc: "Cleaning Service" },
  {
    name: "Story Construction",
    desc: "Construction & remodeling",
  },
  {
    name: "Saltwater Bookkeeping",
    desc: "Bookkeeping",
    url: "https://saltwaterbookkeeping.com",
  },
  {
    name: "Century 21 North East",
    desc: "Jonah Groug & Repliers integration",
    url: "https://jonahgroupre.com",
  },
  {
    name: "The Proper Nest",
    desc: "Devon Hunt - Residential Realtor",
    url: "https://devonhuntrealtor.com",
  },
  {
    name: "Danielle's Dogs",
    desc: "Dog walking & care",
    url: "https://daniellesdogs.com",
  },
  {
    name: "Little Paws Dachshund Rescue",
    desc: "Rescue & live auctions",
    url: "https://littlepawsdr.org",
  },
];

export const boopLines = [
  "hehe",
  "boop received.",
  "ok that tickles",
  "easily my best feature",
  "you've unlocked nothing",
  "alright, back to work",
  "boop acknowledged.",
  "that's a paddlin'",
  "stop poking the dev",
  "8 arms, 0 complaints",
  "this is my cardio",
  "404: reaction not found",
  "do that again. i dare you",
  "i felt that one",
  "committed your boop to main",
  "boop().then(giggle)",
  "no boops in production",
  "warning: max boops exceeded",
  "ok now you're just procrastinating",
  "tickled. literally.",
];

export const debugLines = [
  "miss three and they shyp to production.",
  "every bug you myss is a 2am page.",
  "no QA. just you and your thumbs.",
  "they multiply if you blink.",
  "this is what staging is for.",
  "shyp zero bugs. sqysh them all.",
  "merge conflyct incoming.",
  "three mysses and it's in main.",
  "production is watching.",
];

export const VIEWS = ["home", "contact", "work"] as const;

export const WORK: WorkProject[] = [
  {
    name: "Before Sqysh",
    desc: "Vice Lotteries · RediMinds",
    intro: true,
    blurb:
      "started at vice lotteries, then rode with rediminds delivering for the big shops — resideo, ally bank. enterprise scale. picked up my first clients on the side, and eventually went all in.",
  },
  {
    name: "Little Paws Dachshund Rescue",
    desc: "Rescue · auctions · ecommerce",
    url: "https://...",
    blurb:
      "my first client, picked up 6 years back while i was still at rediminds — and still going strong. live auctions, ecards, a full shop, rescue-group integrations. i rebuild it every time i level up.",
  },
  {
    name: "Rosie Paws",
    desc: "Pet health tracking SaaS",
    blurb:
      "my first subscription SaaS — pet health tracking with recurring billing, the whole lifecycle. we sunsetted it, but it taught me how to build software people pay for monthly.",
  },
  {
    name: "The Iron Roses",
    desc: "Touring punk band",
    url: "https://...",
    blurb:
      "devon's band. touring punk. fan portal, access codes, the whole dark-mode rockshow vibe.",
  },
  {
    name: "Boys & Girls Club of Lynn",
    desc: "Nonprofit events & ticketing",
    url: "https://...",
    blurb:
      "events + ticketing for the club. live stripe, full admin control panel. real money, real stakes.",
  },
  {
    name: "The Pops Orchestra",
    desc: "Orchestra ticketing",
    url: "https://...",
    blurb:
      "the orchestra's whole web presence — public concerts, admin tools, camp applications. dark mode, red accent, runs itself.",
  },
  {
    name: "Education Comes First",
    desc: "Donation platform",
    url: "https://...",
    blurb:
      "donation platform with saved cards and a clean checkout. nonprofits deserve nice things too.",
  },
  {
    name: "Jonah Group Real Estate",
    desc: "Real estate & MLS",
    url: "https://...",
    blurb:
      "every listing in massachusetts, live on her own site — not some portal that buries her. realtors deserve their own front door.",
  },
  {
    name: "Coastal Referral Exchange",
    desc: "Referral network platform",
    url: "https://...",
    blurb:
      "my own 7am networking crew — and where a lot of these clients found me. live stripe billing, quarterly + annual dues all on autopilot, presenter queue that rotates itself. a real platform, not a spreadsheet.",
  },
  {
    name: "Elect Zosia VanMeter",
    desc: "9th Essex District State Rep",
    url: "https://...",
    blurb:
      "a whole campaign site — live canvassing map, the district drawn from census data. democracy, shipped.",
  },
  {
    name: "Saltwater Bookkeeping",
    desc: "Bookkeeping",
    url: "https://...",
    blurb:
      "clean, trustworthy site for a bookkeeper. sometimes the job is just doing it *right*.",
  },
  {
    name: "Story Construction",
    desc: "Construction & remodeling",
    blurb: "construction & remodeling. built to make the phone ring.",
  },
  {
    name: "The Proper Nest",
    desc: "Devon Hunt · real estate",
    url: "https://...",
    blurb:
      "devon's realtor site — clean intro, easy way to reach him, done. not every build needs to be a platform.",
  },
  {
    name: "Danielle's Dogs",
    desc: "Dog walking & care",
    url: "https://...",
    blurb:
      "dog walking & care — and the only one i ever wired up with graphql. every project teaches you something new.",
  },
];
