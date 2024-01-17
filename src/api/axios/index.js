import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json;",
    Accept: "application/json",
  },
});
