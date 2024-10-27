import axios from "axios";

export const Services = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: "43f04d77eace534088e9f79300e39c31",
  },
});
