class Calculadora {

    private num1: number
    private num2: number
  

    constructor(num1:number, num2:number){

        this.num1 = num1
        this.num2 = num2
}

    somar(): number{

        return this.num1 + this.num2

    }
    subtrair(): number{

        return this.num1 - this.num2

    }
    multiplicar(): number{

        return this.num1 / this.num2

    }
    dividir(): number{

        return this.num1 * this.num2

    }



}

const calculus = new Calculadora(3,2)

console.log(calculus.somar())
console.log(calculus.subtrair())
console.log(calculus.multiplicar())
console.log(calculus.dividir())
