import React from "react";
// import React que faz o arquivo entender JSX, sem ele náo funciona
// tem que ter esse nome exatamente, pois é uma pasta chamada React dentro do nodemodules.
import ReactDOM from "react-dom/client";
// import ReactDOM faz com que o id= root funcione
import "./index.css";
// importa o arquivo .css
import Comp from "./components/basics/First";
import CompParametro from "./components/basics/ComParametro";

import App from "./App";
//pode deletar se quiser
import reportWebVitals from "./reportWebVitals";
//pode deletar se quiser

const tag = <strong>Olá React!!</strong>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <div> {tag} </div>
  <div>
    <Comp></Comp>
    <CompParametro
      titulo="Segundo Componente"
      subtitulo="Subtitulo do segundo componente"
      nome="Pedro Silva"
      nota={9.5}
    ></CompParametro>
  </div>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

reportWebVitals();
