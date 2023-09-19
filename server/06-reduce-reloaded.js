//Retorna un solo valor de un array iterado, sirve para obtener el resultado de un calculo
// Establecer un objeto vacío como valor inicial del método reduce.
// El objeto vacío también será nuestro acumulador.
// Verificar si el elemento ya existe en nuestro objeto de frecuencias.
// Si no existe, creamos la propiedad referente al elemento del array y le inicializamos en 1.
// Si ya existe solamente debemos aumentar en una unidad la propiedad de nuestro objeto referente al elemento del array.
// Finalmente, debes retornar el objeto dentro de la función del método reduce.

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

//Ejemplo 2 saber cuantos estan usuarios estan en los diferentes niveles

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  //Primero obtener los niveles con map

const rta1 = data.map(item => item.level).reduce((obj, item) =>{
    //Funcion o logica de la funcion
        if(!obj[item]){
            obj[item] = 1;
            }
        else{
            obj[item] = obj[item] + 1;
        }
        return obj;
    },{});

console.log(rta1);

//Ejercicio agrupar por rangos
