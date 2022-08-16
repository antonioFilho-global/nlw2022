import express from 'express' 
import { routes } from './routes';

/* Iniciando o express */
const app = express();

/* Configurando o express para receber JSON */
app.use(express.json());
/* Importando as rotas */
app.use(routes);

/* Criando a aplicação na porta 3333 */
app.listen(3333, () => {
    console.log('HTTP server running!')
});

// SQLite
// Prisma