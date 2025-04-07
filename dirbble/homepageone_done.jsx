// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import * as echarts from "echarts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const App: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://public.readdy.ai/ai/img_res/dc16fc5e73f93a5a2e1aa8ec96eb369f.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-700">
                TrustEcosystem
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-800 hover:text-blue-700 cursor-pointer whitespace-nowrap"
              >
                Features
              </a>
              <a
                href="#process"
                className="text-gray-800 hover:text-blue-700 cursor-pointer whitespace-nowrap"
              >
                How It Works
              </a>
              <a
                href="#marketplace"
                className="text-gray-800 hover:text-blue-700 cursor-pointer whitespace-nowrap"
              >
                Marketplace
              </a>
              <a
                href="#security"
                className="text-gray-800 hover:text-blue-700 cursor-pointer whitespace-nowrap"
              >
                Security
              </a>
              <button className="bg-white text-blue-700 px-4 py-2 rounded-lg shadow-sm border border-blue-200 hover:bg-blue-50 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                Sign In
              </button>
            </div>
            <div className="md:hidden">
              <button className="text-gray-800 cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </nav>

          <div className="py-20 md:py-28 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Trusted Ecosystem
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-700">
              Verify. Certify. Hire. Grow. Blockchain & DNS Trust.
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Join thousands of businesses and professionals in a secure,
              verified network powered by blockchain technology and AI-driven
              matching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                Get Started
              </button>
              <button className="bg-white text-blue-700 px-6 py-3 rounded-lg shadow-md border border-blue-200 hover:bg-blue-50 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                Explore
              </button>
            </div>
          </div>

          <div className="pb-12">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  <i className="fas fa-shield-alt mr-2"></i>
                  Verified by Blockchain
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  <i className="fas fa-globe mr-2"></i>
                  DNS Secured
                </div>
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  <i className="fas fa-robot mr-2"></i>
                  AI Powered
                </div>
              </div>

              <div className="flex items-center space-x-6 overflow-x-auto py-4 scrollbar-hide">
                <div className="flex items-center text-gray-600 whitespace-nowrap">
                  <i className="fas fa-users mr-2"></i>
                  <span>10,000+ Users</span>
                </div>
                <div className="flex items-center text-gray-600 whitespace-nowrap">
                  <i className="fas fa-building mr-2"></i>
                  <span>500+ Companies</span>
                </div>
                <div className="flex items-center text-gray-600 whitespace-nowrap">
                  <i className="fas fa-certificate mr-2"></i>
                  <span>5,000+ Certifications</span>
                </div>
              </div>

              <div className="flex items-center space-x-8 overflow-x-auto py-2 scrollbar-hide">
                <div className="text-gray-500 flex items-center">
                  <i className="fab fa-google text-xl"></i>
                  <span className="ml-2 font-medium">Google</span>
                </div>
                <div className="text-gray-500 flex items-center">
                  <i className="fab fa-microsoft text-xl"></i>
                  <span className="ml-2 font-medium">Microsoft</span>
                </div>
                <div className="text-gray-500 flex items-center">
                  <i className="fab fa-amazon text-xl"></i>
                  <span className="ml-2 font-medium">Amazon</span>
                </div>
                <div className="text-gray-500 flex items-center">
                  <i className="fab fa-apple text-xl"></i>
                  <span className="ml-2 font-medium">Apple</span>
                </div>
                <div className="text-gray-500 flex items-center">
                  <i className="fab fa-salesforce text-xl"></i>
                  <span className="ml-2 font-medium">Salesforce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our unique ecosystem combines blockchain technology, AI, and
              industry expertise to create a trusted network for businesses and
              professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-check-circle text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Software Verification</h3>
              <p className="text-gray-600 mb-6">
                Verify software authenticity and integrity through our
                blockchain-based verification system, ensuring security and
                trust.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center cursor-pointer"
              >
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-certificate text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Talent Certifications (NFT)
              </h3>
              <p className="text-gray-600 mb-6">
                Issue and verify professional certifications as NFTs, creating
                immutable proof of skills and qualifications.
              </p>
              <a
                href="#"
                className="text-purple-600 font-medium flex items-center cursor-pointer"
              >
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-robot text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Job Matching</h3>
              <p className="text-gray-600 mb-6">
                Our AI-powered matching system connects verified talent with the
                right opportunities based on skills, experience, and
                preferences.
              </p>
              <a
                href="#"
                className="text-green-600 font-medium flex items-center cursor-pointer"
              >
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-users-cog text-yellow-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Agency Skill Inheritance
              </h3>
              <p className="text-gray-600 mb-6">
                Agencies can inherit and showcase the verified skills of their
                talent pool, building trust and credibility with clients.
              </p>
              <a
                href="#"
                className="text-yellow-600 font-medium flex items-center cursor-pointer"
              >
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">SEO Marketplace</h3>
              <p className="text-gray-600 mb-6">
                Connect with verified SEO professionals and agencies to improve
                your online visibility and organic traffic.
              </p>
              <a
                href="#"
                className="text-red-600 font-medium flex items-center cursor-pointer"
              >
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-link text-indigo-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Contracts</h3>
              <p className="text-gray-600 mb-6">
                Secure your business relationships with automated, transparent,
                and enforceable blockchain-based smart contracts.
              </p>
              <a
                href="#"
                className="text-indigo-600 font-medium flex items-center cursor-pointer"
              >
                Learn more <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
              Discover How
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes it easy to join the ecosystem,
              verify credentials, find talent, and secure payments.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Sign Up</h3>
                <p className="text-gray-600 text-center">
                  Create your account and complete your profile with your
                  professional information.
                </p>
                <div className="mt-6 flex justify-center">
                  <i className="fas fa-user-plus text-blue-600 text-3xl"></i>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  Verify & Certify
                </h3>
                <p className="text-gray-600 text-center">
                  Verify your credentials and obtain blockchain-based
                  certifications for your skills.
                </p>
                <div className="mt-6 flex justify-center">
                  <i className="fas fa-certificate text-blue-600 text-3xl"></i>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  Find Talent
                </h3>
                <p className="text-gray-600 text-center">
                  Use our AI-powered matching system to find the perfect talent
                  for your projects.
                </p>
                <div className="mt-6 flex justify-center">
                  <i className="fas fa-search text-blue-600 text-3xl"></i>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  Secure Payments
                </h3>
                <p className="text-gray-600 text-center">
                  Use smart contracts for secure, transparent, and automated
                  payment processing.
                </p>
                <div className="mt-6 flex justify-center">
                  <i className="fas fa-lock text-blue-600 text-3xl"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
              Start Journey
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from businesses and professionals who have transformed their
              hiring and growth with our ecosystem.
            </p>
          </div>

          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-md p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="w-full md:w-1/3">
                  <img
                    src="https://public.readdy.ai/ai/img_res/1054027aab62b8880a37da61a671fc8b.jpg"
                    alt="TechSoft"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold">TechSoft Case Study</h3>
                    <div className="ml-4 flex">
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    "By leveraging the AI-powered matching system, we reduced
                    our hiring time by 60%. The verified talent pool gave us
                    confidence in our hiring decisions, and the smart contracts
                    simplified our payment process."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img
                        src="https://public.readdy.ai/ai/img_res/f3a1a6698b70ccc9a7ff3bce35e6096e.jpg"
                        alt="Sarah Johnson"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">Sarah Johnson</p>
                      <p className="text-gray-600 text-sm">CTO, TechSoft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-700 text-white rounded-xl shadow-md p-8 text-center">
              <div className="text-4xl font-bold mb-2">96%</div>
              <p className="text-xl">Trust Rating</p>
              <p className="mt-4 text-blue-100">
                Based on verified reviews and blockchain-secured ratings
              </p>
            </div>

            <div className="bg-blue-700 text-white rounded-xl shadow-md p-8 text-center">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <p className="text-xl">Certified Professionals</p>
              <p className="mt-4 text-blue-100">
                Verified skills and credentials on our blockchain network
              </p>
            </div>

            <div className="bg-blue-700 text-white rounded-xl shadow-md p-8 text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <p className="text-xl">Faster Hiring</p>
              <p className="mt-4 text-blue-100">
                Average reduction in time-to-hire with our AI matching
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
              Read Success Stories
            </button>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section id="marketplace" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Marketplace Preview</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our growing marketplace of verified software, talent, and
              agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://public.readdy.ai/ai/img_res/6e7dc04a9500fa7f5b1e750f06965b99.jpg"
                  alt="Analytics Software"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Verified
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">Software</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  DataInsight Analytics
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced analytics platform with AI-powered insights and
                  visualization tools.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-700">$199/mo</span>
                  <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://public.readdy.ai/ai/img_res/9bfebd9f633b6b76c821934301fe222d.jpg"
                  alt="Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    NFT Certified
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">Talent</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Jessica Chen</h3>
                <p className="text-gray-600 mb-4">
                  Senior Full-Stack Developer with 8+ years of experience in
                  React, Node.js, and AWS.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-700">$85/hr</span>
                  <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                    Hire Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://public.readdy.ai/ai/img_res/778193663b1e83bbd6f24a1f625cc01f.jpg"
                  alt="Digital Agency"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                    Verified
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">Agency</span>
                </div>
                <h3 className="text-xl font-bold mb-2">NexGen Digital</h3>
                <p className="text-gray-600 mb-4">
                  Full-service digital agency specializing in web development,
                  SEO, and digital marketing.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star-half-alt text-yellow-400"></i>
                    <span className="ml-1 text-gray-600 text-sm">4.8</span>
                  </div>
                  <button className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg hover:bg-yellow-200 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
              Browse Marketplace
            </button>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section id="security" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Security & Trust</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform is built on a foundation of security, transparency,
              and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-globe text-blue-600 text-2xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">DNS Listings</h3>
                <p className="text-gray-600">
                  Our DNS verification system ensures that all businesses and
                  professionals on our platform are legitimate and trustworthy.
                  We verify domain ownership and business credentials to prevent
                  fraud.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-certificate text-purple-600 text-2xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Blockchain Certifications
                </h3>
                <p className="text-gray-600">
                  All certifications on our platform are stored on the
                  blockchain, creating an immutable record of skills and
                  qualifications that cannot be tampered with or falsified.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-file-contract text-green-600 text-2xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Smart Contracts</h3>
                <p className="text-gray-600">
                  Our blockchain-based smart contracts automate payment
                  processes, ensuring that funds are only released when
                  predefined conditions are met, protecting both clients and
                  service providers.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-shield-alt text-red-600 text-2xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">AI Fraud Detection</h3>
                <p className="text-gray-600">
                  Our advanced AI systems continuously monitor the platform for
                  suspicious activity, identifying and preventing potential
                  fraud before it can impact our users.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
              Learn About Security
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Build Your Future with Verified Talent
            </h2>
            <p className="text-xl mb-8">
              Join thousands of businesses and professionals in our trusted
              ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-700 px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                Get Started Free
              </button>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg border border-blue-500 hover:bg-blue-800 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                View All Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="text-2xl font-bold mb-6">TrustEcosystem</div>
              <p className="text-gray-400 mb-6">
                Building a trusted network for businesses and professionals
                through blockchain technology and AI.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Platform</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              &copy; 2025 TrustEcosystem. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <div className="text-gray-400 flex items-center">
                <i className="fab fa-cc-visa text-xl mr-2"></i>
                <span>Visa</span>
              </div>
              <div className="text-gray-400 flex items-center">
                <i className="fab fa-cc-mastercard text-xl mr-2"></i>
                <span>Mastercard</span>
              </div>
              <div className="text-gray-400 flex items-center">
                <i className="fab fa-cc-paypal text-xl mr-2"></i>
                <span>PayPal</span>
              </div>
              <div className="text-gray-400 flex items-center">
                <i className="fab fa-bitcoin text-xl mr-2"></i>
                <span>Crypto</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
