export default function Produto ({modelo, categoria="Sem categoria", preco, estoque}) {
    return (
        <div>
            <h2>{modelo}</h2>
            <h2>Categoria: {categoria}</h2>
            <h2>Preço: {preco}</h2>    
            <h2>Estoque: {estoque} unidades</h2>        
        </div>
    )
}