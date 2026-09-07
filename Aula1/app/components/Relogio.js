'use client'

import { useState, useEffect } from 'react';

export default function Relogio() {

    const [hora, setHora] = useState(null);

    useEffect(() => {

        setHora(new Date());

        const id = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return () => clearInterval(id);

    }, []);

    if (!hora) {
        return <p>Carregando...</p>;
    }

    return <p>{hora.toLocaleTimeString()}</p>;
} 