import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CriptoPage = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const params = useParams();
  const [cripto, setCripto] = useState({});
  const [historial, setHistorial] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}assets/${params.id}`)
      .then((data) => {
        setCripto(data.data.data);
      })
      .catch((e) => console.error(e));
  }, []);


  useEffect(() => {
    axios
      .get(`${API_URL}assets/${params.id}/history?interval=d1`)
      .then((data) => {
        setHistorial(data.data.data);
      })
      .catch((e) => console.error(e));
  }, []);

//<p>{JSON.stringify(cripto)}</p>
  //<span>{<p>{JSON.stringify(historial)}</p>}</span>

  return (
    <>
      <h1>{params.id}</h1>
      <div className="info">
        <ul>
          <li>
            <span className="label">Nombre: </span> {cripto.name}
          </li>
          <li>
            <span className="label">Simbolo: </span> {cripto.symbol}
          </li>
        </ul>
      </div>
      <h2>HISTORIAL</h2>
      <table>
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody>
        {
            historial.map(({date, priceUsd, time})=>(
                <tr key={time}>
                    <td>{date}</td>
                    <td>{priceUsd}</td>
                </tr>
            ))
        }
      </tbody>
      </table>
      
    </>
  );
};

export default CriptoPage;
