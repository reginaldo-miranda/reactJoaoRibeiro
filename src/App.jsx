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
import React, { useEffect } from "react";
//import { useState } from "react";
//import HooksState01 from "./components/UseState01";
//import HooksState02 from "./components/UseState02";
//import HooksState03 from "./components/UseState03";
//import HooksState04 from "./components/UseState04";
//import HooksState06 from "./components/UseState06";
//import HooksState07 from "./components/UseState07";
//import HooksState08 from "./components/UseState08";
//import HooksState09 from "./components/UseState09";
//import HooksState10 from "./components/UseState10";
//import HooksState11 from "./components/UseState11";
//import HooksState12 from "./components/UseState12";
//import HooksState13 from "./components/UseState13";
//import HooksState14 from "./components/UseState14";
//import HooksState15 from "./components/UseState15";
//import HooksState16 from "./components/UseRef16";
//import HooksEffect17 from "./components/useEffect17"
//import HooksEffect18 from "./components/useEffect18"
import HooksEffect19 from "./components/useEffect19"

export default () => {
  return (
    <>
      <h1>react Hooks</h1>
      {/* <HooksState01/>*/}
      {/*<HooksState02/>*/}
      {/*<HooksState03/>*/}
      {/*<HooksState04/>*/}
      {/*<HooksState05/>*/}
      {/*<HooksState06/>*/}
      {/*<HooksState07/>*/}
      {/*<HooksState08/>*/}
      {/*<HooksState09 />*/}
      {/*<HooksState10 />*/}
      {/*<HooksState11 />*/}
      {/*<HooksState12 />*/}
      {/*<HooksState13 />*/}
      {/*<HooksState14/>*/}
      {/*<HooksState15/>*/}
      {/*<HooksState16/>*/}
      {/*<HooksEffect17>*/}
      {/*<HooksEffect18/>*/}
      <HooksEffect19/>

    </>
  );
};
