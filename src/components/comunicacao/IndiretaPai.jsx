import React, { useState } from "react";
import Indiretafilho from './Indiretafilho'



export default props => {
    // const [a,b] = [1, 2] (sendo 1 array e 2 funcao)
    const [nome, setNome]= useState('?')
    const [idade, setIdade]= useState(0)
    const [nerd, setNerd]= useState(false)

    function fornecerInfo(nome, idade, nerd) {
        setNome (nome)
        setIdade(idade)
        setNerd(nerd)
        console.log(nome,idade,nerd)
    }

    return (
        <div>
            
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{nerd ? 'verdadeiro' : 'falso'} </span>
            </div>
            <Indiretafilho quandoClicar={fornecerInfo}></Indiretafilho>
        </div>
    )
}