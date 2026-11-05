const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

function divide(a, b){
  return a / b;
}

function multiply(a, b){
  return a * b;
}

//Funciones adicionales
//1. Promedio
function promedio(a, b, c, d, e){
  const suma = a + b +c + d + e;
  return suma/5;
}
//2. Factorial de un numero: es el producto de todos los enteros positivos del 1 al n
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Error, ingresa un número entero positivo";
  }

  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

//3. Suma de los primeros numeros naturales
function sumaNaturales(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Error, ingresa un número entero positivo";
  }

  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}

//4. chicharronera, formula general


// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, multiply: multiply, divide: divide,promedio: promedio, factorial: factorial, sumaNaturales: sumaNaturales};