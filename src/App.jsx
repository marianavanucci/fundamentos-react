import React from 'react'

import Comp from "./components/basics/First";

import CompParametro from "./components/basics/ComParametro";

import Card from './components/layout/Card';


const tag = <strong>Olá React!!</strong>;


//Componente React só renderiza se for 1 pai com vários filhos. Aqui tem vários filhos sem pai. Vc pode colocar OU:


function App () {
  return (
    <div id='app' >
        <h1>FUNDAMENTOS REACT</h1>
        <Card
        title= "Primeiro Componente"
        >
          <Comp></Comp>
        </Card>
        
        <Card
        title= "Componente com Paramêtro"
        >
                  <CompParametro
          titulo="Segundo Componente"
          subtitulo="Subtitulo do segundo componente"
          nome="Pedro Silva"
          nota={9.5}
        ></CompParametro>
        </Card>



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