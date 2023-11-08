import React, { Component} from "react";

// como o componente é baseado em classe, o this sempre esta viculado a ele

class Contador extends Component {
    state ={
        numero: this.props.numeroInicial
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + 1
        });
    }




    render (){
        return (
            <div><h2>Contador</h2>
            <h3>{this.state.numero}</h3>
            <button onClick={this.inc}>+</button>
            </div>
        )
    }
}

export default Contador