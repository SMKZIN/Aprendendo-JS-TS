// callBack -> uma funcao que chama outra funcao 


function imprimir(texto){

    console.log(texto)
}

imprimir("Smk")

const imprimirTitulo = () => {

    console.log("Aula de arrays")
    
    
}

// executa algo, em tempo definido

setTimeout(imprimirTitulo, 2000)