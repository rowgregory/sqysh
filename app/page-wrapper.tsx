"use client";

import React, { FC, ReactNode, useEffect } from "react";
import Hotjar from "@hotjar/browser";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavMenu from "./components/MobileNavMenu";
import Burger from "./components/Burger";
import { useCreateTrafficSourceMutation } from "./redux/services/trafficSourceApi";

interface PageWrapperProps {
  children: ReactNode;
}

const siteId = 5096445;
const hotjarVersion = 6;

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  const [createTrafficSource] = useCreateTrafficSourceMutation();

  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Parse query param cameFrom from URL
    const params = new URLSearchParams(window.location.search);
    const cameFrom = params.get("cameFrom");

    const recordTrafficSource = async () => {
      if (cameFrom) {
        try {
          await createTrafficSource({ cameFrom }).unwrap();
          console.log(`Traffic source '${cameFrom}' recorded`);
        } catch (error) {
          console.error("Failed to record traffic source", error);
        }
      }
    };

    recordTrafficSource();
  }, [createTrafficSource]);

  return (
    <div className="min-h-dvh">
      <Header />
      <Burger />
      <MobileNavMenu />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
