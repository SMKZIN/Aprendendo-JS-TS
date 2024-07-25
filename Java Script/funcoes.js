
const usuarios = []

function cadastrarUsuario(nome, email, idade){ // <-- funcao
    usuarios[usuarios.length] = {
        nome: nome,
        email: email,
        idade: idade  
    }
}

cadastrarUsuario("Samuel", "Smk@gmail.com", 20)
console.log(usuarios)