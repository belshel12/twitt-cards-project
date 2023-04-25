import axios from 'axios';

axios.defaults.baseURL = 'https://6444fb2fb80f57f581ae99c3.mockapi.io';

export async function getUsers() {
  const response = await axios.get('/users');
  return response.data;
}

export const itemLoadStep = 4;
