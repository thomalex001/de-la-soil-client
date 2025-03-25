import axios from 'axios';
import { AUTH } from './auth';

const getHeaders = () => ({
  headers: { Authorization: `Bearer ${AUTH.getToken()}` }
});

const ENDPOINTS = {
  register: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register/`,
  login: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login/`,
  allProducts: `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/`,
  createUserCart: `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/`,
  cloudinary: `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
  // search: (query) => `/api/books/search?q=${query}`,
  // updateUserCart: (cartId) => `/api/cart/${cartId}/`,
  userCart: (cartId) => `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/${cartId}/`,
  // deleteUserCart: (cartId) => `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/${cartId}/`
};

const GET = (endpoint, headers) =>
  headers ? axios.get(endpoint, headers) : axios.get(endpoint);
const POST = (endpoint, body, headers) =>
  headers ? axios.post(endpoint, body, headers) : axios.post(endpoint, body);
const PUT = (endpoint, body, headers) => axios.put(endpoint, body, headers);
const DELETE = (endpoint, headers) => axios.delete(endpoint, headers);

export const API = { GET, POST, PUT, DELETE, ENDPOINTS, getHeaders };
