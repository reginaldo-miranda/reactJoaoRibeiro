export default function Data(){
  let nome = "regi"

  let propriedadeCliente = {
     nomecli: "nao e o regi",
    email: "regi@gmail.com"
  }

  let a = 120
  let b = 220

  function soma(a,b){
    return a+b
  }
    return(
       <>
       <p>meu nome e {nome}</p>
       <p> {propriedadeCliente.nomecli}</p>
       <p>{propriedadeCliente.email}</p>

       <p> a soma e {soma(a,b)}</p>
  
       </>
        
    )
}