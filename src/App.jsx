/*export function App(){
    return(

        <>
           <h3>Ola mundo!</h3>
        </>
    )
}

export function Button(){
    
      return(
        <>
         <h3>Button</h3>
         </>
      )
      
    
} 

/*
import React from "react"

//components

import Button from "./components/Button"
import Table from "./components/Table"
import Image from "./components/view/Image"
import Data from "./components/Data"
import './App.css';
import Aticle from './components/Article'; //importando o componente Article

function App(){

  let artigos = [
    {id:1 ,titulo: 'um' , subtitulo : 'um sub'},
    {id:2 ,titulo: 'dois', subtitulo: 'dois sub'},
    {id:3 ,titulo: 'tres', subtitulo: 'tres sub'},
    {id:4 ,titulo: 'quatro', subtitulo: 'quatro sub'},
    {id:5 ,titulo: 'cinco', subtitulo: 'cinco sub'},
  ]

  let conteudo = artigos.map(v_artigos => < Aticle key={v_artigos.id} titulo={v_artigos.titulo}
     subtitulo={v_artigos.subtitulo}/>) 

  return(
    <>
        <h3>Teste de componentes</h3>
        <Button/>
        <Table></Table>
        <Image></Image>
        <Data></Data>
        {conteudo}
       

    </>

  )

}     

export default App  */
import React from "react";
import { useState } from "react";
import HooksState from "./components/UseState01";

export default () => {

  return (
    <>
     <h1>react Hooks</h1>
     <HooksState/>
     
    </>
  );
};
