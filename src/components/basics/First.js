//COMPONENTES FUNCIONAIS => dependem de funcao

import React from "react";
//sem isso o arquivo nao entende JSX

export default function First() {
  const msg = "Seja bem vindx!";
  return (
    <div>
      <h2>Primeiro Componente</h2>
      <p> {msg} </p>
    </div>
  );
}

// a funcao pode ser anonima, sem nome que nao tem problema
// nao esquecer do parenteses no return senao ele nao roda a div, da erro
