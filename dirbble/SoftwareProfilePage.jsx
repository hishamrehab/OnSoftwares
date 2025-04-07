// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import * as echarts from "echarts";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("certifications");
  const [reviewFilter, setReviewFilter] = useState("all");

  // Trust score circle chart
  React.useEffect(() => {
    const trustScoreChart = echarts.init(
      document.getElementById("trust-score-chart"),
    );
    const trustScore = 87;

    const option = {
      series: [
        {
          type: "gauge",
          startAngle: 90,
          endAngle: -270,
          pointer: { show: false },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              color: "#4F46E5",
            },
          },
          axisLine: {
            lineStyle: {
              width: 8,
              color: [[1, "#E5E7EB"]],
            },
          },
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          detail: {
            valueAnimation: true,
            fontSize: 24,
            fontWeight: "bold",
            formatter: "{value}",
            offsetCenter: [0, 0],
          },
          data: [
            {
              value: trustScore,
              name: "Trust Score",
            },
          ],
        },
      ],
      animation: false,
    };

    trustScoreChart.setOption(option);

    return () => {
      trustScoreChart.dispose();
    };
  }, []);

  // Sentiment analysis chart
  React.useEffect(() => {
    const sentimentChart = echarts.init(
      document.getElementById("sentiment-chart"),
    );

    const option = {
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        max: 100,
        show: false,
      },
      yAxis: {
        type: "category",
        data: ["Negative", "Neutral", "Positive"],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: "#6B7280",
          fontSize: 12,
        },
      },
      series: [
        {
          name: "Sentiment",
          type: "bar",
          data: [
            { value: 12, itemStyle: { color: "#EF4444" } },
            { value: 23, itemStyle: { color: "#F59E0B" } },
            { value: 65, itemStyle: { color: "#10B981" } },
          ],
          label: {
            show: true,
            position: "right",
            formatter: "{c}%",
            fontSize: 12,
            color: "#6B7280",
          },
        },
      ],
      animation: false,
    };

    sentimentChart.setOption(option);

    return () => {
      sentimentChart.dispose();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://public.readdy.ai/ai/img_res/b995f0ef6bdec34c1b6bff52e83aeda2.jpg"
              alt="Software Logo"
              className="h-20 w-20 rounded-lg object-cover object-top"
            />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900">
                CloudSync Pro
              </h1>
              <p className="text-sm text-gray-500">by TechForge Solutions</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex flex-col items-end">
              <div className="flex items-center">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  Enterprise Software
                </span>
                <div className="ml-3 bg-gray-100 rounded-full px-3 py-1 flex items-center">
                  <i className="fas fa-shield-alt text-indigo-600 mr-1"></i>
                  <span className="text-sm font-medium">
                    Trust Score: 87/100
                  </span>
                </div>
              </div>
            </div>
            <button className="!rounded-button whitespace-nowrap cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm font-medium shadow-sm">
              Add Your Software & Verify DNS
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Overview Panel */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center justify-center">
                <div
                  id="trust-score-chart"
                  style={{ width: "150px", height: "150px" }}
                ></div>
                <p className="mt-2 text-sm font-medium text-gray-500">
                  Trust Score
                </p>
              </div>

              <div className="flex flex-col items-center justify-center border-l border-gray-200 pl-6">
                <div className="text-3xl font-bold text-indigo-600">24</div>
                <p className="mt-2 text-sm font-medium text-gray-500">
                  Certified Talents
                </p>
              </div>

              <div className="flex flex-col items-center justify-center border-l border-gray-200 pl-6">
                <div className="text-3xl font-bold text-indigo-600">142</div>
                <p className="mt-2 text-sm font-medium text-gray-500">
                  Verified Reviews
                </p>
              </div>

              <div className="flex flex-col items-center justify-center border-l border-gray-200 pl-6">
                <div className="text-3xl font-bold text-indigo-600">18</div>
                <p className="mt-2 text-sm font-medium text-gray-500">
                  Integrations
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <p className="text-gray-600">
                CloudSync Pro is an enterprise-grade cloud management platform
                that simplifies infrastructure operations with automated
                workflows, comprehensive monitoring, and seamless integrations.
                Trusted by over 5,000 organizations worldwide for reliable,
                secure, and scalable cloud operations.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("certifications")}
              className={`${
                activeTab === "certifications"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap cursor-pointer py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Certifications
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`${
                activeTab === "reviews"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap cursor-pointer py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Reviews & Ratings
            </button>
            <button
              onClick={() => setActiveTab("dns")}
              className={`${
                activeTab === "dns"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap cursor-pointer py-4 px-1 border-b-2 font-medium text-sm`}
            >
              DNS Ownership Validation
            </button>
            <button
              onClick={() => setActiveTab("integrations")}
              className={`${
                activeTab === "integrations"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap cursor-pointer py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Compatible Tools & Integrations
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === "certifications" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Certified Talents
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search certifications..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-center">
                      <img
                        src={`https://readdy.ai/api/search-image?query=Professional headshot portrait of a diverse tech professional, neutral background, high quality professional photo, business attire, confident expression&width=60&height=60&flag=3adcbb5490dd9386903572189f2436fa&seq=${item}&orientation=squarish`}
                        alt="Certificate holder"
                        className="h-12 w-12 rounded-full object-cover object-top"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Alex Morgan
                        </h3>
                        <div className="flex items-center mt-1">
                          <span className="text-sm text-gray-500">
                            CloudSync Administrator
                          </span>
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            <i className="fas fa-check-circle mr-1"></i>{" "}
                            Verified
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        <i className="far fa-calendar-alt mr-1"></i> Certified
                        on April 2, 2025
                      </div>
                      <button className="!rounded-button whitespace-nowrap cursor-pointer text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="!rounded-button whitespace-nowrap cursor-pointer text-indigo-600 hover:text-indigo-800 font-medium">
                View All Certifications{" "}
                <i className="fas fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold text-indigo-600">
                      4.7
                    </div>
                    <div className="mt-2 flex items-center">
                      {[1, 2, 3, 4].map((star) => (
                        <i
                          key={star}
                          className="fas fa-star text-yellow-400 text-xl"
                        ></i>
                      ))}
                      <i className="fas fa-star-half-alt text-yellow-400 text-xl"></i>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Based on 142 reviews
                    </p>
                  </div>

                  <div className="col-span-2">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Sentiment Analysis
                    </h3>
                    <div
                      id="sentiment-chart"
                      style={{ width: "100%", height: "120px" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Customer Reviews
              </h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select
                    value={reviewFilter}
                    onChange={(e) => setReviewFilter(e.target.value)}
                    className="appearance-none pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="all">All Reviews</option>
                    <option value="positive">Positive Only</option>
                    <option value="negative">Negative Only</option>
                    <option value="recent">Most Recent</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search reviews..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-search text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[1, 2, 3, 4].map((review) => (
                <div
                  key={review}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <img
                        src={`https://readdy.ai/api/search-image?query=Professional headshot portrait of a diverse business professional, neutral background, high quality professional photo, business attire, confident expression&width=50&height=50&flag=3691ce736158885b471c4bde3661c32b&seq=${review + 10}&orientation=squarish`}
                        alt="Reviewer"
                        className="h-10 w-10 rounded-full object-cover object-top"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-medium text-gray-900">
                            Sarah Johnson
                          </h3>
                          <div className="flex items-center">
                            <div className="flex items-center mr-2">
                              {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                  <i
                                    key={i}
                                    className={`${i < 4 ? "fas" : "far"} fa-star text-yellow-400`}
                                  ></i>
                                ))}
                            </div>
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                              <i className="fas fa-check-circle mr-1"></i>{" "}
                              Verified
                            </span>
                          </div>
                        </div>

                        <p className="mt-1 text-sm text-gray-500">
                          IT Director • Financial Services
                        </p>

                        <div className="mt-4 text-gray-600">
                          <p>
                            CloudSync Pro has transformed our infrastructure
                            management. The automated workflows have reduced our
                            deployment time by 60%, and the monitoring
                            capabilities give us unprecedented visibility.
                            Integration with our existing tools was seamless.
                            Highly recommended for enterprise environments.
                          </p>
                        </div>

                        <div className="mt-4 flex justify-between items-center">
                          <div className="text-sm text-gray-500">
                            <i className="far fa-calendar-alt mr-1"></i> April
                            5, 2025
                          </div>
                          <div className="flex space-x-4">
                            <button className="!rounded-button whitespace-nowrap cursor-pointer flex items-center text-gray-500 hover:text-gray-700 text-sm">
                              <i className="far fa-thumbs-up mr-1"></i> Helpful
                              (24)
                            </button>
                            <button className="!rounded-button whitespace-nowrap cursor-pointer text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                              View Full Review
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <i className="fas fa-chevron-left"></i>
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600 hover:bg-indigo-100"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <i className="fas fa-chevron-right"></i>
                </a>
              </nav>
            </div>
          </div>
        )}

        {activeTab === "dns" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                DNS Ownership Validation
              </h2>
              <button className="!rounded-button whitespace-nowrap cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm font-medium shadow-sm">
                <i className="fas fa-plus mr-1"></i> Add New Domain
              </button>
            </div>

            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Domain
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Verification Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Health
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      {
                        domain: "cloudsyncpro.com",
                        status: "Verified",
                        date: "Apr 2, 2025",
                        health: "Excellent",
                      },
                      {
                        domain: "api.cloudsyncpro.com",
                        status: "Verified",
                        date: "Apr 2, 2025",
                        health: "Good",
                      },
                      {
                        domain: "docs.cloudsyncpro.com",
                        status: "Verified",
                        date: "Mar 28, 2025",
                        health: "Excellent",
                      },
                      {
                        domain: "status.cloudsyncpro.com",
                        status: "Verified",
                        date: "Mar 25, 2025",
                        health: "Good",
                      },
                      {
                        domain: "support.cloudsyncpro.com",
                        status: "Pending",
                        date: "—",
                        health: "—",
                      },
                    ].map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {item.domain}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              item.status === "Verified"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {item.status === "Verified" ? (
                              <i className="fas fa-check-circle mr-1"></i>
                            ) : (
                              <i className="fas fa-clock mr-1"></i>
                            )}
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.health !== "—" && (
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                item.health === "Excellent"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {item.health === "Excellent" ? (
                                <i className="fas fa-heart mr-1"></i>
                              ) : (
                                <i className="fas fa-thumbs-up mr-1"></i>
                              )}
                              {item.health}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-3">
                            <button className="!rounded-button whitespace-nowrap cursor-pointer text-indigo-600 hover:text-indigo-900">
                              <i className="far fa-copy"></i>
                            </button>
                            <button className="!rounded-button whitespace-nowrap cursor-pointer text-indigo-600 hover:text-indigo-900">
                              <i className="fas fa-external-link-alt"></i>
                            </button>
                            <button className="!rounded-button whitespace-nowrap cursor-pointer text-gray-600 hover:text-gray-900">
                              <i className="fas fa-ellipsis-v"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-indigo-50 rounded-lg p-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <i className="fas fa-info-circle text-indigo-600 text-xl"></i>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-indigo-800">
                    How DNS Verification Works
                  </h3>
                  <div className="mt-2 text-indigo-700">
                    <p>
                      DNS verification establishes ownership of your domains
                      through blockchain-secured records. This creates a trusted
                      connection between your software and web properties,
                      enhancing security and user confidence.
                    </p>
                    <a
                      href="#"
                      className="mt-3 flex items-center text-indigo-800 hover:text-indigo-900 font-medium"
                    >
                      Learn more about DNS verification
                      <i className="fas fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "integrations" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Compatible Tools & Integrations
              </h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select className="appearance-none pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500">
                    <option>All Categories</option>
                    <option>Analytics</option>
                    <option>Databases</option>
                    <option>DevOps</option>
                    <option>Security</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search integrations..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-search text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "DataViz Analytics",
                  category: "Analytics",
                  connected: true,
                },
                { name: "SecureAuth", category: "Security", connected: true },
                {
                  name: "MongoDB Atlas",
                  category: "Databases",
                  connected: true,
                },
                { name: "Jenkins CI", category: "DevOps", connected: false },
                {
                  name: "Elastic Stack",
                  category: "Analytics",
                  connected: false,
                },
                { name: "AWS Services", category: "Cloud", connected: true },
                { name: "Docker Hub", category: "DevOps", connected: true },
                {
                  name: "Prometheus",
                  category: "Monitoring",
                  connected: false,
                },
                { name: "Slack", category: "Communication", connected: true },
              ].map((integration, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center">
                      <img
                        src={`https://readdy.ai/api/search-image?query=Modern tech company logo for ${integration.name}, minimalist design, tech branding, professional software logo on white background, vector style&width=60&height=60&seq=${index + 20}&orientation=squarish`}
                        alt={integration.name}
                        className="h-12 w-12 rounded-lg object-cover object-top"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              {integration.name}
                            </h3>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mt-1">
                              {integration.category}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                defaultChecked={integration.connected}
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          <span
                            className={`inline-flex items-center ${integration.connected ? "text-green-600" : "text-gray-500"}`}
                          >
                            {integration.connected ? (
                              <>
                                <i className="fas fa-link mr-1"></i> Connected
                              </>
                            ) : (
                              <>
                                <i className="fas fa-unlink mr-1"></i> Not
                                Connected
                              </>
                            )}
                          </span>
                        </div>
                        <button className="!rounded-button whitespace-nowrap cursor-pointer text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                          Configure
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="!rounded-button whitespace-nowrap cursor-pointer bg-white border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Load More Integrations
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
