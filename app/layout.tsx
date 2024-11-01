import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import PageWrapper from "./page-wrapper";
import { HeaderProvider } from "./contexts/headerContext";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sqysh",
  description: "Software development",
  metadataBase: new URL("https://www.sqysh.io/"),
  openGraph: {
    type: "website",
    url: "https://www.sqysh.io/",
    title: "Sqysh",
    description: "Innovative Software Solutions",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Fsqysh-rich-preview-2.png?alt=media&token=b9c2e838-ca79-4a0d-8fe7-bf18e3529b4c",
        width: 1200,
        height: 630,
        alt: "Sqysh",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:url" content="https://www.sqysh.io/" />
        <meta property="og:title" content="Sqysh" />
        <meta
          property="og:description"
          content="Innovative Software Solutions"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Fsqysh-rich-preview-2.png?alt=media&token=b9c2e838-ca79-4a0d-8fe7-bf18e3529b4c"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Sqysh" />
        <meta property="og:type" content="website" />
      </Head>
      <body className={inter.className}>
        <HeaderProvider>
          <PageWrapper>{children}</PageWrapper>
        </HeaderProvider>
      </body>
    </html>
  );
}
