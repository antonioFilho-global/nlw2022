import express from 'express' 
import { prisma } from './prisma';

/* Iniciando o express */
const app = express();

/* Configurando o express para receber JSON */
app.use(express.json());

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar Informação
// POST = Cadastrar Informação
// PUT = Atualizar informação
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Deletar uma Informação



/* Rota cadastro de feedbacks*/
app.post('/feedbacks', async(req, res) => {
    const { type, comment, screenshot } = req.body 
    
    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        }
    })

    /* Status http de criação 201 */
    /* mandando os dados via JSON */
    return res.status(201).json({ data: feedback });
})

/* Criando a aplicação na porta 3333 */
app.listen(3333, () => {
    console.log('HTTP server running!')
});

// SQLite
// Prisma