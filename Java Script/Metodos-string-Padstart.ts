// padStart --> completar o inicio da string com a correspondencia , de acordo com o tamanho definido 
// padEnd -->  completar o fim a string com a correspondencia , de acordo com o tamanho definido 



const texto = "Samuel"

console.log(texto)


const textoFormatado = texto.padStart(10, "-")

console.log(textoFormatado)

const textoFormatado2 = texto.padEnd(10, "-")

console.log(textoFormatado2)
