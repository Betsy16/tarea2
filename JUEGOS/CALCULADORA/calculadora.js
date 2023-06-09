class Calculadora {
    sumar(num1, num2) {
      return num1 + num2;
    }
  
    restar(num1, num2) {
      return num1 - num2;
    }
  
    dividir(num1, num2) {
      return num1 / num2;
    }
  
    multiplicar(num1, num2) {
      return num1 * num2;
    }
  
    exponente(base, exponente) {
      return Math.pow(base, exponente);
    }
  
    divisionEntera(dividendo, divisor) {
      return Math.floor(dividendo / divisor);
    }
  
    modulo(dividendo, divisor) {
      return dividendo % divisor;
    }
  
    raizCuadrada(numero) {
      return Math.sqrt(numero);
    }
  
    factorial(numero) {
      let resultado = 1;
      for (let i = 2; i <= numero; i++) {
        resultado *= i;
      }
      return resultado;
    }
  
    obtenerDivisores(numero) {
      const divisores = [];
      for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
          divisores.push(i);
        }
      }
      return divisores;
    }
  }
  