import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 1d6f8fde7d27bf9e3902940f295637193ca875b0b4865b1fe31266a1b9f81fec'
  }
});