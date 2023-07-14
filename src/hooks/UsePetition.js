import axios from "axios";
import { useEffect, useState } from "react";

const usePetition = (endPoint) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [datos, setDatos] = useState();
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}${endPoint}`)
      .then((data) => {
        setDatos(data.data.data);
        setCargando(false);
      })
      .catch((e) => {
        console.error(e);
        setCargando(false)
      });
  }, []);

  return [datos, cargando]
};

export default usePetition;
