// reduce -> executa a função de callback uma vez para cada elemento presente no array, excluindo furos (valores indefinidos)

const numeros = [0, 1, 2, 3, 4, 5]

// soma de todos os numeros do array:
const resultado = numeros.reduce((acumulador, valorAtual, index, array) => {

        return acumulador + valorAtual
})

console.log(resultado)

// exemplo em uma matriz:

const matriz = [
 [3, 6, 8], 
 [4, 9, 23], 
 [54, 21, 1]

]

const array = matriz.reduce((acumulador, valorAtual) => {

    return [...acumulador, ...valorAtual]

}, [])
