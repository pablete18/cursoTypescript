function sumaArreglo(arregloNumeros: number[]): number{

    let suma = 0

    for (let i = 0; i < arregloNumeros.length; i++) {
        suma += arregloNumeros[i];
        
    }
    return suma

}


function main () : void{
    
const arregloNumeros = [1,54,5,32,34]
console.log( sumaArreglo(arregloNumeros))

}

main()

// LOS ENUM: son una forma de modelar diferentes tipos de estado de una entidad.
//para ello, se utiliazan estructuras dew datos que contienen distintas contantes con nombre, 
// las cuales pueden ser asignadas de 3 formas: POR DEFECTO, INICIALIZADAS y COMPLETAMENTE INICIALIZADAS

// Asignacion por inicializacion, se indica el valor numeroco del enum, y los deamas valores 
// se inicializan automatucanmente en el anterior +1.
enum Numeros {
    Diez = 10,
    Once,
    Doce,
    Trece,
    Catorce
}

console.log(Numeros.Catorce);

// INCIALIZACION COMPLETA : hay que indicar los valores de todas las contantes
enum Color {
    Rojo = "ROJO",
    Verde = "VERDE",
    Azul = "AZUL"
}

console.log(Color.Azul);

type Estados = "PRENDIDO" | "APAGADO"

const valor : Estados = "PRENDIDO"


console.log(valor);

type Operacion = ( a :number , b : number) => number


const suma : Operacion = (a,b) => a + b

console.log(suma(1,6));


