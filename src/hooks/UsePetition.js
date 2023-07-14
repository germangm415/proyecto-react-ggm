import axios from "axios";
import { useEffect, useState } from "react";

const usePetition = (endPoint) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [datos, setDatos] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}${endPoint}`)
      .then((data) => {
        setDatos(data.data.data);
      })
      .catch((e) => console.error(e));
  }, []);

  return datos;
};

export default usePetition;
