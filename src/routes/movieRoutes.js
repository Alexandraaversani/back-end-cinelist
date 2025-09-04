import { Router } from 'express';
import MovieController from '../controllers/movieController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

// Rotas públicas
router.get('/movies', MovieController.findAll);
router.get('/movies/search', MovieController.search);
router.get('/movies/:id', MovieController.findById);

// Rotas protegidas
router.use(authMiddleware);
router.post('/movies', MovieController.create);
router.put('/movies/:id', MovieController.update);
router.delete('/movies/:id', MovieController.delete);

export default router;
