import React from "react";
import { useState } from "react";

export default () => {
  const tmp = {
    nome: "",
    apelido: "",
    cidade: "",
    email: "",
  };

  const [user, setUser] = useState(tmp);

  return (
    <>
      <h3>Exercicio state08</h3>
      <br/>
      <ul>
        <li>Nome: {user.nome}</li>
        <li>Apelido: {user.apelido } </li>
        <li>Cidade: {user.cidade} </li>
        <li>Email: {user.email} </li>
      </ul>
      <button onClick={() =>{
        const c = {...user}
        c.nome = "João"
        setUser(c)

      }}>Nome:</button>
      <button onClick={() =>{
        const c = {...user}
        c.apelido = "Miranda"
        setUser(c)

      }}>Apelido:</button>
      <button onClick={() =>{
        const c = {...user}
        c.cidade = "Limeira"
        setUser(c)


      }}>Cidade:</button>
      <button onClick={() =>{
        const c = {...user}
        c.email = "joao.miranda@lms.com"
        setUser(c)

      }}>Email:</button>
    </>
  );
};
