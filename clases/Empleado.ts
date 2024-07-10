import IEmpleado from "../interfaces/IEmpleado";

class EmpleadoDatabase implements IEmpleado {
    private _id : number;
    nombre : string;
    salario : number

    constructor(
        id : number,
        nombre : string,
        salario : number
    ) {
        this._id = id;
        this.nombre = nombre;
        this.salario = salario
    }

    get id(){
        return this._id
    }

}
class EmpleadoService {
    private empleados: IEmpleado[];

    constructor(empleados: IEmpleado[]) {
        this.empleados = empleados;
    }

    getEmpleadoPorId(id: number): IEmpleado | undefined {
        return this.empleados.find(empleado => empleado.id === id);
    }
}

const miEmpleado : IEmpleado[] = [
    new EmpleadoDatabase(1,"Pablo",150),
    new EmpleadoDatabase(2,"Rocio", 300),
    new EmpleadoDatabase( 3, "Monica", 500)
 ]


const empleadoService = new EmpleadoService(miEmpleado)

const empleado = empleadoService.getEmpleadoPorId(2)

console.log(empleado);



