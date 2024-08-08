// localeCompare -> método de comparacao de strings

// odenacao de strings: 

const letra1 = "a"
const letra2 = "b"

console.log(letra1.localeCompare(letra2));


const nomes = ["joão", "Maria", "ana", "rodrigo", "Rodrigo"]

// crescente:

nomes.sort((item1, item2) => {

    return item1.localeCompare(item2)
})

// decrescente:

nomes.sort((item1, item2) => {

    return item2.localeCompare(item1)
})