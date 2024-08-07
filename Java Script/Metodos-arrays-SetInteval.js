// setInterval() -> executa a cada N segundos
// clearInterval() -> para a execucao


 const id = setInterval(() => {

    console.log("Ola estudantes!");
    clearInterval(id)
    

}, 1000)