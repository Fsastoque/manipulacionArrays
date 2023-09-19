//Retorna un solo valor de un array iterado, sirve para obtener el resultado de un calculo

const items = [1,3,2,3,3,1,10];

//obj es el acomulador
//item es el valor actual del elemento
//{} es el estado inicial
const rta = items.reduce((obj, item) =>{
//Funcion o logica de la funcion
    if(!obj[item]){
        obj[item] = 1;
        }
    else{
        obj[item] = obj[item] + 1;
    }

 return obj;
},{});



console.log("Respuesta", rta);