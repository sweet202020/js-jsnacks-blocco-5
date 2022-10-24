/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

const zucchine = [
    {
        varieta: 'nera',
        peso: 20,
        lunghezza: 14,
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
        peso: 21,
        lunghezza: 13,
    },
    {
        varieta: 'triestina',
        peso: 30,
        lunghezza: 24,
    },
    {
        varieta: 'pugliese',
        peso: 15,
        lunghezza: 10,
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


const zucchinePiccole= zucchine.filter(width=>{
    const {lunghezza}=width
    /* console.log(lunghezza); */
    if (lunghezza<15) {
        return true
    }
})
const zucchineGrandi= zucchine.filter(width=>{
    const {lunghezza}=width
    /* console.log(lunghezza); */
    if (lunghezza>=15) {
        return true
    }
})

/* console.log(zucchineGrandi); */
let sumGrandi=0
zucchineGrandi.forEach(weight => {
    const {peso}=weight;
    
   /*  console.log(peso); */
    sumGrandi+=peso



});
console.log(sumGrandi);

/* console.log(zucchinePiccole); */
let sumPiccole=0
zucchinePiccole.forEach(weight => {
    const {peso}=weight;
    
   /*  console.log(peso); */
    sumPiccole+=peso



});
console.log(sumPiccole);