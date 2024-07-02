/* las interfaces son estriucturas que definen el "contrato" de la aplicacion.
 son para modelar los JSON, array, funciones o clases. Se le agrega I para diferneciarlo de un type */
interface Ivacunas {
    rabia: boolean,
    moquillo: boolean,
    parvo: boolean
}

interface IPerro {
    readonly nombre : string;// readonly establece el valor y no se puede cambiar
    edad : number;
    raza : string;
    peso : number;
    color : string;
    comidasFavoritas : string[];// esto quiere decir array de string
    gustaJugar : boolean;
    vacunas? : Ivacunas;
    madre? : IPerro;
    padre? : IPerro;

    crecer : () => void;
        sumarInformacionPadre : (padre: IPerro) => void;
        sumarInformacionMadre : (madre : IPerro) => void;
        sumarVacunas: (vacunas: Ivacunas) => void;

}

console.log();

