// template string código ascii es : alt + 96 

const numero = (num) => {
  return 'El numero es:' + num;
}
const resultado = numero(10);
console.log(resultado);


// Ejemplo con template String

const numeroTemplateString = num => (`El numero es ${ num * 2 }`);
const resultadoTemplateString = numeroTemplateString(15);
console.log(resultadoTemplateString);