import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import PageWrapper from "./page-wrapper";
import { HeaderProvider } from "./contexts/headerContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sqysh",
  description: "Software development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderProvider>
          <PageWrapper>{children}</PageWrapper>
        </HeaderProvider>
      </body>
    </html>
  );
}
