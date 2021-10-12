function myApi() {
  return new Promise(function(resolve, reject) {
    const resultJson = true;

    if(resultJson) {
      const producto = {
        nombre: 'Iphone',
        color: 'space gray'
      }
      resolve(producto)
    } else {
      reject("error!")
    }
  });
}

myApi().then(function(product) {
  console.log(product);
}).catch(function(error) {
  console.log(error);
})