"use client";

import React, { useState } from "react";

const AnalyticsProposal = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const TabButton = ({ id, label, isActive, onClick }: any) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
          : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Complete Analytics Solution
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional analytics implementation for concert marketing
              success - Hotjar, Google Analytics 4, and Meta Pixel integration
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <TabButton
            id="overview"
            label="Complete Solution"
            isActive={activeTab === "overview"}
            onClick={setActiveTab}
          />
          <TabButton
            id="benefits"
            label="Marketing Benefits"
            isActive={activeTab === "benefits"}
            onClick={setActiveTab}
          />
          <TabButton
            id="implementation"
            label="Professional Setup"
            isActive={activeTab === "implementation"}
            onClick={setActiveTab}
          />
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Current Status */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 border border-blue-600">
              <h3 className="text-3xl font-bold mb-4 text-blue-300">
                Current Analytics Status
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-black bg-opacity-30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">✅</span>
                    <h4 className="font-semibold text-blue-300">Hotjar</h4>
                  </div>
                  <p className="text-blue-200 text-sm">Active 15-day trial</p>
                  <p className="text-blue-100 text-sm">
                    User behavior tracking
                  </p>
                </div>
                <div className="bg-black bg-opacity-30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">⚡</span>
                    <h4 className="font-semibold text-green-300">
                      Google Analytics 4
                    </h4>
                  </div>
                  <p className="text-green-200 text-sm">
                    Ready for implementation
                  </p>
                  <p className="text-green-100 text-sm">
                    Marketing team preferred
                  </p>
                </div>
                <div className="bg-black bg-opacity-30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🎯</span>
                    <h4 className="font-semibold text-purple-300">
                      Meta Pixel
                    </h4>
                  </div>
                  <p className="text-purple-200 text-sm">
                    Ready for implementation
                  </p>
                  <p className="text-purple-100 text-sm">
                    Social media optimization
                  </p>
                </div>
              </div>
            </div>

            {/* Three-Tool Comparison */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-blue-500">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  Hotjar
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Visual heatmaps of user clicks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Session recordings for UX insights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>User feedback and surveys</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Mobile behavior analysis</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-900 rounded-lg">
                  <div className="text-blue-300 font-semibold">
                    User Experience Optimization
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-green-500">
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  Google Analytics 4
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Real-time audience tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Traffic source attribution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Demographic insights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Concert page performance</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-900 rounded-lg">
                  <div className="text-green-300 font-semibold">
                    Marketing Performance Tracking
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-purple-500">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  Meta Pixel
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Facebook ad optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Instagram campaign tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Audience retargeting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Social media ROI measurement</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-purple-900 rounded-lg">
                  <div className="text-purple-300 font-semibold">
                    Social Media Advertising
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8 border border-gray-600">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Complete Marketing Intelligence Platform
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="font-semibold mb-2">
                    Understand Your Audience
                  </h4>
                  <p className="text-gray-300 text-sm">
                    See exactly how visitors interact with concert information
                    and what drives interest
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">📊</div>
                  <h4 className="font-semibold mb-2">
                    Optimize Marketing Spend
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Track which marketing channels bring the most engaged
                    visitors to your concerts
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🚀</div>
                  <h4 className="font-semibold mb-2">
                    Maximize Social Media ROI
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Retarget interested visitors and create lookalike audiences
                    for future campaigns
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === "benefits" && (
          <div className="space-y-8">
            {/* Marketing Benefits */}
            <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-xl p-8 border border-green-600">
              <h3 className="text-3xl font-bold mb-6 text-green-300">
                Marketing Team Benefits
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-green-300 mb-4">
                    Real-Time Concert Marketing Insights
                  </h4>
                  <ul className="space-y-3 text-green-200">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">▶</span>
                      <span>
                        Track which concerts generate the most interest in
                        real-time
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">▶</span>
                      <span>
                        See peak traffic times for concert announcements
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">▶</span>
                      <span>
                        Monitor social media campaign performance across
                        platforms
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">▶</span>
                      <span>
                        Identify your most valuable audience demographics
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-green-300 mb-4">
                    Data-Driven Decision Making
                  </h4>
                  <ul className="space-y-3 text-green-200">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">▶</span>
                      <span>
                        Visual heatmaps show exactly what content resonates
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">▶</span>
                      <span>
                        Session recordings reveal user experience pain points
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">▶</span>
                      <span>
                        Facebook retargeting keeps your concerts top-of-mind
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">▶</span>
                      <span>
                        Comprehensive reporting for board presentations
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ROI Scenarios */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-900 rounded-xl p-6 border border-blue-600">
                <h4 className="text-xl font-bold mb-4 text-blue-300">
                  Scenario: Concert Promotion
                </h4>
                <div className="space-y-3 text-sm text-blue-200">
                  <div>
                    <strong>Hotjar shows:</strong> Visitors spend 2+ minutes on
                    Spring Concert page
                  </div>
                  <div>
                    <strong>GA4 reveals:</strong> 70% traffic from Facebook,
                    peak times 6-8pm
                  </div>
                  <div>
                    <strong>Meta Pixel enables:</strong> Retarget engaged
                    visitors with ticket reminders
                  </div>
                  <div className="text-blue-300 font-semibold">
                    Result: Optimized promotion timing and targeting
                  </div>
                </div>
              </div>

              <div className="bg-purple-900 rounded-xl p-6 border border-purple-600">
                <h4 className="text-xl font-bold mb-4 text-purple-300">
                  Scenario: Mobile Optimization
                </h4>
                <div className="space-y-3 text-sm text-purple-200">
                  <div>
                    <strong>GA4 shows:</strong> 85% mobile traffic, high bounce
                    rate
                  </div>
                  <div>
                    <strong>Hotjar reveals:</strong> Users struggle with mobile
                    concert details
                  </div>
                  <div>
                    <strong>Meta Pixel tracks:</strong> Mobile ad performance
                    improvement
                  </div>
                  <div className="text-purple-300 font-semibold">
                    Result: Better mobile experience, higher engagement
                  </div>
                </div>
              </div>

              <div className="bg-green-900 rounded-xl p-6 border border-green-600">
                <h4 className="text-xl font-bold mb-4 text-green-300">
                  Scenario: Audience Growth
                </h4>
                <div className="space-y-3 text-sm text-green-200">
                  <div>
                    <strong>GA4 identifies:</strong> Top-performing content and
                    demographics
                  </div>
                  <div>
                    <strong>Hotjar shows:</strong> What keeps visitors engaged
                    longest
                  </div>
                  <div>
                    <strong>Meta Pixel creates:</strong> Lookalike audiences for
                    expansion
                  </div>
                  <div className="text-green-300 font-semibold">
                    Result: Scalable audience acquisition strategy
                  </div>
                </div>
              </div>
            </div>

            {/* Competitive Advantage */}
            <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-xl p-8 border border-purple-600">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                Professional Marketing Analytics Advantage
              </h3>
              <p className="text-purple-100 mb-6">
                Most concert organizations rely on basic website metrics. This
                comprehensive analytics setup provides enterprise-level
                marketing intelligence typically only available to major venues.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-300 mb-3">
                    What you&apos;ll know that competitors don&apos;t:
                  </h4>
                  <ul className="space-y-2 text-sm text-purple-200">
                    <li>• Exact user journey patterns through your content</li>
                    <li>• Real-time social media campaign effectiveness</li>
                    <li>• Mobile vs desktop user behavior differences</li>
                    <li>• Optimal timing for concert announcements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-3">
                    Professional implementation includes:
                  </h4>
                  <ul className="space-y-2 text-sm text-purple-200">
                    <li>• Custom event tracking for concert interactions</li>
                    <li>• Advanced audience segmentation setup</li>
                    <li>• Cross-platform conversion tracking</li>
                    <li>• Automated reporting dashboards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Implementation Tab */}
        {activeTab === "implementation" && (
          <div className="space-y-8">
            {/* Professional Setup */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8 border border-gray-600">
              <h3 className="text-3xl font-bold mb-6 text-center">
                Professional Analytics Implementation
              </h3>
              <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
                Complete setup and configuration of all three analytics
                platforms, optimized specifically for concert marketing success.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">
                    Google Analytics 4 Setup
                  </h4>
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li>• Account creation and property setup</li>
                    <li>• Tracking code installation</li>
                    <li>• Basic event configuration</li>
                    <li>• Enhanced measurement activation</li>
                    <li>• Verification and testing</li>
                  </ul>
                </div>

                <div className="bg-purple-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">
                    Meta Pixel Integration
                  </h4>
                  <ul className="space-y-2 text-sm text-purple-200">
                    <li>• Pixel code installation</li>
                    <li>• Basic conversion tracking setup</li>
                    <li>• Facebook Business Manager connection</li>
                    <li>• Installation verification</li>
                    <li>• Testing and validation</li>
                  </ul>
                </div>

                <div className="bg-green-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">
                    Next.js Technical Integration
                  </h4>
                  <ul className="space-y-2 text-sm text-green-200">
                    <li>• Add tracking scripts layout</li>
                    <li>• Configure environment variables</li>
                    <li>• Create the useAnalytics hook</li>
                    <li>• Testing and validation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Implementation Timeline */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Implementation Timeline
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-green-400 mb-1">
                      Google Analytics 4 Installation
                    </h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Create account, install tracking code, configure basic
                      settings
                    </p>
                    <div className="text-xs text-gray-400">
                      Timeline: 2-3 hours
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-purple-400 mb-1">
                      Meta Pixel Setup
                    </h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Install pixel code, connect to Facebook Business Manager
                    </p>
                    <div className="text-xs text-gray-400">
                      Timeline: 3 hours
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-400 mb-1">
                      Testing & Verification
                    </h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Verify all tracking is working correctly
                    </p>
                    <div className="text-xs text-gray-400">
                      Timeline: 2 hours
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-yellow-400 mb-1">
                      Handoff
                    </h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Provide access credentials
                    </p>
                    <div className="text-xs text-gray-400">
                      Timeline: 15 minutes
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 border border-blue-600">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-300">
                Technical Implementation Service
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-4">
                    Technical Implementation
                  </h4>
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li>• Next.js tracking script integration</li>
                    <li>• Google Analytics 4 account setup</li>
                    <li>• Meta Pixel code implementation</li>
                    <li>• Server-side rendering optimization</li>
                    <li>• All tracking verified and working</li>
                    <li>• Performance impact minimized</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">
                    Marketing Team Access
                  </h4>
                  <ul className="space-y-2 text-sm text-purple-200">
                    <li>• Google Analytics dashboard access</li>
                    <li>• Facebook Business Manager setup</li>
                    <li>• Real-time data starts flowing immediately</li>
                    <li>• Ready for campaign creation</li>
                    <li>• All platforms ready for marketing use</li>
                    <li>• No additional setup required</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Next Steps CTA */}
            <div className="text-center bg-gradient-to-r from-green-800 to-blue-800 rounded-xl p-8 border border-green-600">
              <h3 className="text-2xl font-bold mb-4">
                Ready for Technical Implementation?
              </h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Quick and professional setup of Google Analytics 4 and Meta
                Pixel to complement your existing Hotjar installation.
              </p>
              <div className="text-lg font-semibold text-green-300 mb-4">
                Technical Implementation Available
              </div>
              <p className="text-gray-300 text-sm">
                Robyn, contact Sqysh to discuss adding Google Analytics 4 and
                Meta Pixel to The Pops Orchestra!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsProposal;
