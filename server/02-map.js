/*map se utiliza para transformar un array a otro con las misma cantidad de elementos */

const letters = ['a','b','c'];
const newArray = [];

for (let index = 0; index < letters.length; index ++){
    const element = letters[index];
    newArray.push(element + '++');    
    }

    console.log('original ', letters);
    console.log('new' , newArray)

const _newArray = letters.map(item => item + '++');

console.log('original ', letters);
console.log('new con map' , _newArray)

