"use client";

import React, { FC } from "react";
import useCustomPathname from "@/app/hooks/useCustomPathname";
import { ChildrenProps } from "@/app/types/common.types";
import Link from "next/link";

const PopsLayout: FC<ChildrenProps> = ({ children }) => {
  const path = useCustomPathname();
  const activeQueuePath = path === "/clients/pops/queue";
  const activeChangelogPath = path === "/clients/pops/changelog";
  const activeNotesPath = path === "/clients/pops/notes";

  return (
    <>
      <h1 className="text-2xl mt-10 mb-4 font-changa">
        The Pops Orchestra of Bradenton & Sarasota
      </h1>
      <div className="flex items-center mb-7 border-b-1 border-zinc-600 w-full">
        <Link
          href="/clients/pops/queue"
          className={`${
            activeQueuePath ? "text-sky-500 bg-[#121212]" : ""
          } p-3 min-w-28 text-center`}
        >
          Queue
        </Link>
        <Link
          href="/clients/pops/changelog"
          className={`${
            activeChangelogPath ? "text-sky-500 bg-[#121212]" : ""
          } p-3 min-w-28 text-center`}
        >
          Changelog
        </Link>
        <Link
          href="/clients/pops/notes"
          className={`${
            activeNotesPath ? "text-sky-500 bg-[#121212]" : ""
          } p-3 min-w-28 text-center`}
        >
          Notes
        </Link>
      </div>
      <main className="min-h-[calc(100dvh-273px)]">{children}</main>
    </>
  );
};

export default PopsLayout;
