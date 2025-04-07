import React from 'react'

const HowItWorks = () => {
  return (
    <section id="process" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Our streamlined process makes it easy to join the ecosystem, verify credentials, find talent, and secure payments.</p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold">1</div>
            <h3 className="text-xl font-bold mb-3 text-center">Sign Up</h3>
            <p className="text-gray-600 text-center">Create your account and complete your profile with your professional information.</p>
            <div className="mt-6 flex justify-center">
              <i className="fas fa-user-plus text-blue-600 text-3xl"></i>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold">2</div>
            <h3 className="text-xl font-bold mb-3 text-center">Verify & Certify</h3>
            <p className="text-gray-600 text-center">Verify your credentials and obtain blockchain-based certifications for your skills.</p>
            <div className="mt-6 flex justify-center">
              <i className="fas fa-certificate text-blue-600 text-3xl"></i>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold">3</div>
            <h3 className="text-xl font-bold mb-3 text-center">Find Talent</h3>
            <p className="text-gray-600 text-center">Use our AI-powered matching system to find the perfect talent for your projects.</p>
            <div className="mt-6 flex justify-center">
              <i className="fas fa-search text-blue-600 text-3xl"></i>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold">4</div>
            <h3 className="text-xl font-bold mb-3 text-center">Secure Payments</h3>
            <p className="text-gray-600 text-center">Use smart contracts for secure, transparent, and automated payment processing.</p>
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

  )
}

export default HowItWorks
