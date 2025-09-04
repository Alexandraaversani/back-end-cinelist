import prisma from '../../prisma/prisma.js';

const FavoriteModel = {
    addFavorite: async (userId, movieId) => {
        return await prisma.userFavorites.create({
            data: {
                userId,
                movieId
            },
            include: {
                movie: true
            }
        });
    },

    removeFavorite: async (userId, movieId) => {
        return await prisma.userFavorites.delete({
            where: {
                userId_movieId: {
                    userId,
                    movieId
                }
            }
        });
    },

    getUserFavorites: async (userId) => {
        return await prisma.userFavorites.findMany({
            where: {
                userId
            },
            include: {
                movie: true
            }
        });
    },

    checkIsFavorite: async (userId, movieId) => {
        const favorite = await prisma.userFavorites.findUnique({
            where: {
                userId_movieId: {
                    userId,
                    movieId
                }
            }
        });
        return !!favorite;
    }
};

export default FavoriteModel;
