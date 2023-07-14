//Importancia de Emmet 

import { Link } from "react-router-dom"

const Home = () =>{
    return(
        <>
            <h1>Hola, bienvenido a Mercado Criptomonedas</h1>
            <p>Conoce las 100 criptos mas utilizadas</p>
            <Link to="criptomonedas">Ver Criptomonedas</Link>
        </>
    )
}

export default Home