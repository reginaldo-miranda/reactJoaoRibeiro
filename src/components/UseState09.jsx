import React, { useState } from "react";

export default () => {
  const [login, setLogin] = useState(false);
  const [btnText, setBtnText] = useState("Login");

  return (
    <>
      <h3>Condicional rendering - fake Login</h3>
      <button
        onClick={() => {
          setLogin(!login);
          setBtnText(login ? "Login" : "Logout");
        }}
      >
        {btnText}
      </button>

      {login && <p>Usuario logado</p>}
    </>
  );
};
