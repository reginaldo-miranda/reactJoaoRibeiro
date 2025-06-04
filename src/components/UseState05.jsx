import React from "react";
import { useState } from "react";
import UseState05a from "./UseState05a";

export default() => {

    const [valor, setValor] = useState(0);

    function atualizarValor(){
        setValor(1000)
    }

    return(
        <>
            <h3>Exercicio state05</h3>
            <h3>Valor: <strong>{valor}</strong> </h3>
            <hr/>
            <UseState05a funcao={atualizarValor}/>
        </>
    )
}