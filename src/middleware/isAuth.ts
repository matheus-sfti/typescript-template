import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function isAuth(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) return res.status(401).json({ erro: 'Token inválido' });

  const token = authToken.split(' ')[1];

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

    req.usuario_id = sub;

    return next();
  } catch (err) {
    return res.status(401).json({ erro: 'Token expirado' });
  }
}
