import React from "react";
import './UseState04.css'
import UseState04a from './UseState04a';

export default () =>{
    return(
        <>
            <h4>Exercicio useState 04</h4>
            <div className="layout">
                <UseState04a unidade={1}/>
                <UseState04a unidade={5}/>
                <UseState04a unidade={10}/>
            </div>
        </>
    )
}