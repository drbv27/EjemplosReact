describe("Pruebas en el archivo demo.test.js", () => {
  test("deben de ser iguales los string", () => {
    //1.Inicialization
    const mensaje = "Hola Mundo";

    //2.Stymulus
    const mensaje2 = `Hola Mundo`;

    //3.Observe the comport
    expect(mensaje).toBe(mensaje2);
  });
});
