import { Router } from 'express';
import FavoriteController from '../controllers/favoriteController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

// Todas as rotas de favoritos requerem autenticação
router.use(authMiddleware);

router.get('/favorites', FavoriteController.getUserFavorites);
router.post('/favorites', FavoriteController.addFavorite);
router.delete('/favorites/:movieId', FavoriteController.removeFavorite);
router.get('/favorites/check/:movieId', FavoriteController.checkIsFavorite);

export default router;
