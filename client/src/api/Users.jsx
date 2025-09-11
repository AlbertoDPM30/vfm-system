import { useState } from "react";
import axios from "axios";

export const Users = () => {
  const [userId, setUserId] = useState(null);
  const URL = import.meta.env.VITE_API_URL;

  const getUsers = async ({ id }) => {
    try {
      id ? setUserId(id) : setUserId(null);
      const endpoint = userId ? `/usuarios/id=${userId}` : "/usuarios";
      const response = await axios.get(`${URL}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener usuario", error.response.data.message);
      throw error.response.data;
    }
  };

  const addUser = async (data) => {
    try {
      // const dataUsuario = data;
      console.log(data);
      const endpoint = "/usuarios";
      const response = await axios.post(`${URL}${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error("Error al obtener usuario", error);
      throw error.response.data;
    }
  };

  return { getUsers, addUser };
};
