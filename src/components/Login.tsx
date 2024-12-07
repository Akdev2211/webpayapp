import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom"; // Import Link for navigation
import signupimg from "../assets/signupimg.jpg";

const Login: React.FC = () => {
  // Step 1: Define state for form data and error messages
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission with validation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    type setError = { email: string; password: string };

    const newErrors: setError = {
      email: "",
      password: "",
    };

    // Validate Email
    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    // Validate Password
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
    } else {
      toast.success("Login successful!");
      setErrors({ email: "", password: "" }); // Clear errors on success
    }
  };

  return (
    <div className="h-screen flex">
      {/* Left Side: Image */}
      <div className="flex-1">
        <img
          src={signupimg}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm bg-white shadow-2xl rounded-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-700 mb-4">
            Login
          </h2>

          {/* Login Form with Email and Password */}
          <form onSubmit={handleSubmit}>
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
                <p className="text-sm text-red-500">{errors.email}</p>
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
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            <div className="flex justify-between items-center">
              <label className="inline-flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm mt-4"
            >
              Login
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup" // Link to Sign Up page
                className="text-blue-500 hover:text-blue-600"
              >
                Sign Up here
              </Link>
            </p>
          </div>

          {/* Social Media Logos with Text Below */}
          <div className="my-6 text-center">
            <span className="text-sm text-gray-500 block mb-2">
              Or continue with
            </span>

            {/* Social Logos with Text as Links */}
            <div className="flex justify-center space-x-6">
              <div className="flex flex-col items-center">
                <Link
                  to="/google-auth" // Link to Google authentication page
                  className="flex flex-col items-center"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="Google"
                    className="w-10 h-10 text-gray-400"
                  />
                  <span className="text-xs text-gray-600">Google</span>
                </Link>
              </div>

              <div className="flex flex-col items-center">
                <Link
                  to="/facebook-auth" // Link to Facebook authentication page
                  className="flex flex-col items-center"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                    alt="Facebook"
                    className="w-10 h-10 text-gray-400"
                  />
                  <span className="text-xs text-gray-600">Facebook</span>
                </Link>
              </div>

              <div className="flex flex-col items-center">
                <Link
                  to="/apple-auth" // Link to Apple authentication page
                  className="flex flex-col items-center"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    alt="Apple"
                    className="w-10 h-10 text-gray-400"
                  />
                  <span className="text-xs text-gray-600">Apple</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Terms of Service and Privacy Policy */}
          <div className="mt-4 text-center text-[10px] text-gray-600 text-justify">
            By signing up or connecting with the services above, you agree to
            our{" "}
            <Link
              to="/terms-of-service" // Link to Terms of Service page
              className="text-blue-500 hover:text-blue-600"
            >
              Terms of Service
            </Link>{" "}
            and acknowledge our{" "}
            <Link
              to="/privacy-policy" // Link to Privacy Policy page
              className="text-blue-500 hover:text-blue-600"
            >
              Privacy Policy
            </Link>{" "}
            describing how we handle your personal data.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
