// PricingPage.jsx
import React from 'react';

const PricingPage = () => {
  const pricingPlans = [
    {
      name: 'Free',
      price: '0',
      description: 'Essential features for individuals getting started',
      features: ['Basic Profile', 'Limited Jobs Access', 'No Certification', 'Marketplace View Only', 'Community Support'],
      buttonLabel: 'Get Started',
    },
    {
      name: 'Pro',
      price: '20',
      description: 'Advanced features for professionals and growing businesses',
      features: ['Priority Listings', 'Job Boost Promotion', 'Certification NFT Minting', 'Enhanced Search Visibility', 'Priority Support',],
      popular: true,
      buttonLabel: 'Upgrade to Pro',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Premium solutions for large organizations',
      features: ['API Access', 'Bulk Employee Certification', 'Hiring Insights', 'Custom Integrations', 'Dedicated Account Manager'],
      buttonLabel: 'Contact Sales',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-5 0 py-20">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing Plans</h1>
          <p className="text-gray-600">Choose the perfect plan to accelerate your growth with blockchain-verified talent and software.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 px-12">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-md p-6 border relative ${plan.popular ? 'border-blue-500' : 'border-gray-200'}`}>
              {plan.popular && (
                <div
                //  className="text-center text-white bg-blue-500 rounded-full px-4 py-1 text-sm font-bold absolute -mt-5 transform translate-x-1/2 translate-y-1 right-0"
                  className='absolute top-5 -right-8 transform rotate-45 translate-x-1 translate-y-1 bg-blue-500 text-white text-sm font-bold px-5 py-1 shadow-lg'
                 >
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
              <div className="text-4xl font-bold text-gray-900 mb-4">
                ${plan.price}
                <span className="text-lg text-gray-600">{plan.name !== 'Enterprise' ? '/month' : ''}</span>
              </div>
              <p className="text-gray-600 mb-4">{plan.description}</p>

              <ul className="space-y-2 mb-4 text-left">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4">
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer">
          {plan.buttonLabel}
        </button>
      </div>
            </div>
          ))}
        </div>
      </main>

      {/* Contact Section */}
      <section className="text-center py-12">
        <h2 className="text-xl font-bold mb-4">Have questions about our plans?</h2>
        <p className="text-gray-600 mb-4">Our team is ready to help you choose the right plan or customize one that fits your specific needs.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Contact Our Sales Team
        </button>
      </section>

    
    </div>
  );
};

export default PricingPage;