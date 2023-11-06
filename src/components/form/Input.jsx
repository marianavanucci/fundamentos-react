import React, { useState } from "react";
import './input.css'

export default props => {
    const [valor, setValor] = useState('Inicial')

    function quandoMudar (e){
        setValor(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className="Input">
            <input value={valor} onChange={quandoMudar} />
            <input value={valor} readOnly />
            <input value={undefined} readOnly />
        </div>
    )
}