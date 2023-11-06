import React from "react";
import Indiretafilho from './Indiretafilho'



export default props => {

    let nome = '?'
    let idade = 0
    let nerd = false 

    function fornecerInfo(nomeParam, idadeParam, nerdParam) {
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam
        console.log(nerdParam)
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