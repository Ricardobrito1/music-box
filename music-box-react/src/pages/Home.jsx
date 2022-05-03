import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImgNav from "../html-css-template/imagens/sound-waves-pink.png";
import Menu from "../components/ImgNav";

export default () => {
    const navigate = useNavigate();
  return (
      
    <>
      <Menu />
      <div className="container index">
        <div className="index-content">
          <div className="box-text-index">
            <div className="info-index">
              <p className="display">a música certa para o seu mood</p>
              <p className="subtitle">
                organize suas músicas preferidas por categorias e aproveite cada
                batida
              </p>
            </div>
            <div className="img-index"></div>
            <button onClick={() => navigate("/musicas")} className="btn">começar</button>
          </div>
          <img src={ImgNav} alt="" className="index-img" />
        </div>
      </div>
    </>
  );
};
