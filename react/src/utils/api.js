import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

export const setAuthToken = (token) => {
  if (token)
    api.defaults.headers.common['Authorization'] = "Token " + token
  else
    delete api.defaults.headers.common['Authorization']
}
