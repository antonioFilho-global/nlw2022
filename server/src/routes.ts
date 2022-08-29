import express from 'express';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

/* Criando rotas em um arquivo separado, e exportando */ 
export const routes = express.Router()

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
    const nodemailerMailAdapter = new NodemailerMailAdapter()
 
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })

    /* Status http de criação 201 */
    return res.status(201).send();
})