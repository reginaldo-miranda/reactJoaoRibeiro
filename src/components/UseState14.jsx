import React, { useState } from "react";


export default () => {

  const [text , setText] = useState('');
  const [nome, setNome] = useState([]);

    

  return (
    <>
      <h3>input date </h3>
      <br/>
      <input type="text" vale={text} onChange={(e) => setText(e.target.value )}  />
      <button  onClick={inserir} >Inserir</button>
      
  
    </>
  );
};
// aula 27