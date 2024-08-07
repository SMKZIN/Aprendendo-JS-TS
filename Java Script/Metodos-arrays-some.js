// some -> testa se pelo menos um dos elementos atende a condicao

const num = [1, 2, 3]

const resultadoNumeros = num.some((item) => {

        return item % 2 == 0
})

console.log(resultadoNumeros)