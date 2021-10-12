// funciones en javascript

// declarando una función de forma tradicional
function sumar() {
  console.log('hola desde la funcion suma');
}

sumar(); // llamando a la función

// funciones anonimas

const sumarDos = function() {
  console.log('Hola desde la funcion sumar dos');
}

// como llamos a la funcion sumarDos??
sumarDos();

// arrow functions ( funciones de flecha )
const sumarTres = () => {
  console.log('Hola desde sumar tres arrow function');
}

sumarTres();

// arrow function parametros
// const sumarCuatro = (a, b) => {
//     return a+b;
// }

const sumarCuatro = (a, b) => a + b;
console.log(sumarCuatro(5,10));

// arrow function con un parametro

// const imprimirNumero = (num) => {
//   return num;
// }

const imprimirNumero = num => num;

console.log(imprimirNumero(33));