import express from 'express' 
import nodemailer from 'nodemailer'
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

/* Configurando o nodemailer, para enviar o feedback por email */
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a2b5c92a75c014",
      pass: "39cb098df52bf4"
    }
  });


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

    /* Usando o nodemailer com o mailtrap para enviar emails */
    transport.sendMail({
        /* Especificando para qual email vai ser mandado e o seu assunto */ 
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Antonio Filho <antonio.afce@gmail.com>',
        subject: 'Novo feedback',
        /* formatando o conteúdo do email */
        html: [
            `<div style="font-family: sans-serif; font-size:16px; color: #111;">`,
            `<p>Tipo de feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`
        ].join('\n')
    });
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