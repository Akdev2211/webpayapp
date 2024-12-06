import React, { useState } from 'react';
import { toast } from 'react-toastify';
import signupimg from '../assets/signupimg.jpg';
import { Link } from 'react-router-dom';
const SignUp: React.FC = () => {
  // Step 1: Define state for form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
  });

  // Step 2: Define state for controlling the current step
  const [step, setStep] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Signup successful!');
  };

  // Handle login link click
  const handleLoginRedirect = () => {
    // This could be a redirect to a login page or showing a login form
    toast.info('Redirecting to login page...');
  };

  return (
    <div className="h-screen flex">
      {/* Left Side: Signup Form */}
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm bg-white shadow-2xl rounded-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-700 mb-4">
            Sign Up
          </h2>

          {/* Step 1: First 4 fields */}
          {step === 1 && (
            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
              <div className="mb-3">
                <label htmlFor="fullName" className="block text-gray-600 mb-1 capitalize text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="block text-gray-600 mb-1 capitalize text-sm">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="block text-gray-600 mb-1 capitalize text-sm">
                  Phone
                </label>
                <input
                  type="text"
                  className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="block text-gray-600 mb-1 capitalize text-sm">
                  Country
                </label>
                <input
                  type="text"
                  className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Enter your country"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm"
              >
                Next
              </button>
            </form>
          )}

          {/* Step 2: Remaining 3 fields */}
          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="state" className="block text-gray-600 mb-1 capitalize text-sm">
                  State
                </label>
                <input
                  type="text"
                  className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter your state"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="block text-gray-600 mb-1 capitalize text-sm">
                  City
                </label>
                <input
                  type="text"
                  className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="zipCode" className="block text-gray-600 mb-1 capitalize text-sm">
                  Zip Code
                </label>
                <input
                  type="text"
                  className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="Enter your zip code"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm"
              >
                Sign Up
              </button>
            </form>
          )}

          {/* Login Option */}
          {!isLoggedIn && (
            <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/"  // Link to Sign Up page
                className="text-blue-500 hover:text-blue-600"
              >
                Login 
              </Link>
            </p>
          </div>
          )}
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1">
        <img
          src={signupimg}
          alt="Signup"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignUp;
