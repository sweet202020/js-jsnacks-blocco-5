/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */


//Crea un array di 10 oggetti che rappresentano una zucchina
const zucchine = [
    {
        varieta: 'nera',
        peso: 20,
        lunghezza: 18,
    },
    {
        varieta: 'romanesco',
        peso: 25,
        lunghezza: 14,
    },
    {
        varieta: 'faenza',
        peso: 22,
        lunghezza: 19,
    },
    {
        varieta: 'fiorentina',
        peso: 28,
        lunghezza: 24,
    },
    {
        varieta: 'striata di Napoli',
        peso: 32,
        lunghezza: 25,
    },
    {
        varieta: 'siciliano',
        peso: 33,
        lunghezza: 28,
    },
    {
        varieta: 'triestina',
        peso: 30,
        lunghezza: 24,
    },
    {
        varieta: 'pugliese',
        peso: 35,
        lunghezza: 28,
    },
    {
        varieta: 'Piacenza',
        peso: 24,
        lunghezza: 18,
    },
    {
        varieta: 'nizza',
        peso: 20,
        lunghezza: 12,
    },
];

let sum=0;
zucchine.forEach(weight => {
    const {peso}=weight;
    
    console.log(peso);
    sum+=peso



});
console.log(sum);