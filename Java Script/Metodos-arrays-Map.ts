// map -> percorrer todos os elementos de um array e retornar um novo array com formato implementado
const pessoas5 = [ 
    {nome: "Samuel", idade: 33},
    {nome: "Joao", idade: 16},
    {nome: "Julia", idade: 23}

]

const novoArray2 = pessoas5.map((elemento) => {

    return {
        nomeCompleto: `${elemento.nome}`,
        idade: `${elemento.idade}`
    }
})

    console.log(novoArray2)
    


