import React from "react";
import './Card.css';



export default props => {

    const estilo = {
        backgroundColor: props.color || '#F00'
    }
    
    return(
        <div className="Card" style={estilo}>
            <div className="Title"> {props.title} </div>
            <div className="Content"> {props.children} </div>
        </div>
    );
} ;