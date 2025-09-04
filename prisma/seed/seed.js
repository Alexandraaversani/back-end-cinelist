import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    console.log("Iniciando o seed...");

    // Limpar o banco de dados
    await prisma.userFavorites.deleteMany({});
    await prisma.movie.deleteMany({});
    await prisma.user.deleteMany({});

    // Criar filmes
    const movies = [
        {
            title: "Inception",
            description: "Um ladrão especializado em extrair segredos do subconsciente durante o estado de sono.",
            releaseYear: 2010,
            director: "Christopher Nolan",
            genres: "Ação,Ficção Científica,Thriller",
            rating: 8.8,
            imageUrl: "https://example.com/inception.jpg",
            cast: "Leonardo DiCaprio,Joseph Gordon-Levitt,Ellen Page",
            duration: 148
        },
        {
            title: "Pulp Fiction",
            description: "As vidas de dois assassinos, um boxeador, um gângster e sua esposa se entrelaçam em quatro histórias de violência e redenção.",
            releaseYear: 1994,
            director: "Quentin Tarantino",
            genres: "Crime,Drama",
            rating: 8.9,
            imageUrl: "https://example.com/pulp-fiction.jpg",
            cast: "John Travolta,Uma Thurman,Samuel L. Jackson",
            duration: 154
        },
        {
            title: "Cidade de Deus",
            description: "Dois jovens escolhem caminhos diferentes na violenta favela Cidade de Deus no Rio de Janeiro.",
            releaseYear: 2002,
            director: "Fernando Meirelles",
            genres: "Crime,Drama",
            rating: 8.6,
            imageUrl: "https://example.com/cidade-de-deus.jpg",
            cast: "Alexandre Rodrigues,Leandro Firmino,Phellipe Haagensen",
            duration: 130
        }
    ];

    for (const movie of movies) {
        await prisma.movie.create({
            data: movie
        });
    }

    // Criar um usuário de exemplo
    const user = await prisma.user.create({
        data: {
            name: "João Silva",
            email: "joao@example.com",
            password: "$2b$10$YourHashedPasswordHere", // Lembre-se de usar bcrypt para hash real
            bio: "Amante de cinema e sempre em busca de novos filmes para assistir!"
        }
    });

  console.log("Coleções criadas. Inserindo cards...");

  // Cards para NBA Legends
  const nbaCards = await Promise.all([
    prisma.card.create({
      data: {
        name: "Michael Jordan",
        rarity: "Ultra Rare",
        attackPoints: 9800,
        defensePoints: 9200,
        imageUrl: "https://example.com/jordan.jpg",
        collectionId: nbaLegends.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "LeBron James",
        rarity: "Ultra Rare",
        attackPoints: 9700,
        defensePoints: 9500,
        imageUrl: "https://example.com/lebron.jpg",
        collectionId: nbaLegends.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Kobe Bryant",
        rarity: "Ultra Rare",
        attackPoints: 9600,
        defensePoints: 9300,
        imageUrl: "https://example.com/kobe.jpg",
        collectionId: nbaLegends.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Magic Johnson",
        rarity: "Super Rare",
        attackPoints: 9400,
        defensePoints: 8700,
        imageUrl: "https://example.com/magic.jpg",
        collectionId: nbaLegends.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Larry Bird",
        rarity: "Super Rare",
        attackPoints: 9300,
        defensePoints: 8800,
        imageUrl: "https://example.com/bird.jpg",
        collectionId: nbaLegends.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Shaquille O'Neal",
        rarity: "Super Rare",
        attackPoints: 9500,
        defensePoints: 9400,
        imageUrl: "https://example.com/shaq.jpg",
        collectionId: nbaLegends.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Stephen Curry",
        rarity: "Rare",
        attackPoints: 9200,
        defensePoints: 8500,
        imageUrl: "https://example.com/curry.jpg",
        collectionId: nbaLegends.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Kevin Durant",
        rarity: "Rare",
        attackPoints: 9300,
        defensePoints: 8600,
        imageUrl: "https://example.com/durant.jpg",
        collectionId: nbaLegends.id,
      },
    }),
  ]);

  // Cards para Classic Rock
  const rockCards = await Promise.all([
    prisma.card.create({
      data: {
        name: "Queen",
        rarity: "Ultra Rare",
        attackPoints: 9600,
        defensePoints: 9200,
        imageUrl: "https://example.com/queen.jpg",
        collectionId: rockBands.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Led Zeppelin",
        rarity: "Ultra Rare",
        attackPoints: 9700,
        defensePoints: 9100,
        imageUrl: "https://example.com/ledzeppelin.jpg",
        collectionId: rockBands.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Pink Floyd",
        rarity: "Ultra Rare",
        attackPoints: 9500,
        defensePoints: 9300,
        imageUrl: "https://example.com/pinkfloyd.jpg",
        collectionId: rockBands.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "The Beatles",
        rarity: "Ultra Rare",
        attackPoints: 9800,
        defensePoints: 9400,
        imageUrl: "https://example.com/beatles.jpg",
        collectionId: rockBands.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "AC/DC",
        rarity: "Super Rare",
        attackPoints: 9300,
        defensePoints: 8800,
        imageUrl: "https://example.com/acdc.jpg",
        collectionId: rockBands.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "The Rolling Stones",
        rarity: "Super Rare",
        attackPoints: 9400,
        defensePoints: 9000,
        imageUrl: "https://example.com/rollingstones.jpg",
        collectionId: rockBands.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Guns N' Roses",
        rarity: "Rare",
        attackPoints: 9100,
        defensePoints: 8700,
        imageUrl: "https://example.com/gunsnroses.jpg",
        collectionId: rockBands.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Metallica",
        rarity: "Rare",
        attackPoints: 9200,
        defensePoints: 8900,
        imageUrl: "https://example.com/metallica.jpg",
        collectionId: rockBands.id,
      },
    }),
  ]);

  // Cards para World Monuments
  const monumentCards = await Promise.all([
    prisma.card.create({
      data: {
        name: "Eiffel Tower",
        rarity: "Ultra Rare",
        attackPoints: 8800,
        defensePoints: 9500,
        imageUrl: "https://example.com/eiffel.jpg",
        collectionId: worldMonuments.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Great Wall of China",
        rarity: "Ultra Rare",
        attackPoints: 8500,
        defensePoints: 9800,
        imageUrl: "https://example.com/greatwall.jpg",
        collectionId: worldMonuments.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Taj Mahal",
        rarity: "Ultra Rare",
        attackPoints: 8700,
        defensePoints: 9600,
        imageUrl: "https://example.com/tajmahal.jpg",
        collectionId: worldMonuments.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Pyramids of Giza",
        rarity: "Ultra Rare",
        attackPoints: 8600,
        defensePoints: 9900,
        imageUrl: "https://example.com/pyramids.jpg",
        collectionId: worldMonuments.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Colosseum",
        rarity: "Super Rare",
        attackPoints: 8400,
        defensePoints: 9300,
        imageUrl: "https://example.com/colosseum.jpg",
        collectionId: worldMonuments.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Statue of Liberty",
        rarity: "Super Rare",
        attackPoints: 8300,
        defensePoints: 9200,
        imageUrl: "https://example.com/liberty.jpg",
        collectionId: worldMonuments.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Stonehenge",
        rarity: "Rare",
        attackPoints: 8000,
        defensePoints: 9400,
        imageUrl: "https://example.com/stonehenge.jpg",
        collectionId: worldMonuments.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Machu Picchu",
        rarity: "Rare",
        attackPoints: 8200,
        defensePoints: 9100,
        imageUrl: "https://example.com/machupicchu.jpg",
        collectionId: worldMonuments.id,
      },
    }),
  ]);

  // Cards para Prehistoric Giants
  const dinosaurCards = await Promise.all([
    prisma.card.create({
      data: {
        name: "Tyrannosaurus Rex",
        rarity: "Ultra Rare",
        attackPoints: 9900,
        defensePoints: 8800,
        imageUrl: "https://example.com/trex.jpg",
        collectionId: dinosaurs.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Velociraptor",
        rarity: "Super Rare",
        attackPoints: 9400,
        defensePoints: 8300,
        imageUrl: "https://example.com/velociraptor.jpg",
        collectionId: dinosaurs.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Brachiosaurus",
        rarity: "Super Rare",
        attackPoints: 8500,
        defensePoints: 9700,
        imageUrl: "https://example.com/brachiosaurus.jpg",
        collectionId: dinosaurs.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Triceratops",
        rarity: "Super Rare",
        attackPoints: 8700,
        defensePoints: 9600,
        imageUrl: "https://example.com/triceratops.jpg",
        collectionId: dinosaurs.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Stegosaurus",
        rarity: "Rare",
        attackPoints: 8400,
        defensePoints: 9500,
        imageUrl: "https://example.com/stegosaurus.jpg",
        collectionId: dinosaurs.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Spinosaurus",
        rarity: "Ultra Rare",
        attackPoints: 9800,
        defensePoints: 8700,
        imageUrl: "https://example.com/spinosaurus.jpg",
        collectionId: dinosaurs.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Ankylosaurus",
        rarity: "Rare",
        attackPoints: 8200,
        defensePoints: 9800,
        imageUrl: "https://example.com/ankylosaurus.jpg",
        collectionId: dinosaurs.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Pteranodon",
        rarity: "Rare",
        attackPoints: 9100,
        defensePoints: 8000,
        imageUrl: "https://example.com/pteranodon.jpg",
        collectionId: dinosaurs.id,
      },
    }),
  ]);

  // Cards para Gaming History
  const consoleCards = await Promise.all([
    prisma.card.create({
      data: {
        name: "Atari 2600",
        rarity: "Ultra Rare",
        attackPoints: 7500,
        defensePoints: 8000,
        imageUrl: "https://example.com/atari.jpg",
        collectionId: videogameConsoles.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Nintendo NES",
        rarity: "Ultra Rare",
        attackPoints: 8200,
        defensePoints: 8300,
        imageUrl: "https://example.com/nes.jpg",
        collectionId: videogameConsoles.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Sega Genesis",
        rarity: "Super Rare",
        attackPoints: 8100,
        defensePoints: 8200,
        imageUrl: "https://example.com/genesis.jpg",
        collectionId: videogameConsoles.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Super Nintendo",
        rarity: "Super Rare",
        attackPoints: 8300,
        defensePoints: 8400,
        imageUrl: "https://example.com/snes.jpg",
        collectionId: videogameConsoles.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "PlayStation 1",
        rarity: "Rare",
        attackPoints: 8400,
        defensePoints: 8500,
        imageUrl: "https://example.com/ps1.jpg",
        collectionId: videogameConsoles.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Nintendo 64",
        rarity: "Rare",
        attackPoints: 8400,
        defensePoints: 8300,
        imageUrl: "https://example.com/n64.jpg",
        collectionId: videogameConsoles.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "Xbox",
        rarity: "Common",
        attackPoints: 8600,
        defensePoints: 8700,
        imageUrl: "https://example.com/xbox.jpg",
        collectionId: videogameConsoles.id,
      },
    }),
    prisma.card.create({
      data: {
        name: "PlayStation 2",
        rarity: "Common",
        attackPoints: 8700,
        defensePoints: 8800,
        imageUrl: "https://example.com/ps2.jpg",
        collectionId: videogameConsoles.id,
      },
    }),
  ]);

  console.log(
    `Seed concluído! Criadas ${await prisma.collection.count()} coleções e ${await prisma.card.count()} cards.`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
