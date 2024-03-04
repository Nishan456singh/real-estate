// api.ts
import axios from 'axios';

export const sendContactForm = async (name: string, email: string, message: string) => {
  try {
    const response = await axios.post('/api/contact', { name, email, message });
    return response.data;
  } catch (error) {
    throw error;
  }
};