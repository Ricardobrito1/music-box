
import React, {useState} from 'react';
import Musicas from './pages/Musicas';
import api from "./service/api"
import './html-css-template/css/reset.css';
import './html-css-template/css/style.css';

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
          <Musicas/>
 
      </>
      
      </div>
  );
}

export default App;
