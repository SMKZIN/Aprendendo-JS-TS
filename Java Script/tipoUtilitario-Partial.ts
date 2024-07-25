 // Utilitario<Tipo> --> resulta em um novo tipo manupulado
// Partial<Type>

 type Pessoa = {
    nome: string
    email: string
    idade: number

 }

 type PessoaOpicional =  Partial<Pessoa>

 const usuarios: Pessoa[] = []

 function atualizarPessoa(pessoa: Partial<Pessoa>){




 }

 atualizarPessoa({
    nome: "SMK",
    idade: 33,
   



 })

 usuarios[usuarios.length] = {
    nome: "Smk",
    email: "SMK@gmail.com",
    idade: 20


 }
