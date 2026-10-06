import UserItem from "./UserItem"

export default function UserList ({usuarios, onExcluir}) {
    return (
        <div>
            {usuarios.map((usuario) => {
                return (
                    <UserItem 
                        key={usuario.id}
                        nome={usuario.nome}
                        email={usuario.email}
                        telefone={usuario.telefone}
                        id={usuario.id}
                        onExcluir={onExcluir}
                    />
                )
            })}
        </div>
    )
}