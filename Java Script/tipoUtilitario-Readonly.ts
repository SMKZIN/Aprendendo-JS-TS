// Readonly<tipo> --> nao pode mais alterar ou atribuir valores

type Pessoa2 = {
    nome: string
    email: string
    idade: number

 }

 

 const usuario: Readonly<Pessoa2> = {
    nome: "SMK",
    idade: 20,
    email: "Smk@gmail.com"

 }

 console.log(usuario.nome)


 

 

