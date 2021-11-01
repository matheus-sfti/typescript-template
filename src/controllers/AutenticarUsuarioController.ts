import { Request, Response } from 'express';
import { AutenticarUsuarioService } from '../services/AutenticarUsuarioService';

class AutenticarUsuarioController {
  async handle(req: Request, res: Response) {
    const service = new AutenticarUsuarioService();
    const { usuario, senha } = req.body;

    try {
      const result = await service.execute(usuario, senha);

      return res.json(result);
    } catch (err) {
      return res.json({ erro: err.message });
    }
  }
}

export { AutenticarUsuarioController };
