/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b” */

//Scrivi una funzione che accetti tre argomenti: un array e due numeri
function newFunction(array, a, b) {
    const arrInString=array.join()
    const newString=arrInString.slice(a,b)
    return newString
}

const newArr=[prompt('inserisci una parola')]
console.log(newArr);

function randomB(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function randomA(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
const fromArrToStr=newArr.join()
const generateB=(randomB(1, fromArrToStr.length))
console.log(generateB);
  const generateA=(randomA(1, generateB-1))
  console.log(generateA);
  
  const finalArr=newFunction(newArr, generateA, generateB)
  console.log(finalArr);
  