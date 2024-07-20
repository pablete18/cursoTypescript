import IFuncion from "../interfaces/IFuncion";

abstract class Combinacion implements IFuncion{
    protected f : IFuncion; // la palabra reservada protected es privado para la clase, pero es publico para los hijos de esta clase
    protected g : IFuncion;

    constructor(f : IFuncion, g :IFuncion){
        this.f = f;
        this.g = g
    }

    abstract evaluar: (x: number) => number;// los metodos 
}

export default Combinacion