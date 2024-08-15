"use client";

import React, { FC, ReactNode, useEffect } from "react";
import Hotjar from "@hotjar/browser";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavMenu from "./components/MobileNavMenu";
import Burger from "./components/Burger";

interface PageWrapperProps {
  children: ReactNode;
}

const siteId = 5096445;
const hotjarVersion = 6;

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
  }, []);

  return (
    <div className="max-w-screen-2xl w-full mx-auto sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <Header />
      <Burger />
      <MobileNavMenu />
      <main className="w-full mt-32 sm:mt-40 pb-40 px-3 md:px-0 min-h-[calc(100vh-335px)]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
