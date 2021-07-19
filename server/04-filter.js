const words = ['spray', 'limit','elite', 'exuberant'];

const newArray =[];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length >=6){//Crea el nuevo array con las palabras iguales o mayoras a 6
        newArray.push(item);
    }
}

console.log('newArray' ,newArray);
console.log('original' , words);

//Con filter

const rta = words.filter(item => item.length >= 6)
console.log('filter' , rta);
console.log('original' , words);


const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

//Devuelve array de los objetos que tengan delivered true
  const rta3 = orders.filter(item => item.delivered);
  console.log('rta3', rta3);

  const rta4 =orders.filter(item => item.delivered && item.total >= 100)
  console.log('rta4', rta4);

  //Buscador 
  const search = (query) => {//Recibe el dato a buscar
    return orders.filter(item =>{
        return item.customerName.includes(query);
    })
  }

  console.log('Buscador' , search('ti'));
  
  