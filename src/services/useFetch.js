import axios from 'axios';

const API_BASE_URL = 'http://igla.host';

export const fetchSkills = async () => {
  const response = await axios.get(`${API_BASE_URL}/list-skill`);
  return response.data.success;
};

export const fetchSocials = async () => {
  const response = await axios.get(`${API_BASE_URL}/list-social`);
  return response.data.success;
};

export const fetchAboutMe = async () => {
  const response = await axios.get(`${API_BASE_URL}/info-about-me`);
  return response.data.success;
};

export const fetchContactInfo = async () => {
  const response = await axios.get(`${API_BASE_URL}/info-contact`);
  return response.data.success;
};

export const fetchProjects = async () => {
  const response = await axios.get(`${API_BASE_URL}/list-projects`);
  return response.data.success;
};

export const registerContact = async (contactData) => {
  const response = await axios.post(`${API_BASE_URL}/store-message`, contactData);
  return response.data;
};