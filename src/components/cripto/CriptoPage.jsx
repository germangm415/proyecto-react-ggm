import { useParams } from "react-router-dom";
//import { parseFloatNumber } from "../../helpers/numbers";
import "./CriptoPage.css";
import usePetition from "../../hooks/UsePetition";
import CriptoInfo from "./info/CriptoInfo";
import CriptoHistorial from "./info/CriptoHistorial";

const CriptoPage = () => {
  const params = useParams();
  const [cripto, cargandoCripto]  = usePetition(`assets/${params.id}`);
  const [history1, cargandoHistory] = usePetition(`assets/${params.id}/history?interval=d1`);

  if (cargandoCripto || cargandoHistory) return <span>Cargando...</span>

  return (
    <div className="cripto-page-container">
      {cripto && <CriptoInfo cripto={cripto} />}
       {history1 && <CriptoHistorial history1={history1} />}
    </div>
  );
};

export default CriptoPage;
