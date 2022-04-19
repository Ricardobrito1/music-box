import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemMusica from "../components/ItemMusica";
import ImgNav from "../components/ImgNav";
import api from "../service/api";

function Musicas() {
  const navigate = useNavigate();
  const [musicas, setMusica] = useState([]);
  useState(() => {
    api
      .get()
      .then((res) => setMusica(res.data))
      .catch((err) => console.log(err));
  }, []);

  function irPagAdd() {
    navigate("/add");
  }
  return (
    <>
      <ImgNav />

      <div className="container">
        <div className="filter">
          <button className="btn" onClick={irPagAdd}>Adicionar</button>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">
          {musicas.map((musica) => (
            <ItemMusica
              musica={musica.musica}
              artista={musica.artista}
              genero={musica.categoria}
              ano={musica.ano}
              imagem={musica.imagem}
              id={musica.id}
              key= {musica.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Musicas;
