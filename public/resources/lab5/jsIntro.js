// 1.Create a function using function declaration named sum with one parameter of Array type, the
// returned result is the sum of all elements which are greater than 20.

//Iterative way
// function sum(arr){
//     let sum = 0 ;
//     for (let index = 0; index < arr.length; index++) {
//         if(arr[index] > 20){
//             sum +=arr[index];
//         }
//     }
//     return sum;      
// }

// const myArray = [1,2,3,4,5,20,50];
// console.log(sum(myArray));

function sum1(arr) {
    return arr.filter(e=>e>20).reduce((a,b)=>a+b)
}

console.log(sum1([1,2,3,4,5,23,19,50]));

// 2. Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all string, length is greater than and equal to 5, and
// contains letter ‘a’.

function getNewArray(arr){
    return arr.filter(e=>e.length > 4 && e.includes("a"));
}

console.log(getNewArray(["Fabia", "Joao", "Renata", "Raul", "Lays", "Joao Fabio"]));

// 3. Implement an arrow function with feature below:
// concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']

const concat = (...more) => {
    // let a = [];
    // for(let i =0; i<more.length; i++){
    //     a.push(...more[i]);
    // }
    return more.flatMap(e=>[...e]);
}

console.log(concat('hi', ["Joao", "Fabia", "Renata", "Raul", "Lays", "Joao Fabio"],[1,2,3], ['Hello','world']));