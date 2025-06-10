import React, { useState, useEffect, Component } from "react";

export default () => {
  const [valor, setValor] = useState(0);
  const [nome, setNome] = useState('')

  function incremento() {
    setValor(valor + 1);
  }

  function definirNome(){
    setNome('reginaldo')
  }

  useEffect(() => {
    console.log("Componente no arranque(no start) do componente");
  }, []); // vazio executa somente uma vez

  useEffect(() => {
    console.log("alteracao do valor");
  }, [valor]);

  useEffect(()=>{
    console.log('executado o nome')
  },[nome])

  useEffect(() =>{console.log('alterado nome ou valor')}, [nome, valor])

  return (
    <>
      <h3>useEffect</h3>
      <button onClick={incremento}>Incremento</button>
      <h3>{valor}</h3>
      <button onClick={definirNome}>Definir nome</button>
      <h3>{nome}</h3>
    </>
  );
};
// aula 30
