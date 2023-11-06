import React from "react";import Indiretafilho from './Indiretafilho'


export default props => {
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function (e) {
                    props.quandoClicar('Joao', 50, true)
                }
            }>Fornecer Informacoes</button>


        </div>
    )
}