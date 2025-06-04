import { useState } from "react"

export default () =>{

    const [count, setCount] = useState(0);

    function diminuir(){
      setCount(v => v-1);

    }

    function aumentar(){

        setCount(v => v+1)
    }

    function diminuir_valor(a){
        setCount(v => v-a);
    }

     return (
        <>
            <h1>useState</h1>
            <p>Valor: {count}</p>
            <button onClick={() => diminuir_valor(10)}>Diminuir Valor</button>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>
        </>
     )
}