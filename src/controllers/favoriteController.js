import FavoriteModel from '../models/favoriteModel.js';

const FavoriteController = {
    addFavorite: async (req, res) => {
        try {
            const { userId } = req.user; // Assuming user info is added by auth middleware
            const { movieId } = req.body;
            const favorite = await FavoriteModel.addFavorite(userId, Number(movieId));
            return res.status(201).json(favorite);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    removeFavorite: async (req, res) => {
        try {
            const { userId } = req.user;
            const { movieId } = req.params;
            await FavoriteModel.removeFavorite(userId, Number(movieId));
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    getUserFavorites: async (req, res) => {
        try {
            const { userId } = req.user;
            const favorites = await FavoriteModel.getUserFavorites(userId);
            return res.status(200).json(favorites);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    checkIsFavorite: async (req, res) => {
        try {
            const { userId } = req.user;
            const { movieId } = req.params;
            const isFavorite = await FavoriteModel.checkIsFavorite(userId, Number(movieId));
            return res.status(200).json({ isFavorite });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};

export default FavoriteController;
