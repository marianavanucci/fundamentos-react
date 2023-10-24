import React from "react"
//nao tinha travado sem, mas tem que colocar sempre

function ComParametro(props) {
    console.log(props)
    const sub = props.subtitulo
    const status = props.nota >= 7 ? 'APROVADO' : 'RECUPERACAO'
    return ( 
    <div>
        <h2>{ props.titulo }</h2>
        <h3>{ sub }</h3>
        <p> {props.nome} tem a nota {props.nota} e foi {status} </p>

    </div> 
    )
}

export default ComParametro;