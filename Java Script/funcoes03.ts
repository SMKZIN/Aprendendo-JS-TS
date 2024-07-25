

type TUsuario = {

    nome : string
    idade: number
    email: string
}

const usuarios: TUsuario[] = []


function cadastrar(usuario : TUsuario){

    const novoUsuario = {

        nome: usuario.nome,
        idade: usuario.idade,
        email: usuario.email

    }

    usuarios[usuarios.length] = novoUsuario

    return novoUsuario



}

const imprima = cadastrar({

    nome: "joao",
    idade: 12,
    email: "Smk@gmail.com"
})

console.log(imprima)