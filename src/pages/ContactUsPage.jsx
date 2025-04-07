// ContactUsPage.jsx
import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <main className="container mx-auto px-4 pt-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-gray-600">We're here to help and answer any questions you may have.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">Reach out via any of the contact methods below:</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-phone-alt text-indigo-600 mr-4"></i>
                <span className="text-gray-800">(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-indigo-600 mr-4"></i>
                <span className="text-gray-800">support@onsoftwares.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-indigo-600 mr-4"></i>
                <span className="text-gray-800">1234 Software St., Tech City</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mt-8">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="text-gray-600 hover:text-indigo-600"><i className="fab fa-linkedin text-xl"></i></a>
              <a href="#" className="text-gray-600 hover:text-indigo-600"><i className="fab fa-facebook text-xl"></i></a>
              <a href="#" className="text-gray-600 hover:text-indigo-600"><i className="fab fa-instagram text-xl"></i></a>
            </div>
          </div>
          
          {/* Placeholder for map or mission statement */}
          <div className="bg-gray-100 rounded-xl shadow-md p-6 flex items-center justify-center">
            {/* Potentially add a map or vision statement */}
            <p className="text-center text-gray-600">Our team is ready to assist you with any inquiries or support needs. Please reach out through any provided contact options.</p>
          </div>
        </div>
        
        {/* Company Mission Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">At OnSoftwares, our mission is to empower businesses with cutting-edge software solutions, fostering innovation and driving results. We believe in the power of technology to transform industries and communities.</p>
        </section>

        {/* Testimonials */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="flex flex-wrap gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-600">"OnSoftwares has revolutionized the way we operate, providing incredible value and driving efficiency throughout our processes."</p>
              <div className="mt-4 flex items-center">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-10 h-10 rounded-full mr-4"/>
                <div>
                  <p className="font-bold">John Doe</p>
                  <p className="text-gray-600 text-sm">CEO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-600">"Their support team is unparalleled, always ready to assist and resolve any issues swiftly and effectively."</p>
              <div className="mt-4 flex items-center">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="w-10 h-10 rounded-full mr-4"/>
                <div>
                  <p className="font-bold">Jane Smith</p>
                  <p className="text-gray-600 text-sm">Manager, Innovate Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="font-bold text-lg text-gray-900">How do I contact support?</h3>
              <p className="text-gray-600">You can contact support via email at support@onsoftwares.com or call us at (123) 456-7890.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="font-bold text-lg text-gray-900">What services does OnSoftwares provide?</h3>
              <p className="text-gray-600">We offer a marketplace for software solutions, talents, and agencies, and provide certifications and trust scores for quality assurance.</p>
            </div>
          </div>
        </section>
      </main>
 
    </div>
  );
};

export default ContactUsPage;