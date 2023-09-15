  class Transacao {
    static transacoes = []

      constructor(descricao, valor) {
        this.descricao = descricao;
        this.valor = valor;
        this.data = new Date();
        this.constructor.transacoes.push({
        
          descricao: this.descricao,
          valor: this.valor

        });
      }

   //   adicionarTransacao(transacao) {
     //     this.transacoes.push(transacao);
    //  }

      mostrarTransacoes() {
          console.log("Lista de Transações:");
          for (let i = 0; i < this.transacoes.length; i++) {
            const transacao = this.transacoes[i];
            console.log(`Transação ${i + 1}:`);
            console.log(`Descrição: ${transacao.descricao}`);
            console.log(`Valor: ${transacao.valor} reais`);
            console.log(`Data: ${transacao.data.toISOString()}`);
    }
  }
  }

module.exports = {Transacao}



const transacao1 = new Transacao("Salário", 3000);
const transacao2 = new Transacao("Conta de agua", -100);
