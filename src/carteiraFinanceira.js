const { usuario1 } = require('./usuario');

class CarteiraFinanceira {
    constructor( usuario, valorInicial, investimentoMensal, 
         taxaDeJurosAnual, periodoEmAnos) {
      this.usuario = usuario;
      this.valorInicial = valorInicial;
      this.investimentoMensal = investimentoMensal;
      this.taxaDeJurosAnual = taxaDeJurosAnual;
      this.periodoEmAnos = periodoEmAnos;
      this.periodoEmMeses = periodoEmAnos * 12;
      this.totalInvestido = 0;
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

  calcularJurosCompostos() {
    const taxaMensal = this.taxaDeJurosAnual / 12 ; 
    let montante = this.valorInicial;

  for (let i = 0; i < this.periodoEmMeses; i++) {
    montante += this.investimentoMensal; 
    montante *= 1 + taxaMensal; 
  }

  return montante;
  }

  calcularTotalInvestido() {
    this.totalInvestido = this.investimentoMensal * this.periodoEmMeses;
    console.log( `O valor total investido nesse periodo foi de ${this.totalInvestido}`);
    return this.totalInvestido;
  }
  }

  module.exports = { CarteiraFinanceira };


const valorInicial = 1000; 
const investimentoMensal = 200; 
const taxaDeJurosAnual = 0.006; 
const periodoEmAnos = 5; 
const calculadora2 = new CarteiraFinanceira(usuario1, valorInicial, investimentoMensal, taxaDeJurosAnual, periodoEmAnos)
const montanteFinal = calculadora2.calcularJurosCompostos();
console.log(`Montante final após ${periodoEmAnos} anos: R$ ${montanteFinal.toFixed(2)} de juros compostos`);
calculadora2.calcularTotalInvestido();


  