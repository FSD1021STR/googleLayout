import React from "react";
import "./googleLayout.css";

export default function GoogleLayout() {
    return(
        <div className="container">
            <div className="header">
                <button>gmail</button>
                <button>images</button>
                <button>settings</button>
            </div>
            <div className="body">
                <div className="img"/>
                <input placeholder="Serach Google..."></input>
                <button>Buscar</button>
                <button>Voy a tener suerte</button>                          
            </div>
            <div className="footer">
                <p>All rights reserved</p>
                <button className="button">customize</button>
            </div>
        </div>
    )
}