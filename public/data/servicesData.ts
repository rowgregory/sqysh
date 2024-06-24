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
    text: `I design and develop bespoke software solutions tailored to meet your specific business needs, whether it's web applications, mobile apps, or desktop applications.`,
    icon: faComputer,
    color: "#FFD700",
  },
  {
    title: "Project Rescue and Enhancement",
    text: `Struggling with an existing project? I analyze, identify improvement areas, and implement changes to bring your project to a successful conclusion.`,
    icon: faProjectDiagram,
    color: "#87CEEB",
  },
  {
    title: "User Interface (UI) and User Experience (UX) Design",
    text: `I create intuitive, user-friendly interfaces and conduct thorough usability testing to ensure an optimal user experience.`,
    icon: faWindowMaximize,
    color: "#FFA500",
  },
  {
    title: "API Integration and Middleware Development",
    text: `I integrate different systems and applications for seamless communication and data exchange through robust API and middleware solutions.`,
    icon: faFileContract,
    color: "#32CD32",
  },
  {
    title: "Cloud Services and Deployment",
    text: `I leverage Google Cloud Platform (GCP) for various cloud services, utilizing its APIs to enhance and integrate applications efficiently. This ensures that your applications are scalable, reliable, and cost-effective. I also utilize modern deployment platforms such as Vercel, Netlify, Heroku, and Render for seamless and efficient application hosting.`,
    icon: faCloud,
    color: "#FFC0CB",
  },
  {
    title: "Database Design and Management",
    text: `I design and manage databases using SQL and NoSQL technologies, ensuring efficient data handling and security measures. Utilizing Prisma, I transform application logic into optimized SQL queries without the need for extensive SQL knowledge, ensuring enhanced performance and reliability.`,
    icon: faDatabase,
    color: "#40E0D0",
  },
  {
    title: "Authentication and Authorization",
    text: `I implement secure authentication mechanisms and develop role-based access control and permissions systems.`,
    icon: faFingerprint,
    color: "#800080",
  },
  {
    title: "Maintenance and Support",
    text: `I provide ongoing maintenance, bug fixes, and technical support to ensure the smooth operation of your software post-deployment.`,
    icon: faHeadset,
    color: "#FF0000",
  },
  {
    title: "Quality Assurance and Testing",
    text: `I conduct rigorous automated testing using tools like Jest to ensure software quality and reliability. Automated tests streamline the testing process, providing efficient feedback on code changes and reducing the risk of regressions.`,
    icon: faMicroscope,
    color: "#FFD700",
  },
  {
    title: "Security and Compliance",
    text: `I implement data encryption, security best practices, and conduct regular security audits to ensure compliance and protect your data.`,
    icon: faLock,
    color: "#50C878",
  },
];

export default servicesData;
