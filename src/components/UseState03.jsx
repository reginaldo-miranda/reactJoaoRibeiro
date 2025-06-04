import { useState } from "react"

export default () =>{

    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);

    function diminuir1(){
        setValor1(valor1 - 1);
    }

    function aumentar1(){
        setValor1(valor1 + 1);
    }

    //-----------------------------
    
    function diminuir2(){
        setValor2(valor2 - 1);
    }

    function aumentar2(){
        setValor2(valor2 + 1);
    }




         return (
        <>
            <h1>useState exercicio 1 useState03</h1>
            <p>{valor1}</p>
            <button onClick={diminuir1}>-</button>
            <button onClick={aumentar1}>+</button>
            <hr/>
            <p>{valor2}</p>
            <button onClick={diminuir2}>-</button>
            <button onClick={aumentar2}>+</button>
            <hr/>
            <p>Resultado do {valor1} X {valor2} = {valor1 * valor2}</p>
        </>
     )
}