import React from "react";
import { Link } from "react-router-dom";
import LogoVerde from "../html-css-template/imagens/logo-verde.png";
import Avatar from "../html-css-template/imagens/avatar.png"
export default () =>{
    return( 
<nav>
    <div className="container">
        <Link to="/"> <img src={LogoVerde} alt="Logo" className="logo" /></Link>
       
        <img src={Avatar} alt="Avatar" className="avatar" />
    </div>
</nav>
    );}