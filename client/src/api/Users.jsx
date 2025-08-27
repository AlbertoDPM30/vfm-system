import { useState } from "react";
import axios from "axios";

export const Users = () => {
  const [userId, setUserId] = useState(null);

  const getUsers = async ({ id }) => {
    try {
      id ? setUserId(id) : setUserId(null);
      const endpoint = userId ? `/usuarios/id=${userId}` : "/usuarios";
      const response = await axios.post(`${URL}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener usuario", error.response.data.message);
      throw error.response.data;
    }
  };

  return { getUsers };
};
