import Medios from "../Enum/Medios";
import IPosicion from "../interfaces/IPosicion";
import IVehiculo from "../interfaces/IVehiculo";

class Vehiculos implements IVehiculo {
   private _nombre : string;
   private _cantidadRuedas : number;
   private _porcentajeTanque: number;
   private _matricula : string;
   private _medioDePreferencia: Medios;
   private _posicion: IPosicion;


    constructor(
        nombre : string,
        cantidadRuedas : number,
        porcentajeTanque : number,
        matricula : string,
        medioDePreferencia : Medios,
        posicion: IPosicion 
    ) {
        this._nombre =nombre;
        this._cantidadRuedas = cantidadRuedas;
        this._porcentajeTanque = porcentajeTanque;
        this._matricula = matricula;
        this._medioDePreferencia = medioDePreferencia;
        this._posicion = posicion
    }

    get nombre(){
        return this._nombre
    }
    get cantidadRuedas(){
        return this._cantidadRuedas
    }
    get porcentajeTanque(){
        return this._porcentajeTanque
    }
    get matricula(){
        return this._matricula
    }
    get medioDePreferencia(){
        return this._medioDePreferencia
    }
    get posicion(){
        return this._posicion
    }

    sePuedeMoverA(posicion : IPosicion): boolean{
        return false

    }

}  
class Auto extends Vehiculos{
    constructor(
        nombre : string,
        cantidadDeRuedas : number,
        porcentajeTanque : number,
        matricula : string,
        medioDePreferencia : Medios.Tierra,
        posicion : IPosicion
       
    ) {
        super(
            nombre,
            cantidadDeRuedas,
            porcentajeTanque,
            matricula,
            medioDePreferencia,
            posicion
            
        )   
    }
    sePuedeMoverA(posicion : IPosicion) : boolean {
        return posicion.z  === 0? true : false
    }
}

class Avion extends Vehiculos{
    constructor(
        nombre : string,
        cantidadRuedas : number,
        porcentajeDeTanque : number,
        matricula : string,
        medioDePreferencia : Medios.Aire,
        posicion : IPosicion
    ){
        super(
            nombre,
            cantidadRuedas,
            porcentajeDeTanque,
            matricula,
            medioDePreferencia,
            posicion
        )
    }
    sePuedeMoverA(posicion: IPosicion): boolean {
        return posicion.z >= 0 ? true : false 
    }
}

class Submarino extends Vehiculos {
    constructor(
        nombre : string,
        cantidadRuedas : number,
        porcentajeTanque : number,
        matricula : string,
        medioDePreferencia : Medios.Agua,
        posicion : IPosicion
    ){
        super(
            nombre,
            cantidadRuedas,
            porcentajeTanque,
            matricula,
            medioDePreferencia,
            posicion
        )
    }
    sePuedeMoverA(posicion: IPosicion): boolean {
        return posicion.z <= 0 ? true : false
    }
}

const vehiculos : any[]= [new Auto('citroen', 4, 1,'ALN 761',Medios.Tierra, {x : 0, y : 8 , z : 0}).sePuedeMoverA({x : 0, y :0 , z : 0}),new Avion('Boing 747', 4, 1, 'CTI 843',Medios.Aire, {x :1, y :0 , z: 9}).sePuedeMoverA({x : 1, y : 0,z : -1})]



console.log(vehiculos);


