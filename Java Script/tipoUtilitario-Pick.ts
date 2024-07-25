// Pick<Tipo, Propiedades> --> voce pode criar outro type com informacoes parecidas



type Carro = {
    marca: string
    modelo: string
    ano: number
    portas: number


}

type NovoCarro = Pick<Carro, "marca" | "modelo" | "ano" >


