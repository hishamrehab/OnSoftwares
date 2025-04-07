import React from 'react'

const SecuritySection = () => {
  return (
    <section id="security" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Security & Trust</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Our platform is built on a foundation of security, transparency, and trust.</p>
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
            <p className="text-gray-600">Our DNS verification system ensures that all businesses and professionals on our platform are legitimate and trustworthy. We verify domain ownership and business credentials to prevent fraud.</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-6">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
              <i className="fas fa-certificate text-purple-600 text-2xl"></i>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Blockchain Certifications</h3>
            <p className="text-gray-600">All certifications on our platform are stored on the blockchain, creating an immutable record of skills and qualifications that cannot be tampered with or falsified.</p>
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
            <p className="text-gray-600">Our blockchain-based smart contracts automate payment processes, ensuring that funds are only released when predefined conditions are met, protecting both clients and service providers.</p>
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
            <p className="text-gray-600">Our advanced AI systems continuously monitor the platform for suspicious activity, identifying and preventing potential fraud before it can impact our users.</p>
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
  )
}

export default SecuritySection
