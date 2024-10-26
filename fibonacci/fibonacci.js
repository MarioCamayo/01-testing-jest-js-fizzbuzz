// Escribe un algoritmo que devuelva la sucesión de fobonacci de manera recursiva

const getNumero = (numero)=>{
  if(numero === 0) return 0
  if(numero === 1) return 1

   return getNumero(numero - 1) + getNumero(numero - 2)
}


const getNumero1 = getNumero(9)

console.log( getNumero1);







// Crea un algoritmo que devuelva la serie de Fibonacci con los primeros 10 números.
const fibonacciSeries = (n) => {
  const series = []; // Array para almacenar la serie
  let a = 0, b = 1;  // Valores iniciales

  for (let i = 0; i < n; i++) {
    series.push(a); // Agrega el valor actual de 'a' a la serie
    const temp = a + b; // Calcula el siguiente número
    a = b; // Actualiza 'a' para la siguiente iteración
    b = temp; // Actualiza 'b' para la siguiente iteración
  }

  return series.join('\n');
};

// Ejemplo de uso
console.log(fibonacciSeries(10));


const fibonacciSeries2 = (n) => {
  const series = []; // Array para almacenar la serie
  let a = 0, b = 1;  // Valores iniciales

  for (let i = 0; i < n; i++) {
    // Verifica si 'a' es par y diferente de cero
    const isEven = a % 2 === 0 && a !== 0; 
    const description = isEven ? `${a} = par` : `${a}`; // Crea la descripción
    series.push(description); // Agrega la descripción al array
    const temp = a + b; // Calcula el siguiente número
    a = b; // Actualiza 'a'
    b = temp; // Actualiza 'b'
  }

  return series.join('\n '); // Devuelve un string con los números y sus descripciones
};

// Ejemplo de uso
console.log(fibonacciSeries2(10)); // Devuelve: "0, 1, 1, 2 (par), 3, 5, 8 (par), 13, 21, 34 (par)"


// Crea un algoritmo de fibonacci que devuelve solo un número específico de la serie
const fibonacci = (n) => {
  if (n === 0) return 0; // Caso base para n = 0
  if (n === 1) return 1; // Caso base para n = 1

  let a = 0, b = 1; // Inicialización de los dos primeros números

  for (let i = 2; i <= n; i++) { // Iterar desde 2 hasta n
    const temp = a + b; // Calcula el siguiente número de Fibonacci
    a = b; // Actualiza 'a' al siguiente número
    b = temp; // Actualiza 'b' al siguiente número
  }

  return b; // Devuelve el enésimo número de Fibonacci
};

// Ejemplo de uso
console.log(fibonacci(3)); // Devuelve: 55
