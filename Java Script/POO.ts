type Tcarro = { // tipos dos atributos

    cor: string
    marca: string
    modelo: string
    ano: number
    protencia: number

}

// abstracao:
class Carro { // classe
    public cor: string // encapsulamento
    private marca: string // encapsulamento
    private modelo: string // encapsulamento
    private ano: number // encapsulamento
    private protencia: number // encapsulamento

    private ligado: boolean // encapsulamento
    private aceleracao: number // encapsulamento

    constructor(carro : Tcarro){ // metodo construtor
        
        this.cor = carro.cor
        this.marca = carro.marca
        this.modelo = carro.modelo
        this.ano = carro.ano
        this.protencia = carro.protencia ?? 90 // ternario de se direita , senao esquerda
        this.ligado = false
        this.aceleracao = 0
    }

     public ligarOuDesligar():void{

        if(this.ligado){

            this.desacelerar()
            this.ligado = false
        }

        
        this.ligado = this.ligado ? false : true // funcao que retorna se o carro esta ligado ou nao
    }

     public  acelerar(rpm: number):void{

        this.aceleracao += rpm // funcao que retorna a aceleracao do carro
    }


     public  estadoDoCarro(): string{

        return this.ligado ? "O carro está ligado" : "O carro está desligado" // funcao que retorna o estado do carro 
    }

    public turboCarro(cv:number){

        this.protencia += cv
    }

    private desacelerar(){

        if(this.ligado){

            this.aceleracao = 0
        }
    }
   
}

const bmw: Tcarro = { // novo carro cadastrado

    cor: "preto",
    ano: 2001,
    marca: "bmw",
    modelo: "x1",
    protencia: 98
}

const Fusca: Tcarro = { // novo carro cadastrado

    cor: "preto",
    ano: 1950,
    marca: "volks",
    modelo: "fusca",
    protencia: 98
}

const Bmw = new Carro(bmw) // criando uma nova classe 
const fusca = new Carro(Fusca) // criando uma nova classe 

fusca.turboCarro(58)
console.log(fusca)
