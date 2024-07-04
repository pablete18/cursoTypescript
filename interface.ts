/* las interfaces son estriucturas que definen el "contrato" de la aplicacion.
 son para modelar los JSON, array, funciones o clases.  */ // (arma la estructura de clase)
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
    vacunas? : Ivacunas; // el signo de interrogacion quiere decir q es un valor opcional
    madre? : IPerro;
    padre? : IPerro;

    /* crecer : () => void;
        sumarInformacionPadre : (padre: IPerro) => void;
        sumarInformacionMadre : (madre : IPerro) => void;
        sumarVacunas: (vacunas: Ivacunas) => void; */

}



console.log();

