import React from "react";
import "./googleLayout.css";

export default function GoogleLayout() {
    return(
        <div className="container">
            <div className="header">
                <div>
                    <button>gmail</button>
                    <button>images</button>
                    <button>settings</button>
                </div>
            </div>
            <div className="body">
                <div className="img"/>
                <input placeholder="Serach Google..."></input>
                <div>
                    <button>Buscar</button>
                    <button>Voy a tener suerte</button>
                </div>           
            </div>
            <div className="footer">
                <p>All rights reserved</p>
                <button className="button">customize</button>
            </div>
        </div>
    )
}