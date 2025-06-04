import React from "react";
import { useState } from "react";


export default ({unidade}) =>{
    const [valor, setValor] = useState(0);

    function decrementar(){
        setValor(old => old - unidade);
    }

    function incrementar(){
        setValor(old => old + unidade);
    }

    return(
        <>
          <button onClick={decrementar}>-</button>
          <h3>valor: <strong>{valor}</strong> </h3>
          <button onClick={incrementar}>-</button>
        </>
    )
}