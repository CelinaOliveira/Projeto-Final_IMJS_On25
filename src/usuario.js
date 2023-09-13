class Usuario {
    nome;
    email;
    idade;
    #cpf

    constructor(nome, email, idade, cpf) {
      this.nome = nome;
      this.email = email;
      this.idade = idade;
      this.#cpf = cpf;
    }
  
    setNome(novoNome) {
      this.nome = novoNome;
    }
  
    setEmail(novoEmail) {
      this.email = novoEmail;
    }
  
    setIdade(novaIdade) {
      this.idade =novaIdade;

    }

    get cpf() {
		return this.#cpf;
	}

  
    mostrarInformacoes() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Email: ${this.email}`);
      console.log(`Idade: ${this.idade} anos`);
    }
  }

  const usuario1 = new Usuario("João", "joao@email.com", 25, '12345678900');

  console.log("Informações iniciais do usuário:");
usuario1.mostrarInformacoes();


module.exports = { Usuario,usuario1 };

