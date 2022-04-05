import React from "react";
import LogoVerde from "../html-css-template/imagens/logo-verde.png";
import Avatar from "../html-css-template/imagens/avatar.png"
export default () =>{
    return( 
<nav>
    <div className="container">
        <img src={LogoVerde} alt="Logo" className="logo" />
        <img src={Avatar} alt="Avatar" className="avatar" />
    </div>
</nav>
    );}