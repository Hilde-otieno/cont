function arrNum(numbers){
    let num=numbers.slice(0,4)
    let newnum= numbers.slice(-2)
    num.forEach(i => {
        console.log(i*i)
    });
    newnum.forEach(i=>{
        console.log(i*10)
    })
}
arrNum([34,28,12,8,4,9,29,10,30])


function arrString(strings){
    for(let i=0; i < strings.length; i++){
if (i===2){
    continue;
}
console.log(strings[i]);
    }
}
arrString(['apple','plum','banana','strawberries','kiwi'])

// function arrayOfString(){
//     let words 
//     for (element of words){
//         console.log(element)
//     }
// }
// arrayOfString('Megan', 'Greg', 'Rose', 'Julius', 'Cree')
function arrayOfStrings(strings){
     let reversed = '';
     let i=strings.length-1;
     while(i=0){
        reversed=+strings[i];
        i--;
     }
     return reversed;
}
let strings='morning'
console.log(arrayOfStrings(strings))