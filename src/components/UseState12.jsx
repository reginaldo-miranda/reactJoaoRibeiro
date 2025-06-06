import React, { useState } from "react";
import CampA from "./UseState12a";
import CampB from "./UseState12b";

export default () => {
  const [camp, setCamp] = useState(true);

  return (
    <>
      <h3>Condicional rendering - troca de componenste</h3>
      <button onClick={() => setCamp(!camp)}>Alterar Componenste</button>
      {camp ? <CampA /> : <CampB />}
    </>
  );
};
// aula 25