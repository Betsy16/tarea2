class Display {
    constructor(displayValorAnterior, displayValorActual) {
      this.displayValorActual = displayValorActual;
      this.displayValorAnterior = displayValorAnterior;
      this.calculadora = new Calculadora();
      this.tipoOperacion = undefined;
      this.valorActual = '';
      this.valorAnterior = '';
      this.signos = {
        sumar: '+',
        dividir: '/',
        multiplicar: 'x',
        restar: '-',
        exponente: '^',
        divisionEntera: '÷',
        modulo: '%',
        sqr: '√',
        factorial: '!',
        obtenerDivisores: 'Dis'
      };
    }
  
    borrar() {
      this.valorActual = this.valorActual.toString().slice(0, -1);
      this.imprimirValores();
    }
  
    borrarTodo() {
      this.valorActual = '';
      this.valorAnterior = '';
      this.tipoOperacion = undefined;
      this.imprimirValores();
    }
  
    computar(tipo) {
      this.tipoOperacion !== 'igual' && this.calcular();
      this.tipoOperacion = tipo;
      this.valorAnterior = this.valorActual || this.valorAnterior;
      this.valorActual = '';
      this.imprimirValores();
    }
  
    agregarNumero(numero) {
      if (numero === '.' && this.valorActual.includes('.')) return;
      this.valorActual = this.valorActual.toString() + numero.toString();
      this.imprimirValores();
    }
  
    imprimirValores() {
      this.displayValorActual.textContent = this.valorActual;
      this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }
  
    calcular() {
      const valorAnterior = parseFloat(this.valorAnterior);
      const valorActual = parseFloat(this.valorActual);
  
      if (isNaN(valorActual) || isNaN(valorAnterior)) return;
  
      switch (this.tipoOperacion) {
        case 'sumar':
          this.valorActual = this.calculadora.sumar(valorAnterior, valorActual);
          break;
        case 'restar':
          this.valorActual = this.calculadora.restar(valorAnterior, valorActual);
          break;
        case 'multiplicar':
          this.valorActual = this.calculadora.multiplicar(valorAnterior, valorActual);
          break;
        case 'dividir':
          this.valorActual = this.calculadora.dividir(valorAnterior, valorActual);
          break;
        case 'exponente':
          this.valorActual = this.calculadora.exponente(valorAnterior, valorActual);
          break;
        case 'divisionEntera':
          this.valorActual = this.calculadora.divisionEntera(valorAnterior, valorActual);
          break;
        case 'modulo':
          this.valorActual = this.calculadora.modulo(valorAnterior, valorActual);
          break;
        case 'sqr':
          this.valorActual = this.calculadora.raizCuadrada(valorActual);
          break;
        case 'factorial':
          this.valorActual = this.calculadora.factorial(valorActual);
          break;
        case 'obtenerDivisores':
          this.valorActual = this.calculadora.obtenerDivisores(valorActual);
          break;
        default:
          return;
      }
    }
  }
  