const usuarios = [

    {nome: "Joao", idade: 23},
    {nome: "Samuel", idade: 24},
    {nome: "Jonata", idade: 18},
    {nome: "Lisa", idade: 89},

]

// crescente:

usuarios.sort((idade1, idade2) => {

        return idade1.idade - idade2.idade
})
console.log(usuarios)

// Decrescente:

usuarios.sort((idade1, idade2) => {

    return idade2.idade - idade1.idade
})


console.log(usuarios)





