// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const CompaniesPage = () => {
 
  const [activeFilter, setActiveFilter] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("All Industries");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [sizeFilter, setSizeFilter] = useState("All Sizes");
  const [expertiseFilter, setExpertiseFilter] = useState("All Expertise");
  const [sortBy, setSortBy] = useState("Rating");
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
  const [isExpertiseDropdownOpen, setIsExpertiseDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isItemsPerPageDropdownOpen, setIsItemsPerPageDropdownOpen] =
    useState(false);

  const toggleDropdown = (dropdown) => {
    switch (dropdown) {
      case "industry":
        setIsIndustryDropdownOpen(!isIndustryDropdownOpen);
        setIsLocationDropdownOpen(false);
        setIsSizeDropdownOpen(false);
        setIsExpertiseDropdownOpen(false);
        setIsSortDropdownOpen(false);
        setIsItemsPerPageDropdownOpen(false);
        break;
      case "location":
        setIsLocationDropdownOpen(!isLocationDropdownOpen);
        setIsIndustryDropdownOpen(false);
        setIsSizeDropdownOpen(false);
        setIsExpertiseDropdownOpen(false);
        setIsSortDropdownOpen(false);
        setIsItemsPerPageDropdownOpen(false);
        break;
      case "size":
        setIsSizeDropdownOpen(!isSizeDropdownOpen);
        setIsIndustryDropdownOpen(false);
        setIsLocationDropdownOpen(false);
        setIsExpertiseDropdownOpen(false);
        setIsSortDropdownOpen(false);
        setIsItemsPerPageDropdownOpen(false);
        break;
      case "expertise":
        setIsExpertiseDropdownOpen(!isExpertiseDropdownOpen);
        setIsIndustryDropdownOpen(false);
        setIsLocationDropdownOpen(false);
        setIsSizeDropdownOpen(false);
        setIsSortDropdownOpen(false);
        setIsItemsPerPageDropdownOpen(false);
        break;
      case "sort":
        setIsSortDropdownOpen(!isSortDropdownOpen);
        setIsIndustryDropdownOpen(false);
        setIsLocationDropdownOpen(false);
        setIsSizeDropdownOpen(false);
        setIsExpertiseDropdownOpen(false);
        setIsItemsPerPageDropdownOpen(false);
        break;
      case "itemsPerPage":
        setIsItemsPerPageDropdownOpen(!isItemsPerPageDropdownOpen);
        setIsIndustryDropdownOpen(false);
        setIsLocationDropdownOpen(false);
        setIsSizeDropdownOpen(false);
        setIsExpertiseDropdownOpen(false);
        setIsSortDropdownOpen(false);
        break;
      default:
        break;
    }
  };

  const closeAllDropdowns = () => {
    setIsIndustryDropdownOpen(false);
    setIsLocationDropdownOpen(false);
    setIsSizeDropdownOpen(false);
    setIsExpertiseDropdownOpen(false);
    setIsSortDropdownOpen(false);
    setIsItemsPerPageDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      closeAllDropdowns();
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (e, dropdown) => {
    e.stopPropagation();
    toggleDropdown(dropdown);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setIndustryFilter("All Industries");
    setLocationFilter("All Locations");
    setSizeFilter("All Sizes");
    setExpertiseFilter("All Expertise");
    setSortBy("Rating");
    setActiveFilter(null);
  };

  const companies = [
    {
      id: 1,
      name: "Innovate Tech Solutions",
      logo: "https://public.readdy.ai/ai/img_res/783055e4707321deba4f941b587aaae7.jpg",
      verified: true,
      rating: 4.8,
      location: "San Francisco, CA",
      expertise: ["Web Development", "Mobile Apps", "Cloud Services"],
      teamSize: 48,
      industry: "Technology",
    },
    {
      id: 2,
      name: "Digital Frontier",
      logo: "https://public.readdy.ai/ai/img_res/8f9e5c3a7b6d2e1f0a4c8b7d6e5f3a2c.jpg",
      verified: true,
      rating: 4.7,
      location: "New York, NY",
      expertise: ["AI Development", "Data Science", "Enterprise Solutions"],
      teamSize: 65,
      industry: "Technology",
    },
    {
      id: 3,
      name: "HealthTech Innovations",
      logo: "https://public.readdy.ai/ai/img_res/3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b.jpg",
      verified: true,
      rating: 4.6,
      location: "Boston, MA",
      expertise: ["Healthcare IT", "Telemedicine", "Medical Software"],
      teamSize: 42,
      industry: "Healthcare",
    },
    {
      id: 4,
      name: "FinServe Solutions",
      logo: "https://public.readdy.ai/ai/img_res/9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d.jpg",
      verified: true,
      rating: 4.5,
      location: "Chicago, IL",
      expertise: ["Financial Software", "Blockchain", "Secure Payments"],
      teamSize: 37,
      industry: "Finance",
    },
    {
      id: 5,
      name: "EduTech Pioneers",
      logo: "https://public.readdy.ai/ai/img_res/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d.jpg",
      verified: false,
      rating: 4.3,
      location: "Austin, TX",
      expertise: ["EdTech", "Learning Management", "Educational Apps"],
      teamSize: 29,
      industry: "Education",
    },
    {
      id: 6,
      name: "Retail Revolution",
      logo: "https://public.readdy.ai/ai/img_res/7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f.jpg",
      verified: true,
      rating: 4.4,
      location: "Seattle, WA",
      expertise: ["E-commerce", "Retail Software", "Inventory Management"],
      teamSize: 33,
      industry: "Retail",
    },
    {
      id: 7,
      name: "Cloud Dynamics",
      logo: "https://public.readdy.ai/ai/img_res/5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b.jpg",
      verified: true,
      rating: 4.9,
      location: "Denver, CO",
      expertise: ["Cloud Infrastructure", "DevOps", "Serverless Architecture"],
      teamSize: 51,
      industry: "Technology",
    },
    {
      id: 8,
      name: "Mobile Masters",
      logo: "https://public.readdy.ai/ai/img_res/3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f.jpg",
      verified: false,
      rating: 4.2,
      location: "Los Angeles, CA",
      expertise: ["Mobile Development", "UI/UX Design", "App Analytics"],
      teamSize: 24,
      industry: "Technology",
    },
    {
      id: 9,
      name: "Security Shield",
      logo: "https://public.readdy.ai/ai/img_res/9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f.jpg",
      verified: true,
      rating: 4.7,
      location: "Washington, DC",
      expertise: ["Cybersecurity", "Threat Detection", "Compliance"],
      teamSize: 39,
      industry: "Security",
    },
    {
      id: 10,
      name: "Green Energy Tech",
      logo: "https://public.readdy.ai/ai/img_res/1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b.jpg",
      verified: true,
      rating: 4.5,
      location: "Portland, OR",
      expertise: ["Energy Management", "Sustainability", "Smart Grid"],
      teamSize: 27,
      industry: "Energy",
    },
    {
      id: 11,
      name: "Travel Tech Ventures",
      logo: "https://public.readdy.ai/ai/img_res/7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b.jpg",
      verified: false,
      rating: 4.1,
      location: "Miami, FL",
      expertise: ["Travel Booking", "Itinerary Management", "Travel Analytics"],
      teamSize: 22,
      industry: "Travel",
    },
    {
      id: 12,
      name: "Manufacturing Modernizers",
      logo: "https://public.readdy.ai/ai/img_res/5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d.jpg",
      verified: true,
      rating: 4.4,
      location: "Detroit, MI",
      expertise: ["Industrial IoT", "Supply Chain", "Automation"],
      teamSize: 45,
      industry: "Manufacturing",
    },
  ];

  // Filter and sort companies
  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = company.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesIndustry =
      industryFilter === "All Industries" ||
      company.industry === industryFilter;
    const matchesLocation =
      locationFilter === "All Locations" ||
      company.location.includes(locationFilter);
    const matchesSize =
      sizeFilter === "All Sizes" ||
      matchesSizeFilter(company.teamSize, sizeFilter);
    const matchesExpertise =
      expertiseFilter === "All Expertise" ||
      company.expertise.some((exp) => exp.includes(expertiseFilter));

    return (
      matchesSearch &&
      matchesIndustry &&
      matchesLocation &&
      matchesSize &&
      matchesExpertise
    );
  });

  const sortedCompanies = [...filteredCompanies].sort((a, b) => {
    if (sortBy === "Rating") {
      return b.rating - a.rating;
    } else if (sortBy === "Team Size") {
      return b.teamSize - a.teamSize;
    } else if (sortBy === "Name (A-Z)") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "Name (Z-A)") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  function matchesSizeFilter(teamSize, filter) {
    switch (filter) {
      case "Small (1-20)":
        return teamSize <= 20;
      case "Medium (21-50)":
        return teamSize > 20 && teamSize <= 50;
      case "Large (51-100)":
        return teamSize > 50 && teamSize <= 100;
      case "Enterprise (100+)":
        return teamSize > 100;
      default:
        return true;
    }
  }

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCompanies = sortedCompanies.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(sortedCompanies.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <i key={i} className="fas fa-star-half-alt text-yellow-400"></i>,
        );
      } else {
        stars.push(<i key={i} className="far fa-star text-yellow-400"></i>);
      }
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pt-20">
       {/* Navigation */}
     

      {/* Main Content */}
      <div className="pt-6 pb-12">
        {/* Page Header */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Software Development Companies
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Find and connect with top software development companies worldwide
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search companies..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md ${viewMode === "grid" ? "bg-indigo-100 text-indigo-600" : "text-gray-400 hover:text-gray-500"} cursor-pointer`}
                >
                  <i className="fas fa-th-large"></i>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md ${viewMode === "list" ? "bg-indigo-100 text-indigo-600" : "text-gray-400 hover:text-gray-500"} cursor-pointer`}
                >
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {/* Industry Filter */}
              <div
                className="relative inline-block text-left"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                    onClick={(e) => handleDropdownClick(e, "industry")}
                  >
                    <span>{industryFilter}</span>
                    <i className="fas fa-chevron-down ml-2"></i>
                  </button>
                </div>
                {isIndustryDropdownOpen && (
                  <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      {[
                        "All Industries",
                        "Technology",
                        "Healthcare",
                        "Finance",
                        "Education",
                        "Retail",
                        "Security",
                        "Energy",
                        "Travel",
                        "Manufacturing",
                      ].map((industry) => (
                        <button
                          key={industry}
                          className={`${
                            industry === industryFilter
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 cursor-pointer`}
                          onClick={() => {
                            setIndustryFilter(industry);
                            setIsIndustryDropdownOpen(false);
                            if (industry !== "All Industries")
                              setActiveFilter("industry");
                          }}
                        >
                          {industry}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Location Filter */}
              <div
                className="relative inline-block text-left"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                    onClick={(e) => handleDropdownClick(e, "location")}
                  >
                    <span>{locationFilter}</span>
                    <i className="fas fa-chevron-down ml-2"></i>
                  </button>
                </div>
                {isLocationDropdownOpen && (
                  <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      {[
                        "All Locations",
                        "San Francisco, CA",
                        "New York, NY",
                        "Boston, MA",
                        "Chicago, IL",
                        "Austin, TX",
                        "Seattle, WA",
                        "Denver, CO",
                        "Los Angeles, CA",
                        "Washington, DC",
                      ].map((location) => (
                        <button
                          key={location}
                          className={`${
                            location === locationFilter
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 cursor-pointer`}
                          onClick={() => {
                            setLocationFilter(location);
                            setIsLocationDropdownOpen(false);
                            if (location !== "All Locations")
                              setActiveFilter("location");
                          }}
                        >
                          {location}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Company Size Filter */}
              <div
                className="relative inline-block text-left"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                    onClick={(e) => handleDropdownClick(e, "size")}
                  >
                    <span>{sizeFilter}</span>
                    <i className="fas fa-chevron-down ml-2"></i>
                  </button>
                </div>
                {isSizeDropdownOpen && (
                  <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      {[
                        "All Sizes",
                        "Small (1-20)",
                        "Medium (21-50)",
                        "Large (51-100)",
                        "Enterprise (100+)",
                      ].map((size) => (
                        <button
                          key={size}
                          className={`${
                            size === sizeFilter
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 cursor-pointer`}
                          onClick={() => {
                            setSizeFilter(size);
                            setIsSizeDropdownOpen(false);
                            if (size !== "All Sizes") setActiveFilter("size");
                          }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Expertise Filter */}
              <div
                className="relative inline-block text-left"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                    onClick={(e) => handleDropdownClick(e, "expertise")}
                  >
                    <span>{expertiseFilter}</span>
                    <i className="fas fa-chevron-down ml-2"></i>
                  </button>
                </div>
                {isExpertiseDropdownOpen && (
                  <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      {[
                        "All Expertise",
                        "Web Development",
                        "Mobile Apps",
                        "Cloud Services",
                        "AI Development",
                        "Data Science",
                        "UI/UX Design",
                        "DevOps",
                        "Cybersecurity",
                        "Blockchain",
                      ].map((expertise) => (
                        <button
                          key={expertise}
                          className={`${
                            expertise === expertiseFilter
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 cursor-pointer`}
                          onClick={() => {
                            setExpertiseFilter(expertise);
                            setIsExpertiseDropdownOpen(false);
                            if (expertise !== "All Expertise")
                              setActiveFilter("expertise");
                          }}
                        >
                          {expertise}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sort By */}
              <div
                className="relative inline-block text-left"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                    onClick={(e) => handleDropdownClick(e, "sort")}
                  >
                    <span>Sort: {sortBy}</span>
                    <i className="fas fa-chevron-down ml-2"></i>
                  </button>
                </div>
                {isSortDropdownOpen && (
                  <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      {["Rating", "Team Size", "Name (A-Z)", "Name (Z-A)"].map(
                        (option) => (
                          <button
                            key={option}
                            className={`${
                              option === sortBy
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 cursor-pointer`}
                            onClick={() => {
                              setSortBy(option);
                              setIsSortDropdownOpen(false);
                            }}
                          >
                            {option}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Clear Filters Button */}
              {(activeFilter || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                >
                  <i className="fas fa-times-circle mr-1"></i>
                  Clear Filters
                </button>
              )}
            </div>

            {/* Active Filters */}
            {activeFilter && (
              <div className="mt-4 flex flex-wrap gap-2">
                {industryFilter !== "All Industries" && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    Industry: {industryFilter}
                    <button
                      onClick={() => {
                        setIndustryFilter("All Industries");
                        if (
                          locationFilter === "All Locations" &&
                          sizeFilter === "All Sizes" &&
                          expertiseFilter === "All Expertise"
                        ) {
                          setActiveFilter(null);
                        }
                      }}
                      className="ml-1 text-indigo-500 hover:text-indigo-800 cursor-pointer"
                    >
                      <i className="fas fa-times-circle"></i>
                    </button>
                  </span>
                )}
                {locationFilter !== "All Locations" && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    Location: {locationFilter}
                    <button
                      onClick={() => {
                        setLocationFilter("All Locations");
                        if (
                          industryFilter === "All Industries" &&
                          sizeFilter === "All Sizes" &&
                          expertiseFilter === "All Expertise"
                        ) {
                          setActiveFilter(null);
                        }
                      }}
                      className="ml-1 text-indigo-500 hover:text-indigo-800 cursor-pointer"
                    >
                      <i className="fas fa-times-circle"></i>
                    </button>
                  </span>
                )}
                {sizeFilter !== "All Sizes" && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    Size: {sizeFilter}
                    <button
                      onClick={() => {
                        setSizeFilter("All Sizes");
                        if (
                          industryFilter === "All Industries" &&
                          locationFilter === "All Locations" &&
                          expertiseFilter === "All Expertise"
                        ) {
                          setActiveFilter(null);
                        }
                      }}
                      className="ml-1 text-indigo-500 hover:text-indigo-800 cursor-pointer"
                    >
                      <i className="fas fa-times-circle"></i>
                    </button>
                  </span>
                )}
                {expertiseFilter !== "All Expertise" && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    Expertise: {expertiseFilter}
                    <button
                      onClick={() => {
                        setExpertiseFilter("All Expertise");
                        if (
                          industryFilter === "All Industries" &&
                          locationFilter === "All Locations" &&
                          sizeFilter === "All Sizes"
                        ) {
                          setActiveFilter(null);
                        }
                      }}
                      className="ml-1 text-indigo-500 hover:text-indigo-800 cursor-pointer"
                    >
                      <i className="fas fa-times-circle"></i>
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Companies Grid/List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {currentCompanies.length === 0 ? (
            <div className="bg-white shadow rounded-lg p-8 text-center">
              <i className="fas fa-search text-gray-400 text-5xl mb-4"></i>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No companies found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentCompanies.map((company) => (
                <a
                  key={company.id}
                  href="https://readdy.ai/home/ee35e69e-e50c-4464-aec7-b27b64806814/143241cd-0762-4e25-b351-c6c22c79d49e"
                  data-readdy="true"
                  className="bg-white shadow rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-shrink-0">
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="h-16 w-16 rounded-md object-cover"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-gray-500 transition-colors duration-200 cursor-pointer">
                          <i className="far fa-bookmark"></i>
                        </button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 flex items-center">
                        {company.name}
                        {company.verified && (
                          <span
                            className="ml-2 text-blue-500"
                            title="Verified Company"
                          >
                            <i className="fas fa-check-circle"></i>
                          </span>
                        )}
                      </h3>
                      <div className="mt-1 flex items-center">
                        <div className="flex items-center">
                          {renderStars(company.rating)}
                        </div>
                        <span className="ml-2 text-sm text-gray-500">
                          {company.rating.toFixed(1)}
                        </span>
                      </div>
                      <div className="mt-2 text-sm text-gray-500 flex items-center">
                        <i className="fas fa-map-marker-alt mr-1"></i>
                        {company.location}
                      </div>
                      <div className="mt-2 text-sm text-gray-500 flex items-center">
                        <i className="fas fa-users mr-1"></i>
                        {company.teamSize} employees
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {company.expertise
                          .slice(0, 3)
                          .map((expertise, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full"
                            >
                              {expertise}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                <Link to={`/company-profile/${company.id}`}>
                  <div className="px-6 py-3 bg-gray-50 flex justify-between items-center border-t border-gray-100">
                <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-800 transition-colors duration-200">
                      View Profile
                    </span>
                    <i className="fas fa-arrow-right text-indigo-600 group-hover:text-indigo-800 transition-colors duration-200"></i>
                  </div>
                  </Link>
                </a>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {currentCompanies.map((company) => (
                <a
                  key={company.id}
                  href="https://readdy.ai/home/ee35e69e-e50c-4464-aec7-b27b64806814/143241cd-0762-4e25-b351-c6c22c79d49e"
                  data-readdy="true"
                  className="block bg-white shadow rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer group"
                >
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="h-16 w-16 rounded-md object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 flex items-center">
                            {company.name}
                            {company.verified && (
                              <span
                                className="ml-2 text-blue-500"
                                title="Verified Company"
                              >
                                <i className="fas fa-check-circle"></i>
                              </span>
                            )}
                          </h3>
                          <div className="mt-2 sm:mt-0 flex items-center">
                            <div className="flex items-center">
                              {renderStars(company.rating)}
                            </div>
                            <span className="ml-2 text-sm text-gray-500">
                              {company.rating.toFixed(1)}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:space-x-6">
                          <div className="text-sm text-gray-500 flex items-center">
                            <i className="fas fa-map-marker-alt mr-1"></i>
                            {company.location}
                          </div>
                          <div className="mt-1 sm:mt-0 text-sm text-gray-500 flex items-center">
                            <i className="fas fa-users mr-1"></i>
                            {company.teamSize} employees
                          </div>
                          <div className="mt-1 sm:mt-0 text-sm text-gray-500 flex items-center">
                            <i className="fas fa-briefcase mr-1"></i>
                            {company.industry}
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {company.expertise.map((expertise, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full"
                            >
                              {expertise}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <button className="text-gray-400 hover:text-gray-500 transition-colors duration-200 cursor-pointer">
                          <i className="far fa-bookmark text-xl"></i>
                        </button>
                        <div className="w-full sm:w-auto">
                          <span className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm !rounded-button whitespace-nowrap cursor-pointer">
                            View Profile
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Pagination */}
          {sortedCompanies.length > 0 && (
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between bg-white p-4 shadow rounded-lg">
              <div className="flex items-center mb-4 sm:mb-0">
                <span className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
                  <span className="font-medium">
                    {Math.min(indexOfLastItem, sortedCompanies.length)}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">{sortedCompanies.length}</span>{" "}
                  results
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-500 hover:bg-gray-50 cursor-pointer"
                  } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md !rounded-button whitespace-nowrap`}
                >
                  <i className="fas fa-chevron-left mr-1"></i>
                  Previous
                </button>
                <div className="hidden md:flex">
                  {[...Array(Math.min(5, totalPages))].map((_, index) => {
                    let pageNumber;
                    if (totalPages <= 5) {
                      pageNumber = index + 1;
                    } else if (currentPage <= 3) {
                      pageNumber = index + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNumber = totalPages - 4 + index;
                    } else {
                      pageNumber = currentPage - 2 + index;
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => paginate(pageNumber)}
                        className={`${
                          currentPage === pageNumber
                            ? "bg-indigo-50 border-indigo-500 text-indigo-600"
                            : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                        } relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-500 hover:bg-gray-50 cursor-pointer"
                  } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md !rounded-button whitespace-nowrap`}
                >
                  Next
                  <i className="fas fa-chevron-right ml-1"></i>
                </button>
                <div
                  className="relative inline-block text-left"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div>
                    <button
                      type="button"
                      className="inline-flex justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                      onClick={(e) => handleDropdownClick(e, "itemsPerPage")}
                    >
                      <span>{itemsPerPage} per page</span>
                      <i className="fas fa-chevron-down ml-2"></i>
                    </button>
                  </div>
                  {isItemsPerPageDropdownOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        {[12, 24, 36, 48].map((number) => (
                          <button
                            key={number}
                            className={`${
                              number === itemsPerPage
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 cursor-pointer`}
                            onClick={() => {
                              setItemsPerPage(number);
                              setCurrentPage(1);
                              setIsItemsPerPageDropdownOpen(false);
                            }}
                          >
                            {number} per page
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-8 right-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-indigo-600 text-white rounded-full p-3 shadow-lg hover:bg-indigo-700 transition-colors duration-300 cursor-pointer"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>

   
    </div>
  );
};

export default CompaniesPage;
