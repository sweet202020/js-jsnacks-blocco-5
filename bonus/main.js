/* Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */

const people=[
    {
        name: 'alessio',
        surname: 'dolce',
        eta: 21,
    },
    {
        name: 'freddy',
        surname: 'mercury',
        eta: 17,
    },
    {
        name: 'vasco',
        surname: 'rossi',
        eta: 71,
    },
    {
        name: 'william',
        surname: 'mezzanotte',
        eta: 16,
    },
    {
        name: 'robbie',
        surname: 'williams',
        eta: 45,
    },
]


const minors= people.filter(minore=>{
    const {eta}=minore
     console.log(eta); 
    if (eta<18) {
        return true
    }
})
const majors= people.filter(maggiorenni=>{
    const {eta}=maggiorenni
     console.log(eta); 
    if (eta>=18) {
        return true
    }
})
console.log(majors);
for (let i = 0; i < majors.length; i++) {
    const canDrive= {...majors[i], can_i_drive: 'yes'}
    console.log(canDrive);
    
    
}
for (let i = 0; i < minors.length; i++) {
    const cantDrive={...minors[i], can_i_drive: 'no'}
    console.log(cantDrive);
    
}