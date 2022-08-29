import express from 'express' 
import cors from 'cors';
import { routes } from './routes';

/* Iniciando o express */
const app = express();
/* ferramenta de segurança */
app.use(cors());
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