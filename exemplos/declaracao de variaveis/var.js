
function x () {
    var z = 2 // Tem escopo somente dentro da função
    y = 1 // Tem escopo global, pode ser usado em qualquer lugar do código
}


// console.log(z)
// console.log(y) // Não funcionar porque o Node.js tem "strict mode" ativo por padrão

var a = 1 
var b = 2 

delete globalThis.a 
delete globalThis.b

console.log(a, b)

/*
    Quando declaramos

*/

variavel = "b"
var variavel

/*
    É lido da seguinte forma 

*/
var variavel 
variavel = "b"

var a, b, c = (a = b = "Mesmo valor para as três")
/*Declara a variavel a e b com o mesmo valor */

var v = g = f = "Aqui" // FUnciona mas não é uma boa prática pq g e f foram criados sem var, let ou const

console.log(v, g, f)

var x = 0; // x é declarada como global e é igual a 0

console.log(typeof z); // undefined, desde que z não tenha sido criada anteriormente


function a() {
  // quando a for chamada,
  var y = 2; // y é declarada como local desta função, e o valor 2 é atribuido

  console.log(x, y); // 0 2

  function b() {
    // quando b for chamado,
    x = 3; // atribui o valor 3 a variável global existente, ele não cria uma nova variável global
    y = 4; // atribui o valor 4 a uma variável fora, ele não cria uma nova variável
    z = 5; // cria uma nova variável global e atribui o valor 5.
  } // (Lança a exceção ReferenceError em modo restrito.)

  b(); // chamando b, o código irá criar z como variável global
  console.log(x, y, z); // 3 4 5
}


console.log(x, z); // 3 5
console.log(typeof y); // indefinido já que y é uma variável local da função a
