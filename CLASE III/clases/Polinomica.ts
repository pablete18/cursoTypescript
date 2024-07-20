import IFuncion from "../interfaces/IFuncion";

class Polinomica implements IFuncion {
    private pol : number []; // pol [n-1]* x ^ (n-1 ) + ... + pol[1]* x + pol [0]

    constructor (pol : number[] ){
        this.pol = pol
    }
    evaluar( x : number) : number {
        let resultado = 0;
        for(let i =  0; i< this.pol.length; i ++){
            resultado += Math.pow(x,i) * this.pol[i]
        }
        return resultado
    }    

 }

 export default Polinomica