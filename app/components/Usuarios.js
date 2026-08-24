'use client'
import { useState, useEffect } from 'react';

export default function Usuarios() {
    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
    let ativo = true;
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json())
        .then(json => { if (ativo) { setDados(json); setCarregando(false); }})
        .catch(e => { if (ativo) { setErro(e.message); setCarregando(false); }});
    return () => { ativo = false; };
    }, []);

    if (carregando) return <p>Carregando...</p>;
    if (erro) return <p>Erro: {erro}</p>;

    return (
    <ul>
        {dados.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
    )
}

