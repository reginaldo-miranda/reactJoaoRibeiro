import React, { useState, useEffect } from "react";

export default () => {

const [paises, setPaises] = useState([])

// buscar paises da colecao

useEffect(() => {

 //fetch('https://restcountries.com/v3.1/all')
// fetch('https://restcountries.com/v3.1/independent?status=true')
fetch('https://restcountries.com/v3.1/translation/germany')
 .then(resposta => resposta.json())
 .then(dados => setPaises(dados))
},[])

console.log(paises)

  return (
    <>
      <h3>useEffect - listade paises api</h3>
       <ul>
          {paises.map(pais => <li key={pais.cca2}>{pais.name.commom}nome</li>)}
       </ul>
    </>
  );
};
// aula 32
