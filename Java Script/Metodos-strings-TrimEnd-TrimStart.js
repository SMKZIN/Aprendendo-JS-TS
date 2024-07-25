// trimStart --> remove todos os espacos do inicio
// trimEnd --> remove todos os espacos do final

const usuario2 = {
    email: "SamuelDavi@gmail.com",
    senha: "abc123"

}

const email2 = " SamuelDavi@gmail.com"
const senha2= "abc123"

console.log(usuario2.email === email2.trimStart())



const usuario3 = {
    email: "SamuelDavi@gmail.com",
    senha: "abc123"

}

const email3 = "SamuelDavi@gmail.com   "
const senha3= "abc123"

console.log(usuario3.email === email3.trimEnd())