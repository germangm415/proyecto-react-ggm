import { useEffect, useState } from "react"

function App() {

  const [gatos, setGatos] = useState();

  useEffect(()=>{
    fetch("https://cataas.com/api/cats?tags=cute")
    .then((resp)=> resp.json())
    .then((data)=>{

      setGatos(data)
      //console.log(data);
    })
    .catch(()=>{
      console.error("La petición falló");
    })

  },[])
  

  return (
    <>
      <h1>Lista Gatos</h1>
      <ol>
        {gatos.map(({id,owner}) => {
          <li>ID: {id} Dueño: {owner}</li>
        })}

       
      </ol>
      
    </>
  )
}

export default App
