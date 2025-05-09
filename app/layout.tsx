import type { Metadata } from "next";
import { Changa, Inter } from "next/font/google";
import "./globals.css";
import PageWrapper from "./page-wrapper";
import { HeaderProvider } from "./contexts/headerContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  preload: false,
  variable: "--font-inter",
});
const changa = Changa({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  preload: false,
  variable: "--font-changa",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sqysh.io"),
  title: "Sqysh",
  description:
    "Sqysh offers custom web development solutions to create digital experiences that drive growth. From building innovative websites to developing custom applications, we tailor everything to your needs.",
  keywords: [
    "Sqysh",
    "web development",
    "custom websites",
    "web solutions",
    "software development",
    "digital solutions",
    "e-commerce",
    "business websites",
    "custom applications",
    "tailored development",
    "website design",
    "front-end development",
    "back-end development",
    "full-stack development",
    "React development",
    "Next.js",
    "Tailwind CSS",
    "mobile-friendly websites",
    "responsive design",
    "SEO optimization",
    "UI/UX design",
    "development services",
    "web solutions provider",
    "website redesign",
    "web development for small businesses",
    "custom digital experiences",
    "site maintenance",
    "website functionality",
    "web application development",
    "custom software",
    "tech solutions for businesses",
    "programming",
    "coding",
    "software engineering",
    "machine learning",
    "cloud computing",
    "artificial intelligence",
    "big data",
    "blockchain",
    "virtual reality",
    "augmented reality",
    "app development",
    "API integration",
    "cybersecurity",
    "automation",
    "enterprise software",
    "tech startups",
    "data science",
    "full stack engineer",
    "mobile app development",
    "website optimization",
    "IoT development",
    "tech consultancy",
    "cloud infrastructure",
    "tech innovations",
    "tech trends",
    "software as a service (SaaS)",
    "online business tools",
    "digital marketing solutions",
    "e-commerce platforms",
    "web accessibility",
    "digital transformation",
    "business automation",
    "business intelligence",
    "enterprise resource planning (ERP)",
    "internet of things (IoT)",
    "custom tech solutions",
    "artificial intelligence development",
    "data analytics",
    "real-time data",
    "cloud-native development",
    "database management",
    "software architecture",
    "digital product development",
    "IT consulting",
    "big data solutions",
    "distributed systems",
    "serverless computing",
    "microservices architecture",
    "UI frameworks",
    "technology-driven business solutions",
    "tech for small businesses",
    "cloud application development",
    "digital strategy consulting",
    "enterprise application development",
    "machine learning models",
    "Squishmallows",
    "Squishmallow collector",
    "Squishmallow plush toys",
    "Squishmallow merchandise",
    "Squishmallow fan community",
    "Squishmallow characters",
    "Squishmallow collection",
    "Squishmallow lovers",
    "Squishmallow toys",
    "Squishmallows online store",
    "Squishmallow fandom",
    "Squishmallow plushies",
    "Squishmallow gifts",
    "Squishmallow brand",
    "Squishmallow accessories",
    "Squishmallow sales",
    "Squishmallow craze",
    "collectible Squishmallows",
    "unique Squishmallows",
    "limited edition Squishmallows",
    "Squishmallow plush collectibles",
    "best Squishmallows to collect",
    "Squishmallow enthusiasts",
    "Squishmallow trends",
    "Squishmallow fansite",
    "Squishmallow plush collection",
    "Squishmallow buying guide",
    "Squishmallow hobby",
    "Squishmallow craze 2024",
    "Squishmallow exclusive items",
    "Squishmallow plush inventory",
    "Squishmallow fandom groups",
    "Squishmallow collector’s items",
    "Squishmallow series",
    "Squishmallow rare editions",
    "Squishmallow themed merchandise",
    "Squishmallow gift ideas",
    "Squishmallow shopping deals",
    "Squishmallow toy reviews",
    "Squishmallow pop culture",
    "Squishmallow fan art",
    "Squishmallow characters list",
    "Squishmallow community events",
    "Squishmallow themed events",
    "Squishmallow fan conventions",
    "Squishmallow collectibles market",
    "Squishmallow trading community",
  ],
  openGraph: {
    title: "Sqysh",
    description:
      "Tailored digital solutions that help businesses grow through custom websites and applications. Let us bring your ideas to life with the latest technologies and expertise.",
    url: "https://sqysh.io/",
    siteName: "Sqysh",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Fsqysh-rich-preview-2.png?alt=media&token=b9c2e838-ca79-4a0d-8fe7-bf18e3529b4c",
        width: 1200,
        height: 630,
        alt: "Sqysh logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  applicationName: "Sqysh",
  appleWebApp: {
    title: "Sqysh",
    statusBarStyle: "default",
    capable: true,
  },
  other: {
    "apple-mobile-web-app-capable": "yes", // Add this for legacy support
    "mobile-web-app-capable": "yes", // This will explicitly cover modern cases
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="fb:app_id" content="953131993018901" />
        <meta property="og:url" content="https://sqysh.io/" />
      </head>
      <body className={`${inter.variable} ${changa.variable}`}>
        <HeaderProvider>
          <PageWrapper>{children}</PageWrapper>
        </HeaderProvider>
      </body>
    </html>
  );
}
