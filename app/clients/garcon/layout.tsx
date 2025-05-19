"use client";

import React, { FC } from "react";
import useCustomPathname from "@/app/hooks/useCustomPathname";
import { ChildrenProps } from "@/app/types/common.types";
import Link from "next/link";

const GarconLayout: FC<ChildrenProps> = ({ children }) => {
  const path = useCustomPathname();
  const activeSchedulePath = path === "/clients/garcon/schedule";
  const activeChangelogPath = path === "/clients/garcon/changelog";
  const activeObligationsPath = path === "/clients/garcon/obligations";
  const activeNotesPath = path === "/clients/garcon/notes";

  return (
    <>
      <div className="sticky top-0 bg-black">
        <h1 className="text-2xl mt-10 mb-4 font-changa">
          Garçon Super Slice Pizza Parlor
        </h1>
        <div className="flex items-center mb-7 border-b-1 border-zinc-600 w-full">
          <Link
            href="/clients/garcon/schedule"
            className={`${
              activeSchedulePath ? "text-sky-500 bg-[#121212]" : ""
            } p-3 min-w-28 text-center`}
          >
            Schedule
          </Link>
          <Link
            href="/clients/garcon/changelog"
            className={`${
              activeChangelogPath ? "text-sky-500 bg-[#121212]" : ""
            } p-3 min-w-28 text-center`}
          >
            Changelog
          </Link>
          <Link
            href="/clients/garcon/obligations"
            className={`${
              activeObligationsPath ? "text-sky-500 bg-[#121212]" : ""
            } p-3 min-w-28 text-center`}
          >
            Obligations
          </Link>
          <Link
            href="/clients/garcon/notes"
            className={`${
              activeNotesPath ? "text-sky-500 bg-[#121212]" : ""
            } p-3 min-w-28 text-center`}
          >
            Notes
          </Link>
        </div>
      </div>
      {children}
    </>
  );
};

export default GarconLayout;
