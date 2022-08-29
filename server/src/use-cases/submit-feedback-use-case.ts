/* Casos de uso: ações feitas pelo usuários */
/* Envio de feedback*/
/* OBS: manter a boa prática de Single Responsiblity Principle (Princípio da responsabilidade única) */
/* Ter um único método/função */

import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";


interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

/* Foi utilizado constructor visando um código menos acoplado e de manutenção facilitada */
export class SubmitFeedbackUseCase {
    constructor(
        private feedbackRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ) {}

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        /* Verificando campo obrigatório */
        if (!type) {
            throw new Error('Type is required.');
        }
        /* Verificando campo obrigatório */
        if (!comment) {
            throw new Error('Comment is required.');
        }

        /*Verificando se o screenshot foi feito corretamente */
        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenshot format.')
        }

        await this.feedbackRepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [
                `<div style="font-family: sans-serif; font-size:16px; color: #111;">`,
                `<p>Tipo de feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`
            ].join('\n')
        })
    }
}