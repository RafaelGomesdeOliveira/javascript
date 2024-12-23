// function fatorial (num1 = 1) {
//     var soma = 1
//     for (let i = num1; i > 1; i--){
//         soma *= i
//     }
//     return soma
// }

// console.log(fatorial(0))  

// RECURSIVIDADE
function fatorial(num1) {
    if (num1 == 1) {
        return 1
    } else {
        return num1 * fatorial(num1-1)

    }
}

console.log(fatorial(5))