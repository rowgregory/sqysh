import {
  faCloud,
  faComputer,
  faDatabase,
  faFileContract,
  faFingerprint,
  faHeadset,
  faLock,
  faMicroscope,
  faProjectDiagram,
  faShareAlt,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";

const servicesData = [
  {
    title: "Custom Website & App Development",
    text: `We build websites and mobile apps from scratch, tailored specifically for your business. Whether you need an e-commerce store, booking system, or customer portal - we create digital solutions that work exactly how you need them to.`,
    icon: faComputer,
    color: "#FFD700",
  },
  {
    title: "Website Rescue & Improvement",
    text: `Got a broken or outdated website? We fix problematic sites, modernize old designs, and add new features to get your online presence back on track and performing better than ever.`,
    icon: faProjectDiagram,
    color: "#87CEEB",
  },
  {
    title: "Website Design & User Experience",
    text: `We design beautiful, easy-to-use websites that your customers will love. Our focus is on creating sites that look great and make it simple for visitors to find what they need and take action.`,
    icon: faWindowMaximize,
    color: "#FFA500",
  },
  {
    title: "Social Media Management & Marketing",
    text: `We create and manage your social media presence across platforms like Instagram, Facebook, and LinkedIn. From content creation and posting to engagement and advertising campaigns - we help grow your online community and drive business results.`,
    icon: faShareAlt, // or faBullhorn, faHashtag
    color: "#FF69B4",
  },
  {
    title: "Third-Party Integrations",
    text: `Need your website to connect with other tools? We integrate payment processors, email systems, inventory management, CRMs, and other business tools so everything works together seamlessly.`,
    icon: faFileContract,
    color: "#32CD32",
  },
  {
    title: "Website Hosting & Performance",
    text: `We host your website on fast, reliable servers and ensure it loads quickly for your visitors. Using modern platforms like Vercel and Google Cloud, we keep your site running smoothly 24/7.`,
    icon: faCloud,
    color: "#FFC0CB",
  },
  {
    title: "Database & Data Management",
    text: `We set up secure systems to store and organize your business data - customer information, inventory, orders, etc. Your data stays safe, organized, and easily accessible when you need it.`,
    icon: faDatabase,
    color: "#40E0D0",
  },
  {
    title: "User Login & Security Systems",
    text: `We create secure login systems for your website, ensuring only the right people can access sensitive areas. From customer accounts to admin panels, we protect your business and user data.`,
    icon: faFingerprint,
    color: "#800080",
  },
  {
    title: "Ongoing Website Maintenance",
    text: `After launch, we keep your website updated, fix any issues that arise, and provide technical support. Think of us as your website's IT department - we handle the tech so you can focus on your business.`,
    icon: faHeadset,
    color: "#FF0000",
  },
  {
    title: "Website Testing & Quality Control",
    text: `Before going live, we thoroughly test your website on different devices and browsers to ensure everything works perfectly. We catch and fix issues before your customers ever see them.`,
    icon: faMicroscope,
    color: "#FFD700",
  },
  {
    title: "Website Security & Protection",
    text: `We implement strong security measures to protect your website from hackers and data breaches. Your business and customer information stays safe with encryption and regular security updates.`,
    icon: faLock,
    color: "#50C878",
  },
];

export default servicesData;
