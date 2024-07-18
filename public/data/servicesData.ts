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
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";

const servicesData = [
  {
    title: "Custom Software Development",
    text: `At Sqysh we specialize in designing and developing custom software solutions that cater to your specific business needs, including web, mobile, and desktop applications.`,
    icon: faComputer,
    color: "#FFD700",
  },
  {
    title: "Project Rescue and Enhancement",
    text: `Struggling with an existing project? We analyze, identify improvement areas, and implement changes to bring your project to a successful conclusion.`,
    icon: faProjectDiagram,
    color: "#87CEEB",
  },
  {
    title: "User Interface (UI) and User Experience (UX) Design",
    text: `We create intuitive, user-friendly interfaces and conduct thorough usability testing to ensure an optimal user experience.`,
    icon: faWindowMaximize,
    color: "#FFA500",
  },
  {
    title: "API Integration and Middleware Development",
    text: `We integrate different systems and applications for seamless communication and data exchange through robust API and middleware solutions.`,
    icon: faFileContract,
    color: "#32CD32",
  },
  {
    title: "Cloud Services and Deployment",
    text: `At Sqysh we leverage Google Cloud Platform (GCP) for various cloud services, utilizing its APIs to enhance and integrate applications efficiently. This ensures that your applications are scalable, reliable, and cost-effective. I also utilize modern deployment platforms such as Vercel, Netlify, Heroku, and Render for seamless and efficient application hosting.`,
    icon: faCloud,
    color: "#FFC0CB",
  },
  {
    title: "Database Design and Management",
    text: `Specializing in SQL and NoSQL technologies, we design and manage databases to ensure efficient data handling and security. Prisma allows us to transform application logic into optimized SQL queries, delivering enhanced performance and reliability without extensive SQL knowledge.`,
    icon: faDatabase,
    color: "#40E0D0",
  },
  {
    title: "Authentication and Authorization",
    text: `Our services include implementing secure authentication methods and designing role-based access control and permissions systems to ensure data security and proper access management.`,
    icon: faFingerprint,
    color: "#800080",
  },
  {
    title: "Maintenance and Support",
    text: `We provide ongoing maintenance, bug fixes, and technical support to ensure the smooth operation of your software post-deployment.`,
    icon: faHeadset,
    color: "#FF0000",
  },
  {
    title: "Quality Assurance and Testing",
    text: `Our approach includes rigorous automated testing with tools like Jest to maintain software quality and reliability. Automated tests simplify the testing process, offer quick feedback on code updates, and help prevent regressions`,
    icon: faMicroscope,
    color: "#FFD700",
  },
  {
    title: "Security and Compliance",
    text: `Data encryption, security best practices, and routine security audits are key components of our approach to safeguarding your data and ensuring compliance.`,
    icon: faLock,
    color: "#50C878",
  },
];

export default servicesData;
