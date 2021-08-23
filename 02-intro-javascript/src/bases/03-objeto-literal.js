const persona = {
  nombre: "Steve",
  apellido: "Rogers",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 55632145,
    lat: 52.789,
    lon: 78.5689,
  },
};

console.log(persona);

const persona2 = { ...persona };

console.log(persona2);
