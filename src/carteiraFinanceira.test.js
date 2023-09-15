const { CarteiraFinanceira } = require('./carteiraFinanceira');

describe('CarteiraFinanceira', () => {
  let carteira;

  beforeEach(() => {
    carteira = new CarteiraFinanceira(1000, 200, 0.006, 5);
  });

  it('deve calcular juros compostos corretamente', () => {
    const montanteFinal = carteira.calcularJurosCompostos();
    expect(montanteFinal).toBeCloseTo(1247.01, 2); // Valor 
    //aproximado com duas casas decimais
  });

  it('deve calcular o total investido corretamente', () => {
    const totalInvestido = carteira.calcularTotalInvestido();
    expect(totalInvestido).toBe(12000); // O total investido deve 
    //ser igual a 200 * 60 (5 anos * 12 meses)
  });

  it('deve permitir a atualização do valor inicial', () => {
    carteira.setValorInicial(1500);
    const novoValorInicial = carteira.valorInicial;
    expect(novoValorInicial).toBe(1500);
  });

  it('deve permitir a atualização do investimento mensal', () => {
    carteira.setinvestimentoMensal(250);
    const novoInvestimentoMensal = carteira.investimentoMensal;
    expect(novoInvestimentoMensal).toBe(250);
  });

  it('deve permitir a atualização da taxa de juros anual', () => {
    carteira.setTaxaDeJurosAnual(0.007);
    const novaTaxaDeJurosAnual = carteira.taxaDeJurosAnual;
    expect(novaTaxaDeJurosAnual).toBe(0.007);
  });
});