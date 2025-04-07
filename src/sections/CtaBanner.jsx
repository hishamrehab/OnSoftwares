import React from 'react'

const CtaBanner = () => {
  return (
    <section className="py-20 bg-blue-700 text-white">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Your Future with Verified Talent</h2>
        <p className="text-xl mb-8">Join thousands of businesses and professionals in our trusted ecosystem.</p>
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

  )
}

export default CtaBanner
