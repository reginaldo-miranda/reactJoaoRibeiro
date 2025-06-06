import React, { useState } from "react";

export default () => {
 
 const [tab, setTab] = useState(1)

  return (
    <>
      <h3>Condicional rendering - Visible table</h3>
      <select onChange={(e) => setTab(parseInt( e.target.value))}>
        <option value="1">tab 1</option>
        <option value="2">tab 2</option>
        <option value="3">tab 3</option>
      </select>

      {tab === 1 && <p>tab 1</p> }
      
      {tab ===2 && <p>tab 2</p>}
      
      {tab === 3 && <p>tab 3</p>}
   
    </>
  );
};
// licao 23