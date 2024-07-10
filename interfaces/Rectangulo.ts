interface IRectangulo {
    ancho : number,
    alto : number
}

let rectangulo : IRectangulo = {
    ancho : 25,
    alto : 10
}
function getArea( rectangulo : IRectangulo) : number {
    const {alto , ancho} = rectangulo


    return alto * ancho
}
console.log(getArea(rectangulo));
