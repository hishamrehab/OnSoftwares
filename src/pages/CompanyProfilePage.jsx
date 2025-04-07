// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import * as echarts from "echarts";
const CompanyProfilePage = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  React.useEffect(() => {
    // Initialize certification score chart
    const chartDom = document.getElementById("certification-chart");
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            radius: "100%",
            itemStyle: {
              color: "#6366f1",
            },
            progress: {
              show: true,
              width: 18,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                width: 18,
                color: [[1, "#e0e0e0"]],
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            title: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              fontSize: 28,
              offsetCenter: [0, "0%"],
              formatter: "{value}%",
              color: "#6366f1",
            },
            data: [
              {
                value: 85,
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
      // Handle resize
      window.addEventListener("resize", () => {
        myChart.resize();
      });
      return () => {
        window.removeEventListener("resize", () => {
          myChart.resize();
        });
        myChart.dispose();
      };
    }
  }, [activeTab]);
  // Expertise progress bars
  React.useEffect(() => {
    const expertiseAreas = [
      { id: "web-dev", value: 92 },
      { id: "mobile-dev", value: 88 },
      { id: "cloud", value: 85 },
      { id: "ai", value: 78 },
    ];
    expertiseAreas.forEach((area) => {
      const progressBar = document.getElementById(area.id);
      if (progressBar) {
        progressBar.style.width = `${area.value}%`;
      }
    });
  }, [activeTab]);
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-10 w-auto"
                  src="https://public.readdy.ai/ai/img_res/61bb3b6e05a6a294f0cb193700fa1abd.jpg"
                  alt="On Softwares Logo"
                />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  On Softwares
                </span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a
                  href="#"
                  className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="https://readdy.ai/home/ee35e69e-e50c-4464-aec7-b27b64806814/66a534c7-3879-4632-a32f-77440407d0d8"
                  data-readdy="true"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Companies
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Talents
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  RFPs
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
                Sign In
              </button>
              <button className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
                Sign Up
              </button>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 cursor-pointer"
              >
                <i
                  className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
                ></i>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Home
              </a>
              <a
                href="https://readdy.ai/home/ee35e69e-e50c-4464-aec7-b27b64806814/66a534c7-3879-4632-a32f-77440407d0d8"
                data-readdy="true"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Companies
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Talents
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                RFPs
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4 space-x-3">
                <button className="flex-1 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
                  Sign In
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Company Profile Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-16 w-16 rounded-md object-cover"
                  src="https://public.readdy.ai/ai/img_res/783055e4707321deba4f941b587aaae7.jpg"
                  alt="Innovate Tech Solutions Logo"
                />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  Innovate Tech Solutions
                </h1>
                <div className="flex items-center mt-1">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                    <i className="fas fa-check-circle mr-1"></i>
                    Verified Domain
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    innovatetechsolutions.com
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <div className="mr-4 text-center">
                <div className="text-sm text-gray-500">Certification Score</div>
                <div className="text-xl font-semibold text-indigo-600">85%</div>
              </div>
              <div className="mr-4 text-center">
                <div className="text-sm text-gray-500">Team Size</div>
                <div className="text-xl font-semibold text-indigo-600">48</div>
              </div>
              <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
                <i className="fas fa-handshake mr-2"></i>
                Hire This Company
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("about")}
              className={`${
                activeTab === "about"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("expertise")}
              className={`${
                activeTab === "expertise"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer`}
            >
              Expertise
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`${
                activeTab === "team"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer`}
            >
              Team
            </button>
            <button
              onClick={() => setActiveTab("engagement")}
              className={`${
                activeTab === "engagement"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer`}
            >
              Engagement
            </button>
          </nav>
        </div>
      </div>
      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* About Tab */}
        {activeTab === "about" && (
          <div className="space-y-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  About Us
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Our mission, vision, and history.
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-medium text-gray-900">
                      Mission
                    </h4>
                    <p className="mt-2 text-gray-600">
                      To empower businesses through innovative software
                      solutions that drive digital transformation and
                      sustainable growth. We strive to deliver exceptional value
                      by combining technical excellence with deep industry
                      knowledge.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-900">
                      Vision
                    </h4>
                    <p className="mt-2 text-gray-600">
                      To be the global leader in creating transformative digital
                      experiences that help organizations thrive in an
                      ever-evolving technological landscape, while maintaining
                      the highest standards of quality, security, and client
                      satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Company History
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Our journey from inception to present.
                </p>
              </div>
              <div className="border-t border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                  <ol className="relative border-l border-gray-200">
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 ring-8 ring-white">
                        <i className="fas fa-flag text-indigo-600"></i>
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                        Founded in 2015
                      </h3>
                      <p className="mb-4 text-base font-normal text-gray-600">
                        Started as a small team of 5 developers focused on web
                        applications for local businesses.
                      </p>
                    </li>
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 ring-8 ring-white">
                        <i className="fas fa-building text-indigo-600"></i>
                      </span>
                      <h3 className="mb-1 text-lg font-semibold text-gray-900">
                        Expanded to Enterprise Solutions (2018)
                      </h3>
                      <p className="text-base font-normal text-gray-600">
                        Grew to 25 employees and began offering enterprise-level
                        software solutions with a focus on security and
                        scalability.
                      </p>
                    </li>
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 ring-8 ring-white">
                        <i className="fas fa-globe text-indigo-600"></i>
                      </span>
                      <h3 className="mb-1 text-lg font-semibold text-gray-900">
                        International Expansion (2021)
                      </h3>
                      <p className="text-base font-normal text-gray-600">
                        Opened offices in Europe and Asia, establishing a global
                        presence with clients in over 15 countries.
                      </p>
                    </li>
                    <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 ring-8 ring-white">
                        <i className="fas fa-rocket text-indigo-600"></i>
                      </span>
                      <h3 className="mb-1 text-lg font-semibold text-gray-900">
                        Present Day
                      </h3>
                      <p className="text-base font-normal text-gray-600">
                        Now a team of 48 professionals delivering cutting-edge
                        solutions in web development, mobile applications, cloud
                        services, and AI integration.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Industry Expertise
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Sectors where we excel.
                </p>
              </div>
              <div className="border-t border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-hospital text-indigo-600 text-xl"></i>
                      </div>
                      <h4 className="mt-2 font-medium text-gray-900">
                        Healthcare
                      </h4>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-university text-indigo-600 text-xl"></i>
                      </div>
                      <h4 className="mt-2 font-medium text-gray-900">
                        Finance
                      </h4>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-shopping-cart text-indigo-600 text-xl"></i>
                      </div>
                      <h4 className="mt-2 font-medium text-gray-900">
                        E-commerce
                      </h4>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-graduation-cap text-indigo-600 text-xl"></i>
                      </div>
                      <h4 className="mt-2 font-medium text-gray-900">
                        Education
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Expertise Tab */}
        {activeTab === "expertise" && (
          <div className="space-y-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Certification Score
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Overall company talent strength.
                </p>
              </div>
              <div className="border-t border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-48 h-48 mb-6 md:mb-0">
                      <div
                        id="certification-chart"
                        className="w-full h-full"
                      ></div>
                    </div>
                    <div className="md:ml-8 flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        85% Overall Score
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Our certification score reflects the collective
                        expertise of our team, validated through
                        industry-recognized certifications, successful project
                        completions, and client satisfaction ratings.
                      </p>
                      <div className="flex items-center space-x-4">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
                          <i className="fas fa-download mr-2"></i>
                          Download Credentials
                        </button>
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
                          <i className="fas fa-certificate mr-2"></i>
                          View Certifications
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Technical Expertise
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Our core technical competencies.
                </p>
              </div>
              <div className="border-t border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-base font-medium text-gray-900">
                          Web Development
                        </h4>
                        <span className="text-sm font-medium text-indigo-600">
                          92%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          id="web-dev"
                          className="bg-indigo-600 h-2.5 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          React
                        </span>
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          Angular
                        </span>
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          Vue.js
                        </span>
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          Node.js
                        </span>
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          .NET Core
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-base font-medium text-gray-900">
                          Mobile Development
                        </h4>
                        <span className="text-sm font-medium text-indigo-600">
                          88%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          id="mobile-dev"
                          className="bg-indigo-600 h-2.5 rounded-full"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          React Native
                        </span>
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          Flutter
                        </span>
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          Swift
                        </span>
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          Kotlin
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-base font-medium text-gray-900">
                          Cloud Services
                        </h4>
                        <span className="text-sm font-medium text-indigo-600">
                          85%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          id="cloud"
                          className="bg-indigo-600 h-2.5 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          AWS
                        </span>
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          Azure
                        </span>
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          Google Cloud
                        </span>
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          DevOps
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-base font-medium text-gray-900">
                          AI & Machine Learning
                        </h4>
                        <span className="text-sm font-medium text-indigo-600">
                          78%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          id="ai"
                          className="bg-indigo-600 h-2.5 rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          TensorFlow
                        </span>
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          PyTorch
                        </span>
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          NLP
                        </span>
                        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          Computer Vision
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Certifications & Partnerships
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Industry recognitions and alliances.
                </p>
              </div>
              <div className="border-t border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                      <img
                        src="https://public.readdy.ai/ai/img_res/7fb663a7c4d4af77dd6ca548125dcf7a.jpg"
                        alt="AWS Certified Partner"
                        className="h-16 w-16 object-contain mb-2"
                      />
                      <h4 className="text-sm font-medium text-gray-900 text-center">
                        AWS Certified Partner
                      </h4>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                      <img
                        src="https://public.readdy.ai/ai/img_res/5993e076b4696e381f0bcaf687b7b87f.jpg"
                        alt="Microsoft Gold Partner"
                        className="h-16 w-16 object-contain mb-2"
                      />
                      <h4 className="text-sm font-medium text-gray-900 text-center">
                        Microsoft Gold Partner
                      </h4>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                      <img
                        src="https://public.readdy.ai/ai/img_res/8db2a26a53cf4b7411c56b9b79ec56d3.jpg"
                        alt="Google Cloud Partner"
                        className="h-16 w-16 object-contain mb-2"
                      />
                      <h4 className="text-sm font-medium text-gray-900 text-center">
                        Google Cloud Partner
                      </h4>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                      <img
                        src="https://public.readdy.ai/ai/img_res/a4809d17bc0fa3238b47603cda847341.jpg"
                        alt="ISO 27001 Certified"
                        className="h-16 w-16 object-contain mb-2"
                      />
                      <h4 className="text-sm font-medium text-gray-900 text-center">
                        ISO 27001 Certified
                      </h4>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                      <img
                        src="https://public.readdy.ai/ai/img_res/6cd0fa861fc1df1d0c5c7e8f48e43eea.jpg"
                        alt="CMMI Level 5"
                        className="h-16 w-16 object-contain mb-2"
                      />
                      <h4 className="text-sm font-medium text-gray-900 text-center">
                        CMMI Level 5
                      </h4>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                      <img
                        src="https://public.readdy.ai/ai/img_res/bd6f5ac9c7de6316ebf54831c28c42c3.jpg"
                        alt="Salesforce Partner"
                        className="h-16 w-16 object-contain mb-2"
                      />
                      <h4 className="text-sm font-medium text-gray-900 text-center">
                        Salesforce Partner
                      </h4>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                      <img
                        src="https://public.readdy.ai/ai/img_res/e699ccc7c1e8166792f557ca6b11ad59.jpg"
                        alt="PCI DSS Compliant"
                        className="h-16 w-16 object-contain mb-2"
                      />
                      <h4 className="text-sm font-medium text-gray-900 text-center">
                        PCI DSS Compliant
                      </h4>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                      <img
                        src="https://public.readdy.ai/ai/img_res/bd5797e07a76b3ca136383be8b15106e.jpg"
                        alt="HIPAA Compliant"
                        className="h-16 w-16 object-contain mb-2"
                      />
                      <h4 className="text-sm font-medium text-gray-900 text-center">
                        HIPAA Compliant
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Team Tab */}
        {activeTab === "team" && (
          <div className="space-y-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Leadership Team
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Meet the people guiding our vision.
                </p>
              </div>
              <div className="border-t border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                      <img
                        src="https://public.readdy.ai/ai/img_res/f32b85ea910e7e6657f27349541184db.jpg"
                        alt="CEO"
                        className="w-full h-48 object-cover object-top"
                      />
                      <div className="p-4">
                        <h4 className="text-lg font-medium text-gray-900">
                          Michael Chen
                        </h4>
                        <p className="text-sm text-gray-500">CEO & Founder</p>
                        <div className="mt-3 flex space-x-2">
                          <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                            Strategy
                          </span>
                          <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                            Leadership
                          </span>
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500 cursor-pointer"
                          >
                            <i className="fab fa-linkedin text-lg"></i>
                          </a>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500 cursor-pointer"
                          >
                            <i className="fas fa-envelope text-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                      <img
                        src="https://public.readdy.ai/ai/img_res/b0925462024abd56a4dce35f17f5a180.jpg"
                        alt="CTO"
                        className="w-full h-48 object-cover object-top"
                      />
                      <div className="p-4">
                        <h4 className="text-lg font-medium text-gray-900">
                          Sarah Johnson
                        </h4>
                        <p className="text-sm text-gray-500">CTO</p>
                        <div className="mt-3 flex space-x-2">
                          <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                            Architecture
                          </span>
                          <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                            AI
                          </span>
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500 cursor-pointer"
                          >
                            <i className="fab fa-linkedin text-lg"></i>
                          </a>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500 cursor-pointer"
                          >
                            <i className="fas fa-envelope text-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                      <img
                        src="https://public.readdy.ai/ai/img_res/c6fd307dc450289b2563e638079aa240.jpg"
                        alt="COO"
                        className="w-full h-48 object-cover object-top"
                      />
                      <div className="p-4">
                        <h4 className="text-lg font-medium text-gray-900">
                          David Wilson
                        </h4>
                        <p className="text-sm text-gray-500">COO</p>
                        <div className="mt-3 flex space-x-2">
                          <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                            Operations
                          </span>
                          <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                            Finance
                          </span>
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500 cursor-pointer"
                          >
                            <i className="fab fa-linkedin text-lg"></i>
                          </a>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500 cursor-pointer"
                          >
                            <i className="fas fa-envelope text-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Team Members
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Our talented professionals.
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search team members..."
                    className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-2 sm:text-sm rounded-md border-none shadow-sm bg-gray-100"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-search text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[...Array(8)].map((_, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-4 rounded-lg flex items-center space-x-3"
                      >
                        <img
                          src={`https://readdy.ai/api/search-image?query=professional headshot portrait of diverse ${index % 2 === 0 ? "male" : "female"} tech professional, neutral background, high quality corporate portrait&width=100&height=100&seq=team${index + 4}&orientation=squarish`}
                          alt={`Team Member ${index + 1}`}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            {
                              [
                                "Alex Rivera",
                                "Emily Zhang",
                                "James Lee",
                                "Sophia Patel",
                                "Robert Kim",
                                "Olivia Martinez",
                                "Daniel Jackson",
                                "Mia Thompson",
                              ][index]
                            }
                          </h4>
                          <p className="text-xs text-gray-500">
                            {
                              [
                                "Senior Developer",
                                "UX Designer",
                                "DevOps Engineer",
                                "Product Manager",
                                "Backend Developer",
                                "Frontend Developer",
                                "Data Scientist",
                                "QA Engineer",
                              ][index]
                            }
                          </p>
                          <a
                            href="#"
                            className="text-xs text-indigo-600 hover:text-indigo-800 cursor-pointer"
                          >
                            View Profile
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
                      View All Team Members
                      <i className="fas fa-chevron-right ml-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Team Skills Matrix
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Collective expertise by domain.
                </p>
              </div>
              <div className="border-t border-gray-200">
                <div className="px-4 py-5 sm:p-6">
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
                            Expert Level
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Advanced Level
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Intermediate Level
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Frontend Development
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            12 team members
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            8 team members
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            5 team members
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Backend Development
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            10 team members
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            7 team members
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            4 team members
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            DevOps & Cloud
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            8 team members
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            6 team members
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            3 team members
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            UI/UX Design
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            6 team members
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            5 team members
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            2 team members
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Data Science & AI
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            5 team members
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            4 team members
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            3 team members
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Engagement Tab */}
        {activeTab === "engagement" && (
          <div className="space-y-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Engagement Options
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Ways to collaborate with us.
                </p>
              </div>
              <div className="border-t border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                        <i className="fas fa-project-diagram text-indigo-600 text-xl"></i>
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        Project-Based
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Engage us for a specific project with defined scope,
                        timeline, and deliverables. Ideal for one-time
                        development needs.
                      </p>
                      <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
                        <i className="fas fa-handshake mr-2"></i>
                        Start a Project
                      </button>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                        <i className="fas fa-users-cog text-indigo-600 text-xl"></i>
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        Dedicated Team
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Hire a dedicated team of our professionals who work
                        exclusively on your projects. Flexible scaling based on
                        your needs.
                      </p>
                      <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
                        <i className="fas fa-user-plus mr-2"></i>
                        Build Your Team
                      </button>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                        <i className="fas fa-hands-helping text-indigo-600 text-xl"></i>
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        Consulting Services
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Get expert advice and strategic guidance for your
                        technical challenges, architecture decisions, or digital
                        transformation.
                      </p>
                      <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
                        <i className="fas fa-comments mr-2"></i>
                        Book Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Available RFPs
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Request for proposals we're currently accepting.
                </p>
              </div>
              <div className="border-t border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h4 className="text-base font-medium text-gray-900">
                            E-commerce Platform Modernization
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Looking for partners to upgrade our legacy
                            e-commerce platform to a modern, scalable
                            architecture.
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                              E-commerce
                            </span>
                            <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                              Microservices
                            </span>
                            <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                              Cloud Migration
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Open for Proposals
                          </span>
                          <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
                            Submit Proposal
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h4 className="text-base font-medium text-gray-900">
                            Healthcare Patient Portal
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Seeking development partners for a secure,
                            HIPAA-compliant patient portal with telemedicine
                            capabilities.
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                              Healthcare
                            </span>
                            <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                              Security
                            </span>
                            <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                              Telemedicine
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Open for Proposals
                          </span>
                          <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
                            Submit Proposal
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h4 className="text-base font-medium text-gray-900">
                            AI-Powered Analytics Dashboard
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Looking for experts to develop an AI-powered
                            analytics dashboard for business intelligence and
                            predictive insights.
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                              AI/ML
                            </span>
                            <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                              Data Visualization
                            </span>
                            <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                              Business Intelligence
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Closing Soon
                          </span>
                          <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
                            Submit Proposal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
                      View All RFPs
                      <i className="fas fa-chevron-right ml-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Submit a Proposal
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Interested in working with us? Send us your proposal.
                </p>
              </div>
              <div className="border-t border-gray-200">
                <div className="px-4 py-5 sm:p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Contact Person
                        </label>
                        <input
                          type="text"
                          name="contact"
                          id="contact"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="project-type"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Project Type
                      </label>
                      <div className="mt-1 relative">
                        <button
                          type="button"
                          className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <span className="block truncate">
                            Select project type
                          </span>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <i className="fas fa-chevron-down text-gray-400"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Estimated Budget
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          name="budget"
                          id="budget"
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                          placeholder="0.00"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">USD</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Project Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Attachments
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <i className="fas fa-upload mx-auto h-12 w-12 text-gray-400"></i>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Upload files</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PDF, DOC, DOCX, PPT up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="mr-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        Submit Proposal
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="https://readdy.ai/home/ee35e69e-e50c-4464-aec7-b27b64806814/66a534c7-3879-4632-a32f-77440407d0d8"
                data-readdy="true"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Companies
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Talents
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                RFPs
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Blog
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2025 On Softwares. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy Policy
            </a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Terms of Service
            </a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Cookie Policy
            </a>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <i className="fab fa-cc-visa text-gray-400 text-2xl"></i>
            <i className="fab fa-cc-mastercard text-gray-400 text-2xl"></i>
            <i className="fab fa-cc-paypal text-gray-400 text-2xl"></i>
            <i className="fab fa-cc-apple-pay text-gray-400 text-2xl"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default CompanyProfilePage;

