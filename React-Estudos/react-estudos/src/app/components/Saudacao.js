// Sem desestruturação
// export default function Saudacao (props) {
//     return (
//         <div>
//             <h2>Bem-vindo {props.nome}</h2>
//             <h2>Idade: {props.idade} anos</h2>
//             <h2>Curso: {props.curso}</h2>
//         </div>
//     )
// }

// Com desestruturação
export default function Saudacao ({nome, idade, curso="Não encontrado"}) {
    return (
        <div>
            <h2>Bem-vindo {nome}</h2>
            <h2>Idade: {idade}</h2>
            <h2>Curso: {curso}</h2>
        </div>
    )
}