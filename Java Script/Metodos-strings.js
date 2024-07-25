// trim --> remove todos os espacoes do inicio e do fim de uma string


const texto = "  Alguma coisa      "



 const textoSemEspaco = texto.trim()

console.log(textoSemEspaco.length)


// exemplo: 

const usuario = {
    email: "SamuelDavi@gmail.com",
    senha: "abc123"

}

const email = " SamuelDavi@gmail.com"
const senha = "abc123"

console.log(usuario.email === email.trim())