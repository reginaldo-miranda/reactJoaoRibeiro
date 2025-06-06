import React, { useState } from "react";


export default () => {

  const [text , setText] = useState('');
  const [count, setCount] = useState(0);
  function aumentar(a){
    setCount(v => v + a);
    
   }
    

  return (
    <>
      <h3>input date </h3>
      <br/>
      <input type="text" vale={text} onChange={(e) => setText(e.target.value ,  aumentar(1))}  />
      <p>{count}</p>
      <p>{text}</p>
      <h3>{text}</h3>

  
    </>
  );
};
// aula 26