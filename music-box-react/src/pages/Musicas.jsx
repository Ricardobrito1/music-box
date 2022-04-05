import React from "react";
import ItemMusica from "../components/ItemMusica";
import ImgNav from "../components/ImgNav";


function Musicas() {
  return (
    <>
    <ImgNav/>
      
      <div className="container">
        <div className="filter">
          <button className="btn">Adicionar</button>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">
          <ItemMusica
          musica="Don´t Stop'Til You Get Enough"
          artista="Michael Jackson"
          genero = "Pop"
          ano={2009}
          id="1"
          />
            <ItemMusica
          musica="Ela Partiu"
          artista="Tim Maia"
          genero = "MPB"
          ano={1997}
          id="2"
          />
      
        </div>
      </div>
    </>
  );
}
export default Musicas;
