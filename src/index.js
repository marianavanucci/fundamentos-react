import React from "react";
// import React que faz o arquivo entender JSX, sem ele náo funciona
// tem que ter esse nome exatamente, pois é uma pasta chamada React dentro do nodemodules.
import ReactDOM from "react-dom/client";
// import ReactDOM faz com que o id= root funcione
import "./index.css";
// importa o arquivo .css

// Arqivo App importado mas parece q n existe? ahh tava App. App PONTO
import App from "./components/basics/App";

// React renderiza o componente App na div com id root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
