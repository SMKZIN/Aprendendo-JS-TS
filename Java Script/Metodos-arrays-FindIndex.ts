// findIndex -> busca um elemento em um array e retorna o indice do elemento, caso exista.

const pessoas1 = [ 
    {nome: "Samuel", idade: 33},
    {nome: "Joao", idade: 16},
    {nome: "Julia", idade: 23}

]

const pessoaEncontrada2 = pessoas1.findIndex((pessoa) => {

    return pessoa.nome == "Samuel"
    
})
console.log(pessoaEncontrada2);


   


    
