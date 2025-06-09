import React, {useState, useEffect, Component} from "react";

export default () => {


    const [valor,  setValor] = useState(0)

    function incremento(){
        setValor(valor + 1)
    }

    useEffect(() => {

        console.log('Componente iniciado')
    },[]) // vazio executa somente uma vez

 

    return(
        <>

            <h3>useEffect</h3>
            <button onClick={incremento} >Incremento</button>
            <h3>{valor}</h3>
        </>
    )

}
// aula 29