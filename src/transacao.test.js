const {Transacao} = require('./transacao');

describe('Transacao', () => {
    beforeEach(() => {
      Transacao.transacoes = [];
    });
  
    it('deve adicionar transações corretamente', () => {
      const transacao1 = new Transacao("Salário", 3000);
      const transacao2 = new Transacao("Conta de água", -100);
  
      expect(Transacao.transacoes.length).toBe(2);
      expect(Transacao.transacoes[0].descricao).toBe("Salário");
      expect(Transacao.transacoes[1].descricao).toBe("Conta de água");
    });
  
    it('deve mostrar transações corretamente', () => {
      const transacao1 = new Transacao("Salário", 3000);
      const transacao2 = new Transacao("Conta de água", -100);
  
      const consoleSpy = jest.spyOn(console, 'log');
      transacao1.mostrarTransacoes();
  
      expect(consoleSpy).toHaveBeenCalledTimes(5);
      expect(consoleSpy).toHaveBeenCalledWith("Lista de Transações:");
      expect(consoleSpy).toHaveBeenCalledWith("Transação 1:");
      expect(consoleSpy).toHaveBeenCalledWith("Descrição: Salário");
      expect(consoleSpy).toHaveBeenCalledWith("Valor: 3000 reais");
      expect(consoleSpy).toHaveBeenCalledWith("Data: " + transacao1.data.toISOString());
    });
  });