// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import * as echarts from 'echarts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-indigo-600">
              <i className="fas fa-shield-alt mr-2"></i>
              TrustEco
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 cursor-pointer">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 cursor-pointer">How It Works</a>
            <a href="#marketplace" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 cursor-pointer">Marketplace</a>
            <a href="#security" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 cursor-pointer">Security</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-button hover:bg-indigo-50 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              Log In
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-button hover:bg-indigo-700 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              Sign Up
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 cursor-pointer"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 py-2 transition-colors duration-300 cursor-pointer">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 py-2 transition-colors duration-300 cursor-pointer">How It Works</a>
              <a href="#marketplace" className="text-gray-700 hover:text-indigo-600 py-2 transition-colors duration-300 cursor-pointer">Marketplace</a>
              <a href="#security" className="text-gray-700 hover:text-indigo-600 py-2 transition-colors duration-300 cursor-pointer">Security</a>
              <div className="flex flex-col space-y-3 pt-3 border-t border-gray-200">
                <button className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-button hover:bg-indigo-50 transition-colors duration-300 cursor-pointer whitespace-nowrap">
                  Log In
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-button hover:bg-indigo-700 transition-colors duration-300 cursor-pointer whitespace-nowrap">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden" style={{ 
        backgroundImage: `url('https://public.readdy.ai/ai/img_res/e42f6fb9781450205e78043ff0585e61.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '800px'
      }}>
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="w-full md:w-1/2 text-white z-10">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Trusted Ecosystem
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-8">
              Verify. Certify. Hire. Grow. <br />
              Blockchain & DNS Trust.
            </h2>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button className="px-8 py-3 bg-indigo-600 text-white rounded-button hover:bg-indigo-700 transition-colors duration-300 text-lg font-medium cursor-pointer whitespace-nowrap">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white text-indigo-600 rounded-button hover:bg-gray-100 transition-colors duration-300 text-lg font-medium cursor-pointer whitespace-nowrap">
                Explore
              </button>
            </div>
            
            <div className="flex flex-wrap items-center mt-8">
              <div className="flex items-center mr-8 mb-4">
                <i className="fas fa-shield-check text-green-400 text-xl mr-2"></i>
                <span className="text-white">Verified by Blockchain</span>
              </div>
              <div className="flex items-center mr-8 mb-4">
                <i className="fas fa-users text-green-400 text-xl mr-2"></i>
                <span className="text-white">10,000+ Users</span>
              </div>
              <div className="flex items-center mb-4">
                <i className="fas fa-lock text-green-400 text-xl mr-2"></i>
                <span className="text-white">100% Secure</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust badges */}
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-6">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between overflow-x-auto space-x-8 pb-2">
              <div className="flex items-center flex-shrink-0">
                <i className="fab fa-google text-gray-700 text-2xl mr-2"></i>
                <span className="font-medium">Google</span>
              </div>
              <div className="flex items-center flex-shrink-0">
                <i className="fab fa-microsoft text-gray-700 text-2xl mr-2"></i>
                <span className="font-medium">Microsoft</span>
              </div>
              <div className="flex items-center flex-shrink-0">
                <i className="fab fa-amazon text-gray-700 text-2xl mr-2"></i>
                <span className="font-medium">Amazon</span>
              </div>
              <div className="flex items-center flex-shrink-0">
                <i className="fab fa-apple text-gray-700 text-2xl mr-2"></i>
                <span className="font-medium">Apple</span>
              </div>
              <div className="flex items-center flex-shrink-0">
                <i className="fab fa-facebook text-gray-700 text-2xl mr-2"></i>
                <span className="font-medium">Meta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique ecosystem combines blockchain technology, AI, and industry expertise to create a trusted platform for verification and hiring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-check-circle text-indigo-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Software Verification</h3>
              <p className="text-gray-600 text-center">
                Verify software authenticity and integrity through our blockchain-based verification system, ensuring security and trust.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-certificate text-indigo-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Talent Certifications (NFT)</h3>
              <p className="text-gray-600 text-center">
                Secure, verifiable talent credentials as NFTs on the blockchain, providing immutable proof of skills and experience.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-robot text-indigo-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">AI Job Matching</h3>
              <p className="text-gray-600 text-center">
                Advanced AI algorithms match verified talent with the perfect opportunities based on skills, experience, and preferences.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-users-cog text-indigo-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Agency Skill Inheritance</h3>
              <p className="text-gray-600 text-center">
                Agencies can inherit and showcase the verified skills of their talent pool, creating a trusted network of expertise.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-search text-indigo-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">SEO Marketplace</h3>
              <p className="text-gray-600 text-center">
                Connect with verified SEO experts and agencies through our specialized marketplace for digital marketing services.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-file-contract text-indigo-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Smart Contracts</h3>
              <p className="text-gray-600 text-center">
                Secure payments and agreements through blockchain-based smart contracts, ensuring transparent and trustworthy transactions.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-button hover:bg-indigo-700 transition-colors duration-300 text-lg font-medium cursor-pointer whitespace-nowrap">
              Discover How
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes it easy to join the trusted ecosystem and start connecting with verified talent and opportunities.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                  <h3 className="text-2xl font-bold mb-4">Sign Up</h3>
                  <p className="text-gray-600">
                    Create your account and set up your profile with your skills, experience, and preferences to get started.
                  </p>
                </div>
                <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center md:mt-24">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4">Verify & Certify</h3>
                  <p className="text-gray-600">
                    Complete the verification process to validate your identity, skills, and credentials through our blockchain system.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center md:mt-24">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                  <h3 className="text-2xl font-bold mb-4">Find Talent</h3>
                  <p className="text-gray-600">
                    Browse our marketplace of verified professionals and agencies, or let our AI matching system connect you with the perfect fit.
                  </p>
                </div>
                <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center md:mt-24">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4">Secure Payments</h3>
                  <p className="text-gray-600">
                    Complete transactions securely through our smart contract system, ensuring trust and transparency for all parties.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-20">
              <button className="px-8 py-3 bg-indigo-600 text-white rounded-button hover:bg-indigo-700 transition-colors duration-300 text-lg font-medium cursor-pointer whitespace-nowrap">
                Start Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our platform has transformed hiring and verification processes for businesses worldwide.
            </p>
          </div>
          
          <div className="mb-16">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="testimonial-swiper"
            >
              {/* Testimonial 1 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-user text-indigo-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Sarah Johnson</h4>
                      <p className="text-gray-600">CTO, TechSoft</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    "The AI-powered matching system reduced our hiring time by 60%. We found verified talent with the exact skills we needed in record time."
                  </p>
                  <div className="flex items-center">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                  </div>
                </div>
              </SwiperSlide>
              
              {/* Testimonial 2 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-user text-indigo-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Michael Chen</h4>
                      <p className="text-gray-600">Freelance Developer</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    "Having my skills verified and certified as NFTs has opened up incredible opportunities. Clients trust my credentials immediately."
                  </p>
                  <div className="flex items-center">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star-half-alt text-yellow-400"></i>
                  </div>
                </div>
              </SwiperSlide>
              
              {/* Testimonial 3 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-user text-indigo-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Emma Rodriguez</h4>
                      <p className="text-gray-600">CEO, Digital Agency</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    "The smart contract payment system has eliminated payment disputes completely. Our clients love the transparency and security."
                  </p>
                  <div className="flex items-center">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                  </div>
                </div>
              </SwiperSlide>
              
              {/* Testimonial 4 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-user text-indigo-600 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">David Kim</h4>
                      <p className="text-gray-600">Marketing Director</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    "Finding verified SEO experts through the marketplace has transformed our digital marketing results. The quality of talent is outstanding."
                  </p>
                  <div className="flex items-center">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Stat 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">96%</h3>
              <p className="text-xl text-gray-700">Trust Rating</p>
            </div>
            
            {/* Stat 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">10K+</h3>
              <p className="text-xl text-gray-700">Certified Professionals</p>
            </div>
            
            {/* Stat 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">5,000+</h3>
              <p className="text-xl text-gray-700">Successful Matches</p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-button hover:bg-indigo-700 transition-colors duration-300 text-lg font-medium cursor-pointer whitespace-nowrap">
              Read Success Stories
            </button>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section id="marketplace" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Marketplace</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our curated marketplace of verified software, talent, and agencies to find the perfect match for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Software Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://public.readdy.ai/ai/img_res/354bc4851fc9fa64301b6f6456baa58f.jpg" 
                  alt="Software Development" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Software</span>
                  <span className="flex items-center text-green-600">
                    <i className="fas fa-shield-check mr-1"></i>
                    Verified
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise CRM Solution</h3>
                <p className="text-gray-600 mb-4">
                  Blockchain-verified customer relationship management software with AI-powered insights and analytics.
                </p>
                <button className="w-full py-2 bg-blue-600 text-white rounded-button hover:bg-blue-700 transition-colors duration-300 cursor-pointer whitespace-nowrap">
                  View Details
                </button>
              </div>
            </div>
            
            {/* Talent Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://public.readdy.ai/ai/img_res/c5c93618699f2b5fa1c58a11693d4c6e.jpg" 
                  alt="Software Developer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Talent</span>
                  <span className="flex items-center text-green-600">
                    <i className="fas fa-certificate mr-1"></i>
                    NFT Certified
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Senior Full-Stack Developer</h3>
                <p className="text-gray-600 mb-4">
                  10+ years experience in React, Node.js, and AWS. Blockchain-verified credentials and portfolio.
                </p>
                <button className="w-full py-2 bg-purple-600 text-white rounded-button hover:bg-purple-700 transition-colors duration-300 cursor-pointer whitespace-nowrap">
                  Hire Now
                </button>
              </div>
            </div>
            
            {/* Agency Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://public.readdy.ai/ai/img_res/0ac4f27ec1c032901196ab4fce6aaab6.jpg" 
                  alt="Digital Marketing Agency" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Agency</span>
                  <span className="flex items-center text-green-600">
                    <i className="fas fa-users-cog mr-1"></i>
                    Verified Team
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Digital Growth Experts</h3>
                <p className="text-gray-600 mb-4">
                  Full-service digital marketing agency with verified SEO specialists, content creators, and PPC experts.
                </p>
                <button className="w-full py-2 bg-green-600 text-white rounded-button hover:bg-green-700 transition-colors duration-300 cursor-pointer whitespace-nowrap">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-button hover:bg-indigo-700 transition-colors duration-300 text-lg font-medium cursor-pointer whitespace-nowrap">
              Browse Marketplace
            </button>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section id="security" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security & Trust</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is built on the foundation of security, transparency, and trust, leveraging the latest blockchain technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Security Feature 1 */}
            <div className="flex">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-globe text-indigo-600 text-2xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">DNS Listings</h3>
                <p className="text-gray-600">
                  Our platform uses secure DNS listings to verify the authenticity of websites and digital assets, preventing spoofing and phishing attacks.
                </p>
              </div>
            </div>
            
            {/* Security Feature 2 */}
            <div className="flex">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-link text-indigo-600 text-2xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Blockchain Certifications</h3>
                <p className="text-gray-600">
                  All certifications and credentials are stored on the blockchain, creating an immutable and transparent record that cannot be altered or forged.
                </p>
              </div>
            </div>
            
            {/* Security Feature 3 */}
            <div className="flex">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-file-contract text-indigo-600 text-2xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Smart Contracts</h3>
                <p className="text-gray-600">
                  Our payment and agreement system uses blockchain-based smart contracts to ensure transparent, secure, and automated transactions.
                </p>
              </div>
            </div>
            
            {/* Security Feature 4 */}
            <div className="flex">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-shield-alt text-indigo-600 text-2xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">AI Fraud Detection</h3>
                <p className="text-gray-600">
                  Advanced AI algorithms continuously monitor the platform to detect and prevent fraudulent activities, ensuring a safe environment for all users.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-button hover:bg-indigo-700 transition-colors duration-300 text-lg font-medium cursor-pointer whitespace-nowrap">
              Learn About Security
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-indigo-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Build Your Future with Verified Talent
            </h2>
            <p className="text-xl mb-8">
              Join thousands of businesses and professionals in our trusted ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-white text-indigo-700 rounded-button hover:bg-gray-100 transition-colors duration-300 text-lg font-medium cursor-pointer whitespace-nowrap">
                Get Started Free
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-button hover:bg-indigo-600 transition-colors duration-300 text-lg font-medium cursor-pointer whitespace-nowrap">
                View Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1 - About */}
            <div>
              <h3 className="text-xl font-bold mb-6">TrustEco</h3>
              <p className="text-gray-400 mb-6">
                Building a trusted ecosystem for verification, certification, and hiring through blockchain technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
            
            {/* Column 2 - Navigation */}
            <div>
              <h3 className="text-xl font-bold mb-6">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Home</a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Features</a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">How It Works</a>
                </li>
                <li>
                  <a href="#marketplace" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Marketplace</a>
                </li>
                <li>
                  <a href="#security" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Security</a>
                </li>
              </ul>
            </div>
            
            {/* Column 3 - Legal */}
            <div>
              <h3 className="text-xl font-bold mb-6">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Cookie Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">GDPR Compliance</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Security Policy</a>
                </li>
              </ul>
            </div>
            
            {/* Column 4 - Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and features.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-2 bg-gray-800 text-white border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition-colors duration-300 cursor-pointer whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <div className="mt-6">
                <p className="text-gray-400 text-sm">
                  We accept secure payments via:
                </p>
                <div className="flex space-x-3 mt-2">
                  <i className="fab fa-cc-visa text-gray-400 text-2xl"></i>
                  <i className="fab fa-cc-mastercard text-gray-400 text-2xl"></i>
                  <i className="fab fa-cc-paypal text-gray-400 text-2xl"></i>
                  <i className="fab fa-bitcoin text-gray-400 text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 TrustEco. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

