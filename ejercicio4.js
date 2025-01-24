//Ejercicio 1

function findArrayIndex(array, text) {
    //Tu codigo

    for (let i=0; i<array.length; i++){
      if( text == array[i]){
        return i;
      }
    }
    return `No se encontró ${text} en el array`;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Luke"));
console.log(findArrayIndex(mainCharacters, "Yoda"));


/* const lessImportantCharacters = [
  "Lucas",
  "Lucia",
  "Jose Luis",
  "Chema",
  "Roberto",
  "Anselmo",
  "Oscar",
];
console.log(findArrayIndex(lessImportantCharacters, "Anselmo"));
console.log(findArrayIndex(lessImportantCharacters, "Jose"));
 */

//Ejercicio 2

function removeItem(array, text){
  let textIndex= findArrayIndex(array,text);

  array.splice(textIndex, 1);

  return array;

}

console.log(removeItem(mainCharacters, "Rey"));
