"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { getChangelogVersions } from "@/lib/utils/modern/statUtils";
import { versions } from "@/lib/constants/pops/changelog";
import {
  cardVariants,
  containerVariants,
  itemVariants,
} from "@/lib/constants/modern/framerMotion";
import {
  getChangeColor,
  getChangeIcon,
  getTypeColor,
} from "@/lib/utils/modern/displayUtils";
import { Calendar, Search } from "lucide-react";

const PopsChangelog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const stats = useMemo(() => getChangelogVersions(versions), []);
  const changelogStats = [
    {
      label: "Total Releases",
      value: stats.totalReleases,
      color: "cyan",
    },
    {
      label: "Features Added",
      value: stats.featuresAdded,
      color: "green",
    },
    {
      label: "Bugs Squashed",
      value: stats.bugsSquashed,
      color: "yellow",
    },
  ];

  const filteredVersions = versions.filter(
    (version) =>
      version.version.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Object.values(version.changes)
        .flat()
        .some((change) =>
          change.toLowerCase().includes(searchTerm.toLowerCase())
        )
  );
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-950 text-white">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              The Pops of Bradenton & Sarasota
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mb-6 shadow-lg shadow-cyan-400/20"></div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Track every evolution, feature, and improvement in our journey to
            build the ultimate musical synergy experience
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {changelogStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div
                  className={`text-3xl font-bold text-${stat.color}-400 mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Search */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="mb-12"
        >
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search versions or changes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 transition-all duration-300"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </motion.div>

        {/* Changelog Items */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {filteredVersions.map((version, index) => (
            <motion.div
              key={version.version}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-cyan-400/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10"
            >
              {/* Version Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <h2 className="text-3xl font-bold text-white">
                    {version.version}
                  </h2>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${getTypeColor(
                      version.type
                    )} text-white shadow-lg`}
                  >
                    {version.type}
                  </span>
                </div>
                <div className="text-gray-400 font-mono text-lg flex items-center gap-x-2">
                  <Calendar className="w-5 h-5" />{" "}
                  {new Date(version.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>

              {/* Changes */}
              <div className="grid gap-6">
                {Object.entries(version.changes).map(
                  ([changeType, changes]) => (
                    <div key={changeType} className="space-y-3">
                      <h3
                        className={`text-lg font-semibold capitalize flex items-center gap-3 ${
                          getChangeColor(changeType).split(" ")[0]
                        }`}
                      >
                        <span className="text-2xl">
                          {getChangeIcon(changeType)}
                        </span>
                        {changeType}
                        <span className="text-sm font-normal text-gray-500">
                          ({changes.length})
                        </span>
                      </h3>
                      <div
                        className={`border-l-2 ${
                          getChangeColor(changeType).split(" ")[1]
                        } pl-6 space-y-2`}
                      >
                        {changes.map((change: any, changeIndex: number) => (
                          <motion.div
                            key={changeIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: index * 0.1 + changeIndex * 0.05,
                            }}
                            className="text-gray-300 bg-gray-800/30 rounded-lg p-3 border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-200"
                          >
                            {change}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredVersions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-400 mb-2">
              No results found
            </h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20 pt-12 border-t border-gray-800"
        >
          <p className="text-gray-400">
            Built with Love by Sqysh • Last updated{" "}
            {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PopsChangelog;
