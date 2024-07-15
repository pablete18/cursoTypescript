import Medios from "../Enum/Medios"
import IPosicion from "./IPosicion"

interface IVehiculo{
    nombre : string,
    cantidadRuedas : number,
    porcentajeTanque : number,
    matricula : string,
    medioDePreferencia : Medios,
    posicion : IPosicion,
    sePuedeMoverA : (posicion : IPosicion) => boolean

}
export default IVehiculo