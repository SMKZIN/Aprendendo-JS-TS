// Omit<Tipo, Propiedades> --> remove apenas a propiedade declarada  


type Carro2 = {
    marca: string
    modelo: string
    ano: number
    portas: number


}

type NovoCarro2 = Omit<Carro, "portas" >