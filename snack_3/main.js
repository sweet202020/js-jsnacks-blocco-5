/* Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC) */

function string (...MyString){
    const fromArrToString= MyString.join(' ')
    console.log(fromArrToString);
    const stringSplit=fromArrToString.split('')
    console.log(stringSplit);
    const stringReverse= stringSplit.reverse('')
    console.log(stringReverse);
}

string('ciao', 'hola')