import React from "react";
import editIcon from '../html-css-template/imagens/edit-icon.png';
import deleteIncon from '../html-css-template/imagens/delete-icon.png'
export default (props) =>{
    return( <div className="card-music">
    <div className="icons">
        <img src={editIcon} alt="" />
        <img src={deleteIncon} alt="" />
    </div>
    <div className="info-music">
        <p>
            <strong className="card-title">música: </strong>
            <input className="input-music-enable" type="text" defaultValue={props.musica} />
        </p>
        <p>
            <strong className="card-title">artista: </strong>
            <input className="input-music-enable" type="text" defaultValue = {props.artista} />
        </p>
        <p>
            <strong className="card-title">categoria: </strong>
            <input className="input-music-enable" type="text" defaultValue={props.genero} />
        </p>
        <p>
            <strong className="card-title">ano: </strong>
            <input className="input-music-enable" type="text" defaultValue={props.ano} />
        </p>
        <button className="btn-salvar-disabled">Salvar</button>
    </div>
</div>);
   
}