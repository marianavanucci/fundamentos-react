import React from "react";
import alunos from '../../data/alunos'

export default props => {
    console.log(alunos)

    const li1 = (
        <li>
            {alunos[0].id} {alunos[0].nome} -> {alunos[0].nota}
        </li>
    );

    const lis = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id} {aluno.nome} -> {aluno.nota}
            </li>
        );
    });

    return (
        <div>
            <ul>
                {li1}
                {lis}
                <li>Ana - 9.7</li>
                <li>Carlos - 7.7</li>
                <li>Daniel - 6.5</li>
            </ul>
        </div>
    )
}