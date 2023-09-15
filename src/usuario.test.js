const { Usuario } = require('./usuario');

describe('Classe Usuario', () => {
  let usuario;
  beforeEach(() => {
    usuario = new Usuario('João', 'joao@email.com', 25, '12345678900');
  });

  it('deve retornar o nome do usuário', () => {
    expect(usuario.nome).toBe('João');
  });

  it('deve atualizar o nome do usuário', () => {
    usuario.setNome('Maria');
    expect(usuario.nome).toBe('Maria');
  });

  it('deve retornar o email do usuário', () => {
    expect(usuario.email).toBe('joao@email.com');
  });

});