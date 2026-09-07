'use client'
import {useState} from "react"

const Contador  = () => {
    const [valor, setValor] = useState(0) 

    function incrementar() {
    setValor(valor+2)
    }

    return (
        <div>
            <p>Valor: {valor}</p>
            <button onClick={incrementar}>Adicionar</button>
        </div>
    )
}

export default Contador