import axios from 'axios';

// Define the base URL of your backend API
const API_URL = 'http://localhost:5173'; // Replace with your backend URL

// Function to register a new user
export const signup = async (formData: {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, formData);
    return response.data; // Return response data on success
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || 'Registration failed. Please try again.');
    } else {
        // Error handling: return error message from server
        if (error.response && error.response.data) {
          throw new Error(error.response.data.message || 'Registration failed. Please try again.');
        } else {
          throw new Error('Network error. Please try again.');
        }
    }
  }
};
