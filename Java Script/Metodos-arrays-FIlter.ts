// filter -> filtra e retorna um novo array com todos elementos encontrados 

const nomes = ["Guido", "Samuel", "Antonio", "Tiago"]

const novoArray = nomes.filter((nome) => {

        return nome.length < 7 
})

console.log(novoArray)

// exemplo 2 :

const pessoas2 = [ 
    {nome: "Samuel", idade: 33},
    {nome: "Joao", idade: 16},
    {nome: "Julia", idade: 23}

]

const NovoArraty = pessoas2.filter((MaiorIdade) => {

        return MaiorIdade.idade >= 18


})

console.log(NovoArraty)

