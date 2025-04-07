import React, { useState } from "react";
import * as echarts from "echarts";
const SoftwareProfilePage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  React.useEffect(() => {
    // Initialize sentiment analysis chart
    const chartDom = document.getElementById("sentimentChart");
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
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
          axisLabel: {
            formatter: "{value}%",
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "category",
          data: ["Negative", "Neutral", "Positive"],
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "Sentiment",
            type: "bar",
            data: [
              { value: 12, itemStyle: { color: "#f87171" } },
              { value: 28, itemStyle: { color: "#94a3b8" } },
              { value: 60, itemStyle: { color: "#22c55e" } },
            ],
            label: {
              show: true,
              position: "right",
              formatter: "{c}%",
            },
            barWidth: 16,
            emphasis: {
              focus: "self",
            },
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
  // Trust score circle progress
  React.useEffect(() => {
    const trustScoreElement = document.getElementById("trustScoreChart");
    if (trustScoreElement && activeTab === "overview") {
      const trustChart = echarts.init(trustScoreElement);
      const trustOption = {
        animation: false,
        series: [
          {
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false,
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                color: "#4f46e5",
              },
            },
            axisLine: {
              lineStyle: {
                width: 12,
                color: [[1, "#e2e8f0"]],
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
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
              offsetCenter: [0, "0%"],
              fontSize: 24,
              fontWeight: "bold",
              formatter: "{value}%",
              color: "#4f46e5",
            },
            data: [
              {
                value: 87,
              },
            ],
          },
        ],
      };
      trustChart.setOption(trustOption);
      window.addEventListener("resize", () => {
        trustChart.resize();
      });
      return () => {
        window.removeEventListener("resize", () => {
          trustChart.resize();
        });
        trustChart.dispose();
      };
    }
  }, [activeTab]);
  const certifications = [
    {
      id: 1,
      name: "Sarah Johnson",
      type: "Advanced Developer",
      date: "March 15, 2025",
      image:
        "https://public.readdy.ai/ai/img_res/45219bea5c0dc7f7515909f5d6162d10.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      type: "Solution Architect",
      date: "February 28, 2025",
      image:
        "https://public.readdy.ai/ai/img_res/91bb6e6434ed08f9a6db839330ecf741.jpg",
    },
    {
      id: 3,
      name: "Priya Patel",
      type: "Implementation Specialist",
      date: "January 10, 2025",
      image:
        "https://public.readdy.ai/ai/img_res/e09deb7bca3b3278200e152d0e68843a.jpg",
    },
    {
      id: 4,
      name: "David Wilson",
      type: "Senior Developer",
      date: "December 5, 2024",
      image:
        "https://public.readdy.ai/ai/img_res/fe785adfb50890445bf76a1c2e6df79e.jpg",
    },
    {
      id: 5,
      name: "Emma Rodriguez",
      type: "UX Specialist",
      date: "November 22, 2024",
      image:
        "https://public.readdy.ai/ai/img_res/bc65db3260e36fbfae785bfaff2f6b72.jpg",
    },
    {
      id: 6,
      name: "James Thompson",
      type: "Integration Expert",
      date: "October 18, 2024",
      image:
        "https://public.readdy.ai/ai/img_res/432a128b12928fa5d9f096b592fd9873.jpg",
    },
  ];
  const reviews = [
    {
      id: 1,
      name: "Alex Morgan",
      company: "TechSolutions Inc.",
      rating: 5,
      date: "March 30, 2025",
      text: "This software has completely transformed our workflow. The integration capabilities are unmatched and the support team is incredibly responsive.",
      image:
        "https://public.readdy.ai/ai/img_res/73fed0c8d7522ba17484bb784ad49d8d.jpg",
    },
    {
      id: 2,
      name: "Jennifer Lee",
      company: "Global Innovations",
      rating: 4,
      date: "March 15, 2025",
      text: "Very robust platform with excellent security features. The learning curve is a bit steep, but worth the investment. Would recommend for enterprise use.",
      image:
        "https://public.readdy.ai/ai/img_res/5851962e0d3eb93a2d282aadeb0fe6e9.jpg",
    },
    {
      id: 3,
      name: "Marcus Williams",
      company: "DataDrive Analytics",
      rating: 5,
      date: "February 28, 2025",
      text: "The API documentation is comprehensive and the platform's reliability is outstanding. We've been able to scale our operations significantly since implementation.",
      image:
        "https://public.readdy.ai/ai/img_res/a08db3e80883f08d414707e74173d407.jpg",
    },
  ];
  const domains = [
    {
      id: 1,
      domain: "cloudpulse.app",
      status: "Verified",
      health: "Excellent",
      timestamp: "April 2, 2025 14:32 UTC",
    },
    {
      id: 2,
      domain: "api.cloudpulse.app",
      status: "Verified",
      health: "Good",
      timestamp: "April 2, 2025 14:32 UTC",
    },
    {
      id: 3,
      domain: "docs.cloudpulse.app",
      status: "Verified",
      health: "Excellent",
      timestamp: "April 2, 2025 14:32 UTC",
    },
    {
      id: 4,
      domain: "status.cloudpulse.app",
      status: "Verified",
      health: "Excellent",
      timestamp: "April 2, 2025 14:32 UTC",
    },
  ];
  const integrations = [
    {
      id: 1,
      name: "Salesforce",
      category: "CRM",
      status: "Connected",
      image:
        "https://public.readdy.ai/ai/img_res/e01792eee16e8ae9e37c430ae47354e7.jpg",
    },
    {
      id: 2,
      name: "Slack",
      category: "Communication",
      status: "Connected",
      image:
        "https://public.readdy.ai/ai/img_res/7633db2b5abf3ffb359402eb3bfa9cb1.jpg",
    },
    {
      id: 3,
      name: "GitHub",
      category: "Development",
      status: "Connected",
      image:
        "https://public.readdy.ai/ai/img_res/be321b66560cbd6bcdc7d2ab9beebc66.jpg",
    },
    {
      id: 4,
      name: "AWS",
      category: "Cloud Services",
      status: "Connected",
      image:
        "https://public.readdy.ai/ai/img_res/7123ad157085729169f0391d3a49f888.jpg",
    },
    {
      id: 5,
      name: "Stripe",
      category: "Payments",
      status: "Connected",
      image:
        "https://public.readdy.ai/ai/img_res/46dee349e526ed52b06b8a7b6124eb96.jpg",
    },
    {
      id: 6,
      name: "Zendesk",
      category: "Support",
      status: "Available",
      image:
        "https://public.readdy.ai/ai/img_res/39efeef0db2204318d1009f2df98c350.jpg",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 font-sans pt-18">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://public.readdy.ai/ai/img_res/1cd5702fc9f638cb4324338293aca2fe.jpg"
              alt="CloudPulse Logo"
              className="w-20 h-20 object-contain"
            />
            <div className="ml-4">
              <h1 className="text-3xl font-bold text-gray-900">CloudPulse</h1>
              <div className="flex items-center">
                <p className="text-sm text-gray-600">
                  by Nexus Technologies Inc.
                </p>
                <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                  <i className="fas fa-check-circle mr-1"></i>
                  Verified Owner
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Enterprise cloud infrastructure monitoring platform
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              Cloud Infrastructure
            </div>
            <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
              <i className="fas fa-shield-alt text-green-600 mr-1"></i>
              <span className="text-green-800 text-sm font-medium">
                Trust Score: 87%
              </span>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-sm transition duration-150 ease-in-out flex items-center whitespace-nowrap cursor-pointer !rounded-button">
              <i className="fas fa-plus-circle mr-2"></i>
              Add Your Software & Verify DNS
            </button>
          </div>
        </div>
        {/* Navigation Tabs */}
        <div className="container mx-auto px-4 border-t border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap cursor-pointer ${activeTab === "overview" ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap cursor-pointer ${activeTab === "certifications" ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
            >
              Certifications
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap cursor-pointer ${activeTab === "reviews" ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
            >
              Reviews & Ratings
            </button>
            <button
              onClick={() => setActiveTab("dns")}
              className={`px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap cursor-pointer ${activeTab === "dns" ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
            >
              DNS Validation
            </button>
            <button
              onClick={() => setActiveTab("integrations")}
              className={`px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap cursor-pointer ${activeTab === "integrations" ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
            >
              Integrations
            </button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
                  <div id="trustScoreChart" className="w-28 h-28"></div>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    Trust Score
                  </h3>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-500">Blockchain Verified</p>
                    <i
                      className="fas fa-info-circle ml-1 text-gray-400 cursor-pointer"
                      title="Score based on verified reviews, certifications, and security audits"
                    ></i>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    {certifications.length}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Certifications
                  </h3>
                  <p className="text-sm text-gray-500">
                    Verified Professionals
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    {reviews.length}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="ml-1 text-sm text-gray-600">4.7/5</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    {integrations.length}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Integrations
                  </h3>
                  <p className="text-sm text-gray-500">Compatible Tools</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  About CloudPulse
                </h3>
                <p className="text-gray-600">
                  CloudPulse is a comprehensive cloud infrastructure monitoring
                  and management platform designed for enterprise-level
                  operations. With real-time analytics, automated scaling, and
                  advanced security features, CloudPulse helps organizations
                  optimize their cloud resources while maintaining robust
                  performance and reliability.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Recent Certifications
                  </h3>
                  <button
                    onClick={() => setActiveTab("certifications")}
                    className="text-sm text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                  >
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {certifications.slice(0, 3).map((cert) => (
                    <div
                      key={cert.id}
                      className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50"
                    >
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-gray-500">{cert.type}</p>
                      </div>
                      <div className="ml-auto flex flex-col items-end">
                        <div className="flex items-center mb-1">
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-indigo-600 rounded-full"
                              style={{
                                width: `${Math.floor(Math.random() * 30) + 70}%`,
                              }}
                            ></div>
                          </div>
                          <span className="ml-2 text-xs text-gray-600">
                            Expert
                          </span>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                          <i className="fas fa-check-circle mr-1"></i>
                          Verified
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Recent Reviews
                  </h3>
                  <button
                    onClick={() => setActiveTab("reviews")}
                    className="text-sm text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                  >
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {reviews.slice(0, 2).map((review) => (
                    <div
                      key={review.id}
                      className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center mb-2">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="ml-2">
                          <h4 className="text-sm font-medium text-gray-900">
                            {review.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {review.company}
                          </p>
                        </div>
                        <div className="ml-auto flex text-yellow-400 text-sm">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`fas fa-star ${i < review.rating ? "" : "text-gray-300"}`}
                            ></i>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {review.text}
                      </p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {review.date}
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                          <i className="fas fa-check-circle mr-1"></i>
                          Verified
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Certifications Tab */}
        {activeTab === "certifications" && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Certified Professionals
              </h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search certifications..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
                <select className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <option>All Types</option>
                  <option>Developer</option>
                  <option>Architect</option>
                  <option>Specialist</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(showAllCertifications
                ? certifications
                : certifications.slice(0, 6)
              ).map((cert) => (
                <div
                  key={cert.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-3">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <h3 className="text-base font-medium text-gray-900">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-gray-600">{cert.type}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-gray-700">
                        Skill Level
                      </span>
                      <span className="text-xs text-gray-600">
                        {Math.floor(Math.random() * 30) + 70}/100
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full"
                        style={{
                          width: `${Math.floor(Math.random() * 30) + 70}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      Certified on {cert.date}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                      <i className="fas fa-check-circle mr-1"></i>
                      Blockchain Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {certifications.length > 6 && (
              <div className="mt-6 text-center">
                <button
                  onClick={() =>
                    setShowAllCertifications(!showAllCertifications)
                  }
                  className="inline-flex items-center px-4 py-2 border border-indigo-300 text-sm font-medium rounded-md text-indigo-700 bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap cursor-pointer !rounded-button"
                >
                  {showAllCertifications ? (
                    <>
                      <i className="fas fa-chevron-up mr-2"></i>
                      Show Less
                    </>
                  ) : (
                    <>
                      <i className="fas fa-chevron-down mr-2"></i>
                      View All Certifications
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}
        {/* Reviews & Ratings Tab */}
        {activeTab === "reviews" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Overall Rating
                  </h3>
                  <div className="text-5xl font-bold text-indigo-600">4.7</div>
                  <div className="flex text-yellow-400 text-2xl my-2">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <p className="text-sm text-gray-500">
                    Based on {reviews.length} reviews
                  </p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Sentiment Analysis
                  </h3>
                  <div id="sentimentChart" className="w-full h-32"></div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p>
                      Based on blockchain-verified reviews and natural language
                      processing analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Customer Reviews
                </h2>
                <div className="flex space-x-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search reviews..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    />
                    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                  <select className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Most Recent</option>
                    <option>Highest Rated</option>
                    <option>Lowest Rated</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-base font-medium text-gray-900">
                              {review.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {review.company}
                            </p>
                          </div>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`fas fa-star ${i < review.rating ? "" : "text-gray-300"}`}
                              ></i>
                            ))}
                          </div>
                        </div>
                        <p className="mt-2 text-gray-700">{review.text}</p>
                        <div className="mt-3 flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                            <i className="fas fa-check-circle mr-1"></i>
                            Blockchain Verified
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <button className="inline-flex items-center px-4 py-2 border border-indigo-300 text-sm font-medium rounded-md text-indigo-700 bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap cursor-pointer !rounded-button">
                  <i className="fas fa-plus mr-2"></i>
                  Load More Reviews
                </button>
              </div>
            </div>
          </div>
        )}
        {/* DNS Validation Tab */}
        {activeTab === "dns" && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  DNS Ownership Validation
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Verified domains and subdomains attached to CloudPulse
                </p>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-sm transition duration-150 ease-in-out flex items-center whitespace-nowrap cursor-pointer !rounded-button">
                <i className="fas fa-plus-circle mr-2"></i>
                Add New Domain
              </button>
            </div>
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
                      Health
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Verification Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {domains.map((domain) => (
                    <tr key={domain.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <i className="fas fa-globe text-indigo-500 mr-2"></i>
                          <span className="text-sm font-medium text-gray-900">
                            {domain.domain}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          <i className="fas fa-check-circle mr-1 mt-0.5"></i>
                          {domain.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            domain.health === "Excellent"
                              ? "bg-green-100 text-green-800"
                              : domain.health === "Good"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {domain.health === "Excellent" && (
                            <i className="fas fa-check-circle mr-1 mt-0.5"></i>
                          )}
                          {domain.health === "Good" && (
                            <i className="fas fa-exclamation-circle mr-1 mt-0.5"></i>
                          )}
                          {domain.health === "Poor" && (
                            <i className="fas fa-times-circle mr-1 mt-0.5"></i>
                          )}
                          {domain.health}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {domain.timestamp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-3 cursor-pointer">
                          <i className="fas fa-copy"></i>
                        </button>
                        <button className="text-indigo-600 hover:text-indigo-900 mr-3 cursor-pointer">
                          <i className="fas fa-eye"></i>
                        </button>
                        <button className="text-red-600 hover:text-red-900 cursor-pointer">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                How DNS Verification Works
              </h3>
              <p className="text-sm text-gray-600">
                DNS verification establishes ownership of your domains by adding
                specific TXT records to your DNS configuration. This process
                creates a tamper-proof blockchain record linking your software
                to your verified domains, enhancing trust and security for your
                users.
              </p>
              <a
                href="#"
                className="mt-2 inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
              >
                Learn more about DNS verification{" "}
                <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>
        )}
        {/* Integrations Tab */}
        {activeTab === "integrations" && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Compatible Tools & Integrations
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  APIs and third-party services linked via DNS verification
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search integrations..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
                <select className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <option>All Categories</option>
                  <option>CRM</option>
                  <option>Communication</option>
                  <option>Development</option>
                  <option>Cloud Services</option>
                  <option>Payments</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {integrations.map((integration) => (
                <div
                  key={integration.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center">
                    <img
                      src={integration.image}
                      alt={integration.name}
                      className="w-12 h-12 rounded-lg object-contain"
                    />
                    <div className="ml-3">
                      <h3 className="text-base font-medium text-gray-900">
                        {integration.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {integration.category}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked={integration.status === "Connected"}
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        integration.status === "Connected"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {integration.status === "Connected" ? (
                        <>
                          <i className="fas fa-link mr-1"></i>
                          Connected
                        </>
                      ) : (
                        <>
                          <i className="fas fa-plug mr-1"></i>
                          Available
                        </>
                      )}
                    </span>
                    <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer">
                      Configure
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <button className="inline-flex items-center px-4 py-2 border border-indigo-300 text-sm font-medium rounded-md text-indigo-700 bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap cursor-pointer !rounded-button">
                <i className="fas fa-plus mr-2"></i>
                Explore More Integrations
              </button>
            </div>
            <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Integration Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div className="flex items-start">
                  <i className="fas fa-bolt text-indigo-500 mt-1"></i>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">
                      Streamlined Workflow
                    </h4>
                    <p className="text-xs text-gray-600">
                      Automate processes across multiple platforms
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-shield-alt text-indigo-500 mt-1"></i>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">
                      Secure Connections
                    </h4>
                    <p className="text-xs text-gray-600">
                      All integrations use encrypted data transfer
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-chart-line text-indigo-500 mt-1"></i>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">
                      Enhanced Analytics
                    </h4>
                    <p className="text-xs text-gray-600">
                      Consolidated data from multiple sources
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
export default SoftwareProfilePage;
