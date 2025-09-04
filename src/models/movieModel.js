import prisma from '../../prisma/prisma.js';

const MovieModel = {
    create: async (data) => {
        return await prisma.movie.create({
            data
        });
    },

    findAll: async () => {
        return await prisma.movie.findMany();
    },

    findById: async (id) => {
        return await prisma.movie.findUnique({
            where: { id }
        });
    },

    search: async (query) => {
        return await prisma.movie.findMany({
            where: {
                OR: [
                    { title: { contains: query } },
                    { genres: { contains: query } }
                ]
            }
        });
    },

    update: async (id, data) => {
        return await prisma.movie.update({
            where: { id },
            data
        });
    },

    delete: async (id) => {
        return await prisma.movie.delete({
            where: { id }
        });
    }
};

export default MovieModel;
