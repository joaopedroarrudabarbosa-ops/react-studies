const nome = "Joao";
const idade = 19;
const nota = 9.0;
const matricula = true;

const situacao = matricula && nota >= 7.0 ? "Aprovado" : "Reprovado";
const maiorIdade = idade >= 18 ? "Sim" : "Não";

console.log("Aluno: ", nome);
console.log("Idade: ", idade);
console.log(`Maior de idade: ${maiorIdade}`)
console.log(`Situação: ${situacao}`);

function somar(a,b) {
    return a+b;
}

// const resultado = somar(2,3);
// console.log(resultado);

// const somar = (a,b) => {
//     return a+b;
// }

// const somar = (a,b) => a+b;

const verificarAluno = (nome, nota) => {
    const situacao = nota >= 7.0 ? "Aprovado" : "Reprovado";
    return `${nome} foi ${situacao}`;
}

console.log(verificarAluno("Joao", 8.5));
console.log(verificarAluno("Pedro", 5.0));

const mostrarMensagem = () => {
    console.log("Estudante JavaScript.");
}

const executar = (callback) => {
    callback();
}

executar(mostrarMensagem);

const notas = [5, 8, 10, 6, 7];
const situacoes = notas.map((nota) => {
    return nota >= 7 ? "Aprovado" : "Reprovado"
})
console.log(situacoes)

const precos = [10, 20, 50, 100];
const precosComTaxa = precos.map((preco) => {
    return preco+10;
})

console.log(precosComTaxa)
