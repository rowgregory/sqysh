"use client";

import React, { FC } from "react";
import useCustomPathname from "@/app/hooks/useCustomPathname";
import { ChildrenProps } from "@/app/types/common.types";
import Link from "next/link";
import { BarChart3, Clock, FileText, Music } from "lucide-react";

const PopsLayout: FC<ChildrenProps> = ({ children }) => {
  const path = useCustomPathname();
  const activeQueuePath = path === "/clients/pops/queue";
  const activeChangelogPath = path === "/clients/pops/changelog";
  const activeNotesPath = path === "/clients/pops/notes";
  const activeAnalyticsPath = path === "/clients/pops/analytics";

  const tabs = [
    {
      id: "queue",
      label: "Queue",
      icon: Clock,
      href: "/clients/pops/queue",
      isActive: activeQueuePath,
    },
    {
      id: "changelog",
      label: "Changelog",
      icon: FileText,
      href: "/clients/pops/changelog",
      isActive: activeChangelogPath,
    },
    {
      id: "notes",
      label: "Notes",
      icon: FileText,
      href: "/clients/pops/notes",
      isActive: activeNotesPath,
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      href: "/clients/pops/analytics",
      isActive: activeAnalyticsPath,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl">
                <Music className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  The Pops Orchestra
                </h1>
                <p className="text-gray-400 text-base sm:text-lg">
                  Bradenton & Sarasota
                </p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center space-x-1 bg-gray-900/30 backdrop-blur-sm rounded-xl p-1 border border-gray-800 mb-8 overflow-x-auto">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={tab.href}
                  className={`flex items-center gap-2 px-3 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                    tab.isActive
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 border border-cyan-400/30 shadow-lg shadow-cyan-400/10"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {tab.id === "queue" && <Clock className="w-4 h-4" />}
                  {tab.id === "changelog" && <FileText className="w-4 h-4" />}
                  {tab.id === "notes" && <FileText className="w-4 h-4" />}
                  {tab.id === "analytics" && <BarChart3 className="w-4 h-4" />}
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden text-xs">
                    {tab.label.slice(0, 3)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <main className="min-h-[calc(100dvh-273px)]">{children}</main>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-400/20 rounded-full text-gray-400 text-sm backdrop-blur-sm">
                <Music className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">
                  Building Musical Excellence, One Feature at a Time
                </span>
                <span className="sm:hidden">Building Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopsLayout;
