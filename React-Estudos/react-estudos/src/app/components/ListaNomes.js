export default function ListaNomes () {
    const nomes = ["João", "Lucas", "Diogo", "Vitor"]
    const listNomes = nomes.map((nome) => {
        return <p key={nome}>{nome}</p>
    })

    return (
        <div>
            <h2>Lista de nomes</h2>
            <h2>{listNomes}</h2>
        </div>
    )
}