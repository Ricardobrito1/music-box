import React from "react";

function Musicas() {
    return(
        <>
         <div className="container">
        <div className="filter">
            <button className="btn">Adicionar</button>
        </div>
    </div>

    <div className="container">
        <div className="music-boxes">

            <div className="card-music">
                <div className="icons">
                    <img src="../imagens/edit-icon.png" alt="" />
                    <img src="../imagens/delete-icon.png" alt="" />
                </div>
                <div className="info-music">
                    <p>
                        <strong className="card-title">música: </strong>
                        <input className="input-music-enable" type="text" value="Musica" />
                    </p>
                    <p>
                        <strong className="card-title">artista: </strong>
                        <input className="input-music-enable" type="text" value="Teste" />
                    </p>
                    <p>
                        <strong className="card-title">categoria: </strong>
                        <input className="input-music-enable" type="text" value="Teste" />
                    </p>
                    <p>
                        <strong className="card-title">ano: </strong>
                        <input className="input-music-enable" type="text" value="Teste" />
                    </p>
                    <button className="btn-salvar-disabled">Salvar</button>
                </div>
            </div>

           

        </div>
    </div>
        </>
    )
}
export default Musicas;