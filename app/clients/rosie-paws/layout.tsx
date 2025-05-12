"use client";

import React, { FC } from "react";
import useCustomPathname from "@/app/hooks/useCustomPathname";
import { ChildrenProps } from "@/app/types/common.types";
import Link from "next/link";

const RosiePawsLayout: FC<ChildrenProps> = ({ children }) => {
  const path = useCustomPathname();
  const activeQueuePath = path === "/clients/rosie-paws/queue";
  const activeChangelogPath = path === "/clients/rosie-paws/changelog";
  const activeDeadlinesPath = path === "/clients/rosie-paws/deadlines";

  return (
    <>
      <h1 className="text-2xl mt-10 mb-4 font-changa">Rosie Paws</h1>
      <div className="flex items-center mb-7 border-b-1 border-zinc-600 w-full">
        <Link
          href="/clients/rosie-paws/queue"
          className={`${
            activeQueuePath ? "text-sky-500 bg-[#121212]" : ""
          } p-3 min-w-28 text-center`}
        >
          Queue
        </Link>
        <Link
          href="/clients/rosie-paws/changelog"
          className={`${
            activeChangelogPath ? "text-sky-500 bg-[#121212]" : ""
          } p-3 min-w-28 text-center`}
        >
          Changelog
        </Link>
        <Link
          href="/clients/rosie-paws/deadlines"
          className={`${
            activeDeadlinesPath ? "text-sky-500 bg-[#121212]" : ""
          } p-3 min-w-28 text-center`}
        >
          Deadlines
        </Link>
      </div>
      {children}
    </>
  );
};

export default RosiePawsLayout;
