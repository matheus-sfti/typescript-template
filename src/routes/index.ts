import { Router } from 'express';
import { AutenticarUsuarioController } from '../controllers/AutenticarUsuarioController';
import { isAuth } from '../middleware/isAuth';

const router = Router();

router.get('/', isAuth, (req, res) => res.json({ message: 'Ok!' }));

router.get('/login', (req, res) => res.json({ message: 'Ok!' }));

router.post('/autenticar', new AutenticarUsuarioController().handle);

export { router };
