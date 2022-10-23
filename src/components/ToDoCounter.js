import React from 'react';
import './TodoCounter.css';
import openbanking from '../assets/img/openbanking.png'


function TodoCounter () {
    return (
        <div>
        <h1 className="TodoCounter"> Bienvenido a Prometeo Openbanking 🔥</h1>
        <img src = {openbanking} width="700" height="300" className="TodoImg" alt= "prometeo imagen"/>
        <p className="TodoBank"> Seleccione su banco:</p>
        </div>
    )
}

export { TodoCounter } ;