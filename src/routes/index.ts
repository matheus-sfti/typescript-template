import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.json({ message: 'Ok!' }));

export default router;