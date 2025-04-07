import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">OnSoftwares</h3>
          <p className="text-gray-400 mb-4">
            The trusted marketplace for software, talents, and agencies.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Marketplace</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Software</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Talents</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Agencies</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Job Postings</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Certification</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Trust Score</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Support</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © 2025 OnSoftwares. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
          <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
          <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
          <i className="fab fa-bitcoin text-2xl text-gray-400"></i>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
