import React, { useState } from 'react';
import { Link } from 'react-router';
import image from '/cropped_image.png'









const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
return (
  <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
  <div className="container w-full mx-auto px-4 sm:px-6 ">
    <div className="flex items-center justify-between flex-row h-16">
     
    <div className="flex items-center">
      <Link to="/">
      <div className="flex-shrink-0 flex  flex-row items-center">
          <img
            className="h-12 w-auto inline-block "
            src={image}
            alt="On Softwares Logo"
          />
          <span className=" text-2xl font-bold text-gray-900">
            OnSoftwares
          </span>
        </div>
        </Link>

       
      </div>


      <div className="hidden md:ml-6 md:flex md:space-x-8 lg:space-x-12 ">

      <Link to="/"
     className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-light"
   >
     Home
   </Link>
   <Link to="/marketplace"
      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-light"
   >
     MarketPlace
   </Link>

 

   <Link
     to="/companies"
    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-light"
   >
     Companies
   </Link>

   <Link 
     to="/contact-us"
     className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-light"
   >
    Contact US
   </Link>
   <Link 
     to="/pricing"
     className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-light"
   >
    Pricing
   </Link>
 </div>

      <div className="hidden md:flex items-center">
        <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-lg font-light rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
          <Link to="/login">
          Sign In
          </Link>
        </button>
        <button className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-lg font-light rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
          <Link to="/register">
          Sign Up
          </Link>
        </button>
      </div>



      <div className="flex items-center ">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:block md:hidden  inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 cursor-pointer"
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl text-gray-600 hover:text-indigo-600 transition-colors duration-200`} ></i>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile menu */}
  {isMenuOpen && (
    <div className="md:hidden">
      <div className="pt-2 pb-3 space-y-1">
      <Link
          to="/"
          className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-light"
        >
          Home
        </Link>
        
        <Link
          to="/companies"
          className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-light"
        >
          Companies
        </Link>
        <Link
          to="/marketplace"
          className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-light"
        >
          MarketPlace
        </Link>
        <Link
          to="/contact-us"
          className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-light"
        >
         Contact US
        </Link>

        <Link
          to="/pricing"
          className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-light"
        >
        Pricing
        </Link>
      </div>
      <div className="pt-4 pb-3 border-t border-gray-200">
        <div className="flex items-center px-4 space-x-3">
          <button className="flex-1 px-4 py-2 border border-transparent text-sm font-light rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
          <Link to="/login">
          Sign In
          </Link>
          </button>
          <button className="flex-1 px-4 py-2 border border-gray-300 text-sm font-light rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer">
          <Link to="/register">
          Sign Up
          </Link>
          </button>
        </div>
      </div>
    </div>
  )}
</nav> 
)
}
  

export default NavBar;
