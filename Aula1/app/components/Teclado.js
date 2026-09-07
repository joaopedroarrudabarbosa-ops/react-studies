'use client'
import { useState, useEffect } from 'react';

export default function Teclado() {
    const [ultimaTecla, setUltimaTecla] = useState('')

    useEffect(() => {
    const onKey = (e) => setUltimaTecla(e.key);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    }, []);

    return <p>Última tecla: {ultimaTecla}</p>
}

