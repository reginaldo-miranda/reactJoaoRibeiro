import React, { useRef } from "react";

export default () => {
  const valor = useRef(null)
  function incremento(){
    valor.current = valor.current + 1
    console.log(valor.current)
  }

  console.log('componente reinderizado')

return(
  <>
  <h3>React Hooks - useRef</h3>
  <p>Valor: {valor.current}</p>
  <button onClick={incremento} >Incremento</button>
  </>
)

};

// aula 28
