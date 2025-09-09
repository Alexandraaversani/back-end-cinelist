import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/index.routes.js';

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const port = process.env.PORT || 4001; // Define a porta do servidor

// Inicializa o Express
const app = express();
app.use(cors()); // Habilita CORS para todas as rotas

app.use(express.json()); // Parse de JSON

// Add logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use("/", routes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
