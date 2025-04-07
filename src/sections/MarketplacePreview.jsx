import React from 'react'

const MarketplacePreview = () => {
  return (
    <section id="marketplace" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Marketplace Preview</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore our growing marketplace of verified software, talent, and agencies.</p>
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
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
              <span className="ml-2 text-gray-500 text-sm">Software</span>
            </div>
            <h3 className="text-xl font-bold mb-2">DataInsight Analytics</h3>
            <p className="text-gray-600 mb-4">Advanced analytics platform with AI-powered insights and visualization tools.</p>
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
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">NFT Certified</span>
              <span className="ml-2 text-gray-500 text-sm">Talent</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Jessica Chen</h3>
            <p className="text-gray-600 mb-4">Senior Full-Stack Developer with 8+ years of experience in React, Node.js, and AWS.</p>
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
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Verified</span>
              <span className="ml-2 text-gray-500 text-sm">Agency</span>
            </div>
            <h3 className="text-xl font-bold mb-2">NexGen Digital</h3>
            <p className="text-gray-600 mb-4">Full-service digital agency specializing in web development, SEO, and digital marketing.</p>
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
  )
}

export default MarketplacePreview
