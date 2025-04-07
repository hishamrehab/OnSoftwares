// RegisterForm.jsx
import React from 'react';

const RegisterForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-between mb-4">
          <button className="text-gray-500">Login</button>
          <button className="text-blue-600 border-b-2 border-blue-600 pb-1">Register</button>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-2">OnSoftwares</h2>
        <p className="text-center text-gray-500 mb-6">The trusted ecosystem for software, talents, and agencies</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-blue-500" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-blue-500" placeholder="name@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium">I am registering as a</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-blue-500">
              <option>Talent (Individual)</option>
              <option>Agency</option>
              <option>Company</option>
            </select>
          </div>
          <div className="text-xs text-gray-600">
            By registering, you agree to our <a href="#" className="text-blue-600">Terms of Service</a> and <a href="#" className="text-blue-600">Privacy Policy</a>.
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Create Account</button>
        </form>
        <div className="mt-6">
          <p className="text-center text-gray-500 mb-3">Or continue with</p>
          <div className="flex justify-center space-x-4">
            <button className="border rounded-lg px-4 py-2 text-sm flex items-center space-x-2">
              <span>GitHub</span>
            </button>
            <button className="border rounded-lg px-4 py-2 text-sm flex items-center space-x-2">
              <span>Google</span>
            </button>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-6">Protected by blockchain verification and DNS security</p>
      </div>
    </div>
  );
};

export default RegisterForm;