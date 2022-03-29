
import React, {useState} from 'react';
import Votacao from './pages/Votacao';
import api from "./service/api"
function App() {
  const [data, setData] = useState([]);
  function listar(){

  api.get().then(res =>{
    console.log(res.data)
    setData(res.data)
  }).catch(error =>{
    console.log(error)
  });
  }
  return (
    <div>
      <>
          <Votacao/>
        
      {/* <button onClick={listar}>listar</button>
      <ul>
        {data.map((value)=> (
          <li key={value.id}>{value.musica}: {value.ano}</li>
        )
         )}
      </ul> */}
      </>
      
      </div>
  );
}

export default App;
