import React from 'react'

import './App.css'

import Comp from "./components/basics/First";

import CompParametro from "./components/basics/ComParametro";

import Card from './components/layout/Card';
import Familia from './components/basics/Familia';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './condicional/ParOuImpar';
import UsuarioInfo from './condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';

const tag = <strong>Olá React!!</strong>;


//Componente React só renderiza se for 1 pai com vários filhos. Aqui tem vários filhos sem pai. Vc pode colocar OU:


function App () {
  return (
    <div className='App'  id='app' >
        <h1>FUNDAMENTOS REACT</h1>

        <div className='Cards'>
        <Card
        title= "Primeiro Componente" color="#FA6900"
        >
          <Comp></Comp>
        </Card>
        
        <Card
        title= "Componente com Paramêtro" color="FF00CC"
        >
                  <CompParametro
          titulo="Segundo Componente"
          subtitulo="Subtitulo do segundo componente"
          nome="Pedro Silva"
          nota={9.5}
              ></CompParametro>
          </Card>

          <Card
        title= "Componente com Filhos" color="FF00DD"
        >
              <Familia sobrenome="Ferreira"></Familia>
          </Card>

          <Card
        title= "Repeticao" color="FF4C65"
        >
              <ListaAlunos></ListaAlunos>
          </Card>

          <Card
        title= "Repeticao" color="FF4C65"
        >
              <TabelaProdutos></TabelaProdutos>
          </Card>

          <Card
        title= "Condicional" color="FF4C65"
        >
              <ParOuImpar numero={20}></ParOuImpar>
              <UsuarioInfo usuario={{ nome: 'Fernando' }} ></UsuarioInfo>
              <UsuarioInfo usuario={{ email: 'fe@gmail.com' }} ></UsuarioInfo>
          </Card>

          <Card
        title= "Comunicacao Direta" color="FF4C65"
        >
          <DiretaPai></DiretaPai>
          </Card>

          <Card
        title= "Comunicacao Indireta" color="FF4C65"
        >
          <IndiretaPai></IndiretaPai>
          </Card>

          <Card
        title= "Formulario" color="FF4C65"
        >
          <Input></Input>
          </Card>

          <Card
        title= "Contador" color="FF4C65"
        >
          <Contador numeroInicial={10} ></Contador>
          </Card>
        </div>

        


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