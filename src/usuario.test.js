const Usuario = require('./usuario');

describe('Classe Usuario', () => {
  let usuario;

  beforeEach(() => {
    usuario = new Usuario('João', 'joao@email.com', 25, '12345678900');
  });

  it('deve retornar o nome do usuário', () => {
    expect(usuario.nome).toBe('João');
  });

});