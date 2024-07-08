import axios from 'axios';

const API_BASE_URL = 'http://igla.host/api';

export const fetchSkills = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/list-skill`);

    if (!response.data.success || response.data.success.length === 0) {
      console.error('No data found');
      return response.data.success;
    }

    return response.data.success;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};

export const fetchSocials = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/list-social`);
    if (!response.data.success || response.data.success.length === 0) {
      console.error('No data found');
      return response.data.success;
    }
    return response.data.success;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};

export const fetchAboutMe = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/info-about-me`);
    if (!response.data.success || response.data.success.length === 0) {
      console.error('No data found');
      return response.data.success;
    }
    return response.data.success;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};

export const fetchContactInfo = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/info-contact`);
    if (!response.data.success || response.data.success.length === 0) {
      console.error('No data found');
      return response.data.success;
    }
    return response.data.success;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};

export const fetchProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/list-projects`);

    if (!response.data.success || response.data.success.length === 0) {
      console.error('No data found');
      return response.data.success;
    }

    return response.data.success;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};

export const registerContact = async (contactData) => {
  const response = await axios.post(`${API_BASE_URL}/store-message`, contactData);
  return response.data;
};