const { CarteiraFinanceira } = require('./carteiraFinanceira');
const { usuario } = require('./usuario');

class Transacao extends CarteiraFinanceira {
    constructor(descricao, valor) {
      this.descricao = descricao;
      this.valor = valor;
      this.data = new Date();
    }


    adicionarTransacao(transacao) {
        this.transacoes.push(transacao);
    }

    
    mostrarTransacoes() {
        console.log("Lista de Transações:");
        this.transacoes.forEach((transacao, index) => {
          console.log(`Transação ${index + 1}:`);
          console.log(`Descrição: ${transacao.descricao}`);
          console.log(`Valor: ${transacao.valor} reais`);
          console.log(`Data: ${transacao.data.toISOString()}`);
    });
  }
}



//minhaCarteira.setSaldo(1000);
//console.log(`Saldo atual: ${minhaCarteira.getSaldo()} reais`);

//const transacao1 = new Transacao("Salário", 2000);
//minhaCarteira.adicionarTransacao(transacao1);
