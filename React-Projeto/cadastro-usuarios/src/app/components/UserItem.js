export default function UserItem ({nome,email,telefone}) {
    return (
        <div>
            <h3>Nome: {nome}</h3>
            <p>Email: {email}</p>
            <p>Telefone: {telefone}</p>
        </div>
    )
}