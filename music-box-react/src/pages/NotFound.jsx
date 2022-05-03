import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../html-css-template/imagens/target-red.png";
export default () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="add-music">
          <div className="formulario">
            <h1>404</h1>

            <p className="subtitle">se perdeu? nada para ver por aqui...</p>
            <button onClick={() => navigate(-1)} className="btn">
              voltar
            </button>
          </div>

          <div className="img-lateral">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
