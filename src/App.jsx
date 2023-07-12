import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css"

function App() {

   const API_URL = import.meta.env.VITE_API_URL

  //console.log(""+API_URL);
  const [criptos, setCriptos] = useState();

  useEffect(() => {
    //fetch("https://api.coincap.io/v2/assets")
    axios.get(`${API_URL}assets`)
      //.then((resp) => resp.json())
      //Axios devuelve objeto data
      .then((data) => {
        //console.log(data);
        setCriptos(data.data.data);
        //console.log(data);
      })
      .catch(() => {
        console.error("La petición falló");
      });
  }, []);


  if(!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista Monedas</h1>
      <ol>
        {criptos.map(({id, name, priceUsd }) => (
          <li key={id}>
            Moneda: {name} Precio: {priceUsd}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
