import UserItem from "./UserItem"

export default function UserList ({usuarios}) {
    return (
        <div>
            {usuarios.map((usuario) => {
                return (
                    <UserItem 
                        key={usuario.email}
                        nome={usuario.nome}
                        email={usuario.email}
                        telefone={usuario.telefone}
                    />
                )
            })}
        </div>
    )
}