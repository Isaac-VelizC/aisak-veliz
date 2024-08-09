import axios from 'axios';

const API_BASE_URL = 'https://aisakveliz-admin.igla.cloud/api';

export const fetchAboutMe = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/info-about-me`);
    if (!response.data.success || response.data.success.length === 0) {
      console.error('No data found');
      return response.data.success;
    }
    return response.data.success;
  } catch (error) {
    console.error('Error fetching:', error);
    return [];
  }
};

export const fetchProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/list-projects`);

    if (!response.data.success || response.data.success.length === 0) {
      //console.error('No data found');
      return response.data.success;
    }

    return response.data.success;
  } catch (error) {
    //console.error('Error fetching skills:', error);
    return [];
  }
};