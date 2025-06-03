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
import Image from "./components/view/image"
import Data from "./components/Data"

function App(){
  return(
    <>
        <h3>Teste de componentes</h3>
        <Button/>
        <Table></Table>
        <Image></Image>
        <Data></Data>
    </>

  )

}     

export default App