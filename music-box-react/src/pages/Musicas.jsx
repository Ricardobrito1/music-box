import React, { useEffect, useState } from "react";
import ItemMusica from "../components/ItemMusica";
import ImgNav from "../components/ImgNav";
import api from "../service/api";

function Musicas() {
  const [musicas, setMusica] = useState([]);
  useState(() => {
    api
      .get()
      .then((res) => setMusica(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ImgNav />

      <div className="container">
        <div className="filter">
          <button className="btn">Adicionar</button>
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
