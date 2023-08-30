//Retorna un solo valor de un array iterado, sirve para obtener el resultado de un calculo

const totals = [1,2,3,4];
let suma = 0;

for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    suma = suma + element;
}

console.log("Total", suma);

//sum es el valor acomulador
//item es el valor actual del elemento
//0 es el indice del elemento iterado
const rta = totals.reduce((sum, item) => sum + item , 0);

console.log("Total con Reduce", rta);