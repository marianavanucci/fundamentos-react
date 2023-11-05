import React from "react";
import tabelaprodutos from "../../data/tabelaprodutos";

export default props => {
    console.log(tabelaprodutos)

    const tab = tabelaprodutos.map((tabelaprodutos) => {
        return (
            <tr key={tabelaprodutos.id}>
                <td>{tabelaprodutos.id} </td>
                <td>{tabelaprodutos.nome} </td>
                <td>R${tabelaprodutos.preco.toFixed(2)} </td>
            </tr>
        );
    });

    return (
        <div>
            <table border="0" >
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preco</th>
                </thead>
                <tbody>
                    {tab}
                </tbody>
            </table>

        </div>
    )


}