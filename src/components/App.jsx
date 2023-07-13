import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Cripto from "./Cripto";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  console.log("" + API_URL);
  const [criptos, setCriptos] = useState();

  useEffect(() => {
    //fetch("https://api.coincap.io/v2/assets")
    axios
      .get(`${API_URL}assets`)
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

  if (!criptos) return <span>Cargando...</span>;

  return (
    <div className="app-container">
      <h1>Lista Monedas</h1>
      <div className="cripto-container">
        {criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => (
          <Cripto
            key={id}
            name={name}
            priceUSD={priceUsd}
            symbol={symbol}
            changePercent24Hr={changePercent24Hr}
          ></Cripto>
        ))}
      </div>
    </div>
  );
}

export default App;
