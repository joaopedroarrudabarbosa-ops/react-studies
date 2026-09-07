'use client'

function Saudacao ({nome="visitante"}) {
    const saudar = () => {
        return nome
    }
    return (
        <h1>Olá, {saudar()}</h1>
    )
}

export default Saudacao