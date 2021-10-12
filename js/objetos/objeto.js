// Objetos en Javascript

const mascota = {
  nombre: 'Rocky',
  edad: 4,
  vivo: true,
  razas: ['pitbull', 'dogo']
}
console.log(mascota);

// agregar una propiedad a un objeto
mascota.id = 11514;
console.log(mascota);

// acceder a sus propiedades
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.vivo);
console.log(mascota.razas[0]);
console.log(mascota.razas[1]);

// Destructuring
const { nombre, edad, vivo, razas } = mascota;
console.log(nombre);
console.log(edad);
console.log(vivo);
console.log(razas[0]);
console.log(razas[1]);
