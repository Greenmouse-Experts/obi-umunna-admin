import axios from "axios";
import { getLocalToken } from "./helpers";

const requestAutorization = () => {
  const token = getLocalToken("obi_token");
  return `Bearer ${token}`;
};
console.log(requestAutorization());
export const Custom = axios.create({
  baseURL: "https://obi.victornwadinobi.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: requestAutorization(),
  },
});

export const CustomAdd = axios.create({
  baseURL: "https://obi.victornwadinobi.com/api",
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: requestAutorization(),
  },
});
