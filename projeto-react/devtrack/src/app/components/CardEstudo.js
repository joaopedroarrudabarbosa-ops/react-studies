export default function CardEstudo ({materia, area, nivel, status}) {
    return (
        <div>
            <br />
            <h2>------------------------------------------------</h2>
            <br />
            <h2>{materia}</h2>
            <h2>Área: {area}</h2>    
            <h2>Nível: {nivel}</h2>  
            <h2>Status: {status}</h2>
        </div>
    )
}
