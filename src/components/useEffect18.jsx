import React, { useState, useEffect, useRef } from "react";

export default () => {

  const [valor, setValor] = useState(0);
  const rendInicial = useRef(true);

  function incremento() {
    setValor(valor + 1)
  };

  useEffect(() => {
    if (rendInicial.current) {
      rendInicial.current = false;
    } else {
      console.log("O valor alterado ");
    }
  },[valor]);

  return (
    <>
      <h3>useEffect</h3>
      <button onClick={incremento}>Incremento</button>
      <h3>{valor}</h3>
    </>
  );
};
// aula 31
