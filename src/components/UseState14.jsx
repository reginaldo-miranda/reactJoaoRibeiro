import React, { useState } from "react";


export default () => {

  const [text , setText] = useState('');
  const [nome, setNome] = useState([]);

    function inserir(){
      try {
        
        setNome(prev => [...prev, text]);
        console.log('antes');
        setText('');
        console.log('depois')
      } catch (error) {
        console.log('erro nao foi possivel terminar')
      }
      
      
    }
    

  return (
    <>
      <h3>input date </h3>
      <br/>
      <input type='text' value={text} onChange={(e) => setText(e.target.value )}   />
      <button  onClick={inserir} >Inserir</button>
      <ul>
        {
          nome.map((data, index) => (
            <li key={index}>{data}</li>
            
          ))
        }

      </ul>
  
    </>
  );
};
// aula 27