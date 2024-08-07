// find -> busca um elemento no array e retorna o elemento caso exista 

const pessoas = [ 
    {nome: "Samuel", idade: 33},
    {nome: "Joao", idade: 16},
    {nome: "Julia", idade: 23}

]

const pessoaEncontrada = pessoas.find((pessoa) => {

    return pessoa.nome == "Samuel"
    
})
console.log(pessoaEncontrada);


   


    
