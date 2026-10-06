import Button from "./Button"

export default function AlunoItem ({nome, curso, semestre, id, onExcluir}) {
    return (
        <div>
            <h3>Nome: {nome}</h3>
            <p>Curso: {curso}</p>
            <p>Semestre: {semestre}</p>
            <p>ID={id}</p>

            <Button 
                type="button"
                text="Excluir"
                onClick={() => onExcluir(id)}
            />
        </div>
    )
}