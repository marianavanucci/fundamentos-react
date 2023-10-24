import React from "react";
// import React que faz o arquivo entender JSX, sem ele náo funciona
import ReactDOM from "react-dom/client";
// import ReactDOM faz com que o id= root funcione
import "./index.css";
// importa o arquivo .css
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const tag = <strong>Olá React!!</strong>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div> {tag} </div>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

reportWebVitals();
