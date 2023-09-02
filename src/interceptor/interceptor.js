import axios from 'axios';

const apiBaseUrl = "http://localhost:8000/api";

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json", // Set the Content-Type header
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken'); // Fetch the token from storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Include the token in the headers
  }
  return config;
});


axiosInstance.interceptors.response.use(
  async (response) => {
    // You can perform response-related tasks here if needed
    return response;
  },
  async (error) => {
    // Handle API errors and log the error message
    console.log("API Error:", error.message); // Logging the error message

    // Log the response data if available
    if (error.response && error.response.data) {
      console.log("API Error Response:", error.response.data);
    }

    // Log the response status if available
    if (error.response && error.response.status) {
      console.log("API Error Status:", error.response.status);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
