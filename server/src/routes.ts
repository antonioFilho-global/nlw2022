import e from 'express';
import nodemailer from 'nodemailer'
import { prisma } from './prisma';

import express from 'express';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';

/* Criando rotas em um arquivo separado, e exportando */ 
export const routes = express.Router()

/* Configurando o nodemailer, para enviar o feedback por email */
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a2b5c92a75c014",
        pass: "39cb098df52bf4"
    }
});


// GET, POST, PUT, PATCH, DELETE

// GET = Buscar Informação
// POST = Cadastrar Informação
// PUT = Atualizar informação
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Deletar uma Informação


/* Rota cadastro de feedbacks*/
routes.post('/feedbacks', async(req, res) => {
    const { type, comment, screenshot } = req.body;
    
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })

    /* Usando o nodemailer com o mailtrap para enviar emails */
    //await transport.sendMail({
    //    /* Especificando para qual email vai ser mandado e o seu assunto */ 
    //    from: 'Equipe Feedget <oi@feedget.com>',
    //    to: 'Antonio Filho <antonio.afce@gmail.com>',
    //    subject: 'Novo feedback',
    //    /* formatando o conteúdo do email */
    //    html: [
    //        `<div style="font-family: sans-serif; font-size:16px; color: #111;">`,
    //        `<p>Tipo de feedback: ${type}</p>`,
    //        `<p>Comentário: ${comment}</p>`,
    //        `</div>`
    //    ].join('\n')
    //});

    /* Status http de criação 201 */
    return res.status(201).send();
})