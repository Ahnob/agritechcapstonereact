import axios from "axios";

const API_URL = "https://agritechlink-backend.onrender.com/api";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signupAdmin = async (name, jobTitle, phoneNumber, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, {
      name,
      jobTitle,
      phoneNumber,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
