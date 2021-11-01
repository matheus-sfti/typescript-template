import { sign } from 'jsonwebtoken';

interface IUsuario {
  id: number;
  nome: string;
  imagem?: string;
}

class AutenticarUsuarioService {
  async execute(usuario: string, senha: string) {
    const _senha = senha; // Desencripta senha

    /** Lógica de autenticação
     *
     */

    // Resposta do banco:
    const _usuario: IUsuario = {
      id: 1,
      nome: '',
      imagem: '',
    };

    const token = sign(
      {
        user: {
          id: _usuario.id,
          nome: _usuario.nome,
          imagem: _usuario.imagem,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: _usuario.id.toString(),
        expiresIn: '1d',
      }
    );

    return { token, usuario: _usuario };
  }
}

export { AutenticarUsuarioService };
