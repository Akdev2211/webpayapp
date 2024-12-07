import React, { useState } from "react";
import { toast } from "react-toastify";
import signupimg from "../assets/signupimg.jpg";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  // Step 1: Define state for form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    password: "",
  });

  // Step 2: Define state for controlling the current step
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<any>({}); // Track errors
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validateForm = (): boolean => {
    let newErrors: any = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zipCode) newErrors.zipCode = "Zip code is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    toast.success("Signup successful!");
  };

  // Handle login link click
  const handleLoginRedirect = () => {
    // This could be a redirect to a login page or showing a login form
    toast.info("Redirecting to login page...");
  };

  // Disable Next button in step 1 if required fields are empty
  const isNextButtonDisabled = () => {
    return !formData.email || !formData.password;
  };

  // Disable Sign Up button in step 2 if required fields are empty
  const isSignUpButtonDisabled = () => {
    return (
      !formData.fullName ||
      !formData.phone ||
      !formData.country ||
      !formData.state ||
      !formData.city ||
      !formData.zipCode
    );
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Side: Image */}
      <div className="hidden md:flex flex-1">
        <img
          src={signupimg}
          alt="Signup"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Signup Form */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 overflow-auto">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-700 mb-4">
            Sign Up
          </h2>

          {/* Step 1: Email and Password */}
          {step === 1 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep(2);
              }}
            >
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block text-gray-600 mb-1 capitalize text-sm"
                >
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
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="block text-gray-600 mb-1 capitalize text-sm"
                >
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
                {errors.password && (
                  <p className="text-red-500 text-xs">{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isNextButtonDisabled()}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm disabled:bg-gray-300"
              >
                Next
              </button>
            </form>
          )}

          {/* Step 2: Remaining details */}
          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="fullName"
                  className="block text-gray-600 mb-1 capitalize text-sm"
                >
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
                {errors.fullName && (
                  <p className="text-red-500 text-xs">{errors.fullName}</p>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="phone"
                  className="block text-gray-600 mb-1 capitalize text-sm"
                >
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
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="country"
                  className="block text-gray-600 mb-1 capitalize text-sm"
                >
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
                {errors.country && (
                  <p className="text-red-500 text-xs">{errors.country}</p>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="state"
                  className="block text-gray-600 mb-1 capitalize text-sm"
                >
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
                {errors.state && (
                  <p className="text-red-500 text-xs">{errors.state}</p>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="city"
                  className="block text-gray-600 mb-1 capitalize text-sm"
                >
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
                {errors.city && (
                  <p className="text-red-500 text-xs">{errors.city}</p>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="zipCode"
                  className="block text-gray-600 mb-1 capitalize text-sm"
                >
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
                {errors.zipCode && (
                  <p className="text-red-500 text-xs">{errors.zipCode}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSignUpButtonDisabled()}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm disabled:bg-gray-300"
              >
                Sign Up
              </button>

              {/* Back Button */}
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full mt-3 text-blue-500 hover:text-blue-600 py-2 rounded-md text-sm"
              >
                Back
              </button>

              {/* Terms and Conditions */}
              <div className="mt-4 text-center text-xs text-gray-600">
                <p>
                  By signing up or connecting with the services above, you agree
                  to our{" "}
                  <Link
                    to="/terms"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Terms of Service
                  </Link>{" "}
                  and acknowledge our{" "}
                  <Link
                    to="/privacy"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Privacy Policy
                  </Link>{" "}
                  describing how we handle your personal data.
                </p>
              </div>
            </form>
          )}

          {/* Login Option */}
          {!isLoggedIn && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/" // Link to Login page
                  className="text-blue-500 hover:text-blue-600"
                >
                  Login
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
