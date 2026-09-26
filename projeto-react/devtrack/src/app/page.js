import CardEstudo from "./components/CardEstudo"

export default function Home () {
  return (
    <div>
      <h1>DEVTRACK</h1>
      <br />
      <h2>Acompanhe seus estudos de programação</h2>
      <CardEstudo materia="Java" area="Backend" nivel="Intermediário" status="Em andamento"/>
      <CardEstudo materia="Docker" area="DevOps" nivel="Iniciante" status="Em andamento"/>
      <CardEstudo materia="React" area="Front-End" nivel="Iniciante" status="Em andamento"/>
    </div>
  )
}