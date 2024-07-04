let mensaje : string = "Hola Mundo"

console.log(mensaje);


let i = 1
for(let i = 1; i<= 10; i++){
    console.log(i)
}

let esVerdadero : boolean = true
console.log('el valor es '+ esVerdadero)

let numero: string= 'hola';
console.log(numero + 3);

const diasDeSemana: string[] = ["Lunes","martes","miercoles","jueves", "viernes","sabado","domingo"];

for(let i = 0; i < diasDeSemana.length; i++){
    console.log(diasDeSemana[i]);
    
}

for( let diaDeSemana of diasDeSemana){
    console.log(`hola dia ${diaDeSemana}`);
    
}// for of recorre cada elemento es como el .length

//for in en cambio accede al indice del arreglo(devuelve un number)

