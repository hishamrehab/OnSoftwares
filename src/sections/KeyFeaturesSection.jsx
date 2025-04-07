import React from 'react'

const KeyFeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Our unique ecosystem combines blockchain technology, AI, and industry expertise to create a trusted network for businesses and professionals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <i className="fas fa-check-circle text-blue-600 text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">Software Verification</h3>
          <p className="text-gray-600 mb-6">Verify software authenticity and integrity through our blockchain-based verification system, ensuring security and trust.</p>
          <a href="#" className="text-blue-600 font-medium flex items-center cursor-pointer">
            Learn more <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
          <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <i className="fas fa-certificate text-purple-600 text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">Talent Certifications (NFT)</h3>
          <p className="text-gray-600 mb-6">Issue and verify professional certifications as NFTs, creating immutable proof of skills and qualifications.</p>
          <a href="#" className="text-purple-600 font-medium flex items-center cursor-pointer">
            Learn more <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <i className="fas fa-robot text-green-600 text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">AI Job Matching</h3>
          <p className="text-gray-600 mb-6">Our AI-powered matching system connects verified talent with the right opportunities based on skills, experience, and preferences.</p>
          <a href="#" className="text-green-600 font-medium flex items-center cursor-pointer">
            Learn more <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
          <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
            <i className="fas fa-users-cog text-yellow-600 text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">Agency Skill Inheritance</h3>
          <p className="text-gray-600 mb-6">Agencies can inherit and showcase the verified skills of their talent pool, building trust and credibility with clients.</p>
          <a href="#" className="text-yellow-600 font-medium flex items-center cursor-pointer">
            Learn more <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
          <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
            <i className="fas fa-chart-line text-red-600 text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">SEO Marketplace</h3>
          <p className="text-gray-600 mb-6">Connect with verified SEO professionals and agencies to improve your online visibility and organic traffic.</p>
          <a href="#" className="text-red-600 font-medium flex items-center cursor-pointer">
            Learn more <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
          <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
            <i className="fas fa-link text-indigo-600 text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">Smart Contracts</h3>
          <p className="text-gray-600 mb-6">Secure your business relationships with automated, transparent, and enforceable blockchain-based smart contracts.</p>
          <a href="#" className="text-indigo-600 font-medium flex items-center cursor-pointer">
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
  )
}

export default KeyFeaturesSection
