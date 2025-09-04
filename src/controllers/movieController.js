import MovieModel from '../models/movieModel.js';

const MovieController = {
    create: async (req, res) => {
        try {
            const movie = await MovieModel.create(req.body);
            return res.status(201).json(movie);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    findAll: async (req, res) => {
        try {
            const movies = await MovieModel.findAll();
            return res.status(200).json(movies);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    findById: async (req, res) => {
        try {
            const movie = await MovieModel.findById(Number(req.params.id));
            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }
            return res.status(200).json(movie);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    search: async (req, res) => {
        try {
            const { query } = req.query;
            const movies = await MovieModel.search(query);
            return res.status(200).json(movies);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const movie = await MovieModel.update(Number(req.params.id), req.body);
            return res.status(200).json(movie);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            await MovieModel.delete(Number(req.params.id));
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};

export default MovieController;
