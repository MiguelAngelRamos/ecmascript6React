// const se utiliza para definir una constante, estas no pueden cambiar su valor, pero hay ciertas excepciones con los "objetos" y "arreglos"

// const array
const arrayNumero = [10, 20, 30, 'Hola Mundo'];
console.log(arrayNumero);
arrayNumero.push(40);
console.log(arrayNumero);
arrayNumero[0] = 757;
console.log(arrayNumero);

/* Cuando declaramos un array u objeto como constante y usamos funciones como el push, nos permite añadir un nuevo elemento */

// const objeto

const persona = {
  nombre: 'Miguel',
  edad: 37
}
// acceder al objeto y una propiedad
console.log(persona.nombre); // Miguel

persona.nombre = 'Angel'; // cambiando una propiedad con el nombre Angel

console.log(persona); // el resultado del objeto