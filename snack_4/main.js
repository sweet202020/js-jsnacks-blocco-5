/* Scrivi una funzione che fonda due array (aventi lo stesso numero di
    elementi) prendendo alternativamente gli elementi da uno e dall’altro
    es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */


    const numbers=[
        1,2,3,4,5,6,7,8,9,10
    ];
    const letters=[
        'a','b','c','d','e','f','g','h','i','j'
    ];
    
   function alternateArr(numbArr, lettArr) {
    let newArr=[]
    for (let i = 0; i < numbArr.length; i++) {
        newArr.push(numbArr[i], lettArr[i])
        
    }
    return newArr
   }


   const finalArr=alternateArr(numbers, letters)
   console.log(finalArr)