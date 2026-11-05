const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('multiply 2 * 2 to equal 4', () =>{
  expect(calculator.multiply(2, 2)).toBe(4);
});

//Prueba de multiplicación
test('multiply 9 * 8 to equal 72', () =>{
  expect(calculator.multiply(9, 8)).toBe(72);
});

//Prueba de divide
test('divide 10 / 5 equals to 2', () =>{
  expect(calculator.divide(10, 5)).toBe(2);
});

//Prueba del promedio
test('el promedio de los números 1, 2, 3, 4, 5 es igual a 3', () =>{
  expect(calculator.promedio(1,2,3,4,5)).toBe(3);
});

//prueba del factorial
test('factorial del número 5 es 120', () =>{
  expect(calculator.factorial(5)).toBe(120);
});

//Prueba suma de numeros naturales
test('suma los primeros 5 numeros naturales', () => {
    expect(calculator.sumaNaturales(5)).toBe(15);
  });