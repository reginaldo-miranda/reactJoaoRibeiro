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
      
    
} */
import React from "react"

//components

import Button from "./components/Button"
import Table from "./components/Table"
import Image from "./components/view/Image"
import Data from "./components/Data"
import './App.css';
import Aticle from './components/Article'; //importando o componente Article

function App(){
  return(
    <>
        <h3>Teste de componentes</h3>
        <Button/>
        <Table></Table>
        <Image></Image>
        <Data></Data>
        <Aticle titulo='noticia um' subtitlo='sub um'></Aticle>
        <Aticle titulo='noticia dois' subtitlo='sub 2'></Aticle>

    </>

  )

}     

export default App