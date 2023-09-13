const { Usuario,usuario1 } = require('./usuario');

class CarteiraFinanceira {
    constructor(usuario, valorInicial, investimentoMensal, taxaDeJurosAnual, periodoEmAnos) {
      this.usuario = usuario;
      this.valorInicial = valorInicial;
      this.investimentoMensal = investimentoMensal;
      this.taxaDeJurosAnual = taxaDeJurosAnual; 
      this.periodoEmAnos = periodoEmAnos; 
    }
   
    setValorInicial(valorInicial) {
        this.valorInicial = valorInicial;
    }
  
    setinvestimentoMensal (investimentoMensal) {
        this.investimentoMensal =investimentoMensal;
    }

    setTaxaDeJurosAnual (taxaDeJurosAnual) {
        this.taxaDeJurosAnual = taxaDeJurosAnual;
    }

    setPeriodoEmAnos(periodoEmAnos) {
        this.periodoEmAnos = periodoEmAnos;
    }


    calcularJurosCompostos() {
      const taxaMensal = this.taxaDeJurosAnual / 12 / 100; // Taxa de juros mensal
    const periodoEmMeses = this.periodoEmAnos * 12; // Período em meses
    let montante = this.valorInicial;

    for (let i = 0; i < periodoEmMeses; i++) {
      montante += this.investimentoMensal; // Adiciona o investimento mensal
      montante *= 1 + taxaMensal; // Calcula juros compostos mensais
    }

    return montante;
    }
  }

  module.exports = { CarteiraFinanceira };
  
const carteira1 = new CarteiraFinanceira(usuario1);
const cpf = carteira1.usuario.cpf
console.log(cpf);
console.log(carteira1);
  //carteiraFinanceira1.setSaldo()
 // carteiraFinanceira1.calcularJurosCompostos()

const calculadora1 = new CarteiraFinanceira( '1000', '300', '5', '5');
calculadora1.calcularJurosCompostos();

  