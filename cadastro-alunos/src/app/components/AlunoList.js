import AlunoItem from "./AlunoItem"

export default function AlunoList ({alunos, onExcluir}) {
    return (
        <div>
            {alunos.map((aluno) => {
                return (
                    <AlunoItem 
                        key={aluno.id}
                        nome={aluno.nome}
                        curso={aluno.curso}
                        id={aluno.id}
                        onExcluir={onExcluir}
                    />
                )
            })}
        </div>
    )
}