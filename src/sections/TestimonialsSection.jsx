import React from 'react'

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Hear from businesses and professionals who have transformed their hiring and growth with our ecosystem.</p>
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
              <p className="text-gray-600 mb-6">"By leveraging the AI-powered matching system, we reduced our hiring time by 60%. The verified talent pool gave us confidence in our hiring decisions, and the smart contracts simplified our payment process."</p>
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
          <p className="mt-4 text-blue-100">Based on verified reviews and blockchain-secured ratings</p>
        </div>

        <div className="bg-blue-700 text-white rounded-xl shadow-md p-8 text-center">
          <div className="text-4xl font-bold mb-2">10K+</div>
          <p className="text-xl">Certified Professionals</p>
          <p className="mt-4 text-blue-100">Verified skills and credentials on our blockchain network</p>
        </div>

        <div className="bg-blue-700 text-white rounded-xl shadow-md p-8 text-center">
          <div className="text-4xl font-bold mb-2">60%</div>
          <p className="text-xl">Faster Hiring</p>
          <p className="mt-4 text-blue-100">Average reduction in time-to-hire with our AI matching</p>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
          Read Success Stories
        </button>
      </div>
    </div>
  </section>

  )
}

export default TestimonialsSection
