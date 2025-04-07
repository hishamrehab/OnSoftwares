import React from 'react'

const Header = () => {
  return (
    <header className="relative overflow-hidden min-h-screen py-6">
        <div className="absolute inset-0 z-0 ">
          <img 
            src="https://public.readdy.ai/ai/img_res/dc16fc5e73f93a5a2e1aa8ec96eb369f.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
   

          <div className="py-20 md:py-28 md:w-1/2 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7 text-gray-900">Trusted Ecosystem</h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-500">Verify. Certify. Hire. Grow. Blockchain & DNS Trust.</h2>
            <p className="text-gray-500 mb-8 max-w-lg">Join thousands of businesses and professionals in a secure, verified network powered by blockchain technology and AI-driven matching.</p>
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
                <div className="flex items-center text-gray-500 whitespace-nowrap">
                  <i className="fas fa-users mr-2"></i>
                  <span>10,000+ Users</span>
                </div>
                <div className="flex items-center text-gray-500 whitespace-nowrap">
                  <i className="fas fa-building mr-2"></i>
                  <span>500+ Companies</span>
                </div>
                <div className="flex items-center text-gray-500 whitespace-nowrap">
                  <i className="fas fa-certificate mr-2"></i>
                  <span>5,000+ Certifications</span>
                </div>
              </div>

              <div className="flex items-center space-x-8 overflow-x-auto py-2 scrollbar-hide">
                <div className="text-gray-400 flex items-center">
                  <i className="fab fa-google text-xl"></i>
                  <span className="ml-2 font-medium">Google</span>
                </div>
                <div className="text-gray-400 flex items-center">
                  <i className="fab fa-microsoft text-xl"></i>
                  <span className="ml-2 font-medium">Microsoft</span>
                </div>
                <div className="text-gray-400 flex items-center">
                  <i className="fab fa-amazon text-xl"></i>
                  <span className="ml-2 font-medium">Amazon</span>
                </div>
                <div className="text-gray-400 flex items-center">
                  <i className="fab fa-apple text-xl"></i>
                  <span className="ml-2 font-medium">Apple</span>
                </div>
                <div className="text-gray-400 flex items-center">
                  <i className="fab fa-salesforce text-xl"></i>
                  <span className="ml-2 font-medium">Salesforce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
