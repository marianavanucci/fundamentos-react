import React from 'react'

// ESTOU NA PASTA src/components/basics/
// SE VC ESCREVER ASSIM de dentro desse arquivo ele vai procurar em:

// ./components/basics/components/basics/First
// import Comp from "./components/basics/First"; <- O SEU
import Comp from "./First";

//NO REACT o import da mesma pasta é ./NomeDoArquivo
//Qdo vc coloca um import procurando um arquivo em ./AlgumaCoisa/OutraCoisa ele vai procurar
//e essa pasta n existe, eeses 2 imports de Comp e CompParametro deviam estar ./First e ./Comparametro
//pra n procurar em RAIZ/src/components/basics/

//ah tao sim. então é pq vc tá dando um endereço errado mesmo._
//é como se vc tivesse dizendo assim:
//eron em vez de procurar ComParametro no mesmo predio q ele a partir dde um endereço, sendo q ta no mesmo lugar q ele

// import ComParametro from './First' -> PLIM
// import CompParametro from "./components/basics/ComParametro"; <- O SEU
import CompParametro from "./ComParametro";

const tag = <strong>Olá React!!</strong>;


//Componente React só renderiza se for 1 pai com vários filhos. Aqui tem vários filhos sem pai. Vc pode colocar OU:


function App () {
  return (
    <div id='app' >
      <Comp></Comp>
      <CompParametro
        titulo="Segundo Componente"
        subtitulo="Subtitulo do segundo componente"
        nome="Pedro Silva"
        nota={9.5}
      ></CompParametro>
    </div>
  )
}

export default App;

//OU tudo dentro de uma div

// export default _ => (
//   // <div> {tag} </div>
//   <div>
//     <div id='app' >
//     <Comp></Comp>
//     <CompParametro
//     titulo="Segundo Componente"
//     subtitulo="Subtitulo do segundo componente"
//     nome="Pedro Silva"
//     nota={9.5}
//     ></CompParametro>
//     </div>
//   </div>
// );



//OU tudo dentro de um "React Fragment", famosa tag vazia. 

// export default _ => (
//   // <div> {tag} </div>
//   <>
//     <div id='app' >
//     <Comp></Comp>
//     <CompParametro
//     titulo="Segundo Componente"
//     subtitulo="Subtitulo do segundo componente"
//     nome="Pedro Silva"
//     nota={9.5}
//     ></CompParametro>
//     </div>
//   </>
// );




//mas q tem uns idiota q escreve assim:

// export default _ => (
//   // <div> {tag} </div>
//   <React.Fragment>
//     <div id='app' >
//     <Comp></Comp>
//     <CompParametro
//     titulo="Segundo Componente"
//     subtitulo="Subtitulo do segundo componente"
//     nome="Pedro Silva"
//     nota={9.5}
//     ></CompParametro>
//     </div>
//   </React.Fragment>
// );