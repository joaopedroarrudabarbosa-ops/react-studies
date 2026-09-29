export default function ListUsuarios () {

    const usuarios = [
    {
        nome: "João",
        email: "joao@email.com",
        telefone: "15999999999"
    },
    {
        nome: "Lucas",
        email: "lucas@email.com",
        telefone: "15888888888"
    },
    {
        nome: "Diogo",
        email: "diogo@email.com",
        telefone: "15777777777"
    }
]

    const listUsuarios = usuarios.map((usuario) => {
        return (
            <div key={usuario.email}>
                <p>{usuario.nome}</p>
                <p>{usuario.email}</p>
                <p>{usuario.telefone}</p>
                <br />
            </div>
        )
    })
    return (
        <div>
            <h2>Lista de usuarios</h2>
            <br />
            {listUsuarios}
        </div>
    )
}