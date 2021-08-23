const nombre = "Diego";
const apellido = "Bonilla";
//metodo antiguo
const nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);
//Template Strings
const fullName = `${nombre} ${apellido}`;
console.log(fullName);

function getSaludo(nombre) {
  return "Hola " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
