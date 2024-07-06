enum Semana{
    Lunes = "LUNES",
    Martes = "MARTES",
    Miercoles = "MIERCOLES",
    Jueves = "Jueves",
    Viernes = "Viernes",
    Sabado = "SABADO",
    Domingo = "DOMINGO"

}

console.log(Semana.Martes);


enum Estaciones {
    Otonio = 1,
    Invierno,
    Primavera,
    Verano
}


console.log(Estaciones.Verano);


interface ILibro {
    readonly titulo : string,
    readonly autor : string,
    numDePaginas : number,
    ISBN : string,

}

function totalPag(libro: ILibro) : number{

   
    return libro.numDePaginas

}

let miLibro1 : ILibro = {
    titulo : "El aleph",
    autor : "Jorge Luis Borges",
    numDePaginas : 300,
    ISBN : "12345566"
}

let miLibro2 : ILibro = {
    titulo : "Rayuela",
    autor : "Jorge Cortazar",
    numDePaginas : 350,
    ISBN : "57686768"
}
function mainLibro(): void{
    let totalPagLibros = totalPag(miLibro1) + totalPag (miLibro2)

    console.log(`la cantidad total de paginas de todos los libros es ${totalPagLibros}`);

}

mainLibro()


/* crea una funcion que devuelva el nombre y el precio de un articulo */

interface IArticulo{
    nombre : string,
    precio : number,
    descripcion? : string
}


function nombreYPrecio(articulo : IArticulo): any {
    return `el ${articulo.nombre} tiene un precio de ${articulo.precio}`
}


let miArticulo : IArticulo = {
    nombre : "Escoba",
    precio : 2500
}

console.log(nombreYPrecio(miArticulo));

/* Crea una funcion que tome un arreglo de Usuarios y retorne la edad Promedio */

interface IUsuario {
    nombre : string,
    email : string, 
    edad : number
}

let usuarios : IUsuario[] = [
    {
        nombre : "Pablo",
        email : "pablo@gmail.com",
        edad : 32

    },
    {
        nombre : "Rocio",
        email : "rocio@gmail.com",
        edad : 26
    },
    {
        nombre : "Monica",
        email : "monica@gmail.com",
        edad : 6
    },
    {
        nombre : "Rufina",
        email: "rufi@gmail.com",
        edad : 4
    }
]


function promedio(usuarios : IUsuario[]) : number {
    let resultado = 0

    for (let usuario of usuarios) {
        resultado += usuario.edad;
        
    }

    return resultado / usuarios.length

    return resultado 
}


console.log(promedio(usuarios));


