// Required<tipo> --> vai ser obrigatorio o tipo informado

type Pessoa = {
    nome: string
    email: string
    idade: number

 }

 type PessoaOpicional =  Required<Pessoa>

 const usuarios: Pessoa[] = []

 function cadastrarPessoa(pessoa: Required<Pessoa>){

        // cadastra um usuario


 }

cadastrarPessoa({
    nome: "SMK",
    idade: 33,
    email: "smk@gmail.com"
})

 usuarios[usuarios.length] = {
    nome: "Smk",
    email: "SMK@gmail.com",
    idade: 20


 }
