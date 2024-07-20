import IFuncion from "../interfaces/IFuncion";

enum FuncionesTrigonometricas {
    Sin,
    Cos,
    Tan
}

class Trigonometrica implements IFuncion {

    private funcionTrigonometrica : FuncionesTrigonometricas;

    constructor(funcionTrigonometrica : FuncionesTrigonometricas) {
        this.funcionTrigonometrica  = funcionTrigonometrica;
        
    }
    evaluar (x: number) : number{
        switch (this.funcionTrigonometrica) {
            case FuncionesTrigonometricas.Sin: return Math.sin(x)
                
            case FuncionesTrigonometricas.Cos : return Math.cos(x)
                
            case FuncionesTrigonometricas.Tan: return Math.tan(x)
        
           
        }


    };
}
export default Trigonometrica