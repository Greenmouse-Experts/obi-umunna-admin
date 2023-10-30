import axios from "axios";

export const Custom = axios.create({
    baseURL: 'https://bripan.greenmouseacademy.com.ng/api/',
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('auth_token')}`
    }
  });

  export const CustomAdd = axios.create({
    baseURL: 'https://bripan.greenmouseacademy.com.ng/api/',
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('auth_token')}`
    }
  });