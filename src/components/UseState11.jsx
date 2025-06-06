import React, { useState } from "react";
import "./UseState11.css";

export default () => {

  const [state, setState] = useState(true)
   const class1 = 'classUm';
   const class2 = 'classDois';


  return (
    <>
      <h3>Condicional rendering - change css class</h3>
      <button onClick={() => setState(!state)} >Alterar Paragrafo</button>
      <p className={`paragrafo ${state ? class1 : class2}`}>Teste que vai alterar</p>
   
    </>
  );
};
// licao 24