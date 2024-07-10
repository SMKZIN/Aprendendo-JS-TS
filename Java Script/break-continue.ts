const FRUTAS1: string[] = ["Banana", "Abacaxi", "Limao", "Uva"]

for(let item of FRUTAS1){
    if(item == "Limao"){
        break // break e a mesma coisa que parar, ou seja se a condicao acima e true pare !

    }
    console.log(item)

}


const FRUTAS2: string[] = ["Banana", "Abacaxi", "Limao", "Uva"]

for(let item3 of FRUTAS2){
    if(item3 == "Limao"){
        continue // continue e a mesma coisa que imprimir todos os elementos menos o limao 

    }
    console.log(item3)

}

