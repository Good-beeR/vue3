import axios from 'axios';

const baseDomain = 'https://5f8fed5ee0559c0016ad5be0.mockapi.io';
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
  headers: {}
});