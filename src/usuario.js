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
      if (novaIdade >= 18) {
        this.idade = novaIdade;
      } else {
        console.log("Para abrir uma conta você precisa ser maior de idade.");
      }
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

  const usuario1 = new Usuario("João", "joao@email.com", 25);

  console.log("Informações iniciais do usuário:");
usuario1.mostrarInformacoes();