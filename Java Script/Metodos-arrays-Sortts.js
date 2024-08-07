// sort -> ordena os elementos de um array de acordo com o codigo unicode

const numero = [1, 15, 3, 4, 54,542, 12]


// Crescente:
numero.sort(function(item1, item2){

    if(item1 < item2){

        return -1
    }

    if(item1 > item2){

        return 1
    }

        return 0

})

console.log(numero)

// Decrescente:

const numero2 = [1, 15, 3, 4, 54,542, 12]

numero2.sort(function(item1, item2){

    if(item1 < item2){

        return 1
    }

    if(item1 > item2){

        return -1
    }

        return 0

})

console.log(numero2)


