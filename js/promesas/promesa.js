/* Una promesa sirve para trabajar con peticiones asincronas
y es usado para disminuir el uso excesivo de callback */

let myPromise = new Promise(function(resolve, reject){
  let suma = 1 + 9;
  if( suma === 10) {
    resolve('Es correcto es igual a 10')
  } else {
    reject('No es correcto');
  }
});

myPromise.then(function(message) {
    console.log(message);
}).catch( function(err) {
  console.log(err);
});
//  control  + k + c // comentar
//  control + k + u // descomentar

const myPromise = new Promise( (resolve, reject) => {
  const suma = 1 + 12;
  suma===10 ? resolve('Es correcto es igual a 10'): reject('No es correcto');
})

myPromise.then( message => console.log(message)).catch( err => console.log(err));

