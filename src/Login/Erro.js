import React from "react";
import { Link } from "react-router-dom";
import './style.css';


function Errado() {
    return (
        <div>
            <h1 className="msg-erro">Vish!! Tem certeza que é esse e-mail e senha? </h1>
            <br></br>
            <Link to="/Login" className='msg-erro'> Clique aqui e tente novamente. </Link>
        </div>
    )
}


export default Errado;