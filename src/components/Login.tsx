import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'; // Import Link for navigation
import signupimg from '../assets/signupimg.jpg';

const Login: React.FC = () => {
  // Step 1: Define state for form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Login successful!');
  };

  return (
    <div className="h-screen flex">
      {/* Left Side: Login Form */}
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm bg-white shadow-2xl rounded-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-700 mb-4">
            Login
          </h2>

          {/* Login Form with Email and Password */}
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="password" className="block text-gray-600 mb-1 capitalize text-sm">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm"
            >
              Login
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/signup"  // Link to Sign Up page
                className="text-blue-500 hover:text-blue-600"
              >
                Sign Up here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1">
        <img
          src={signupimg}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
