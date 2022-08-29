//Primeiro teste
/*  
test('sum 2 + 2', () => {
    expect(2 + 2).toBe(4)
}); */

import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const submitFeedback = new SubmitFeedbackUseCase(
    /* Testando sem depender de Banco de dados ou API's externas */
    /* Teste Mockado */
    { create: async () => {} },
    { sendMail: async () => {} }
)


describe('Submit feedback', () => {
    /* logica do teste */
    /* Deveria ser possível fazer (envio de  feedback) */
    it('should be able to submit a feedback', async () => {
        /* Espero que  */
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,6544848415484484u',
        /* O resultado da promise não contenha erros*/
        })).resolves.not.toThrow();
    });


    /* logica do teste */
    /* não deveria ser possível enviar feedback, com type vazio */
    it('should not be able to submit feedback without type', async () => {
        /* Espero que  */
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,6544848415484484u',
        /* O resultado da promise não contenha erros*/
        })).rejects.toThrow();
    });

    /* logica do teste */
    /* não deveria ser possível enviar feedback, com comment vazio */
    it('should not be able to submit feedback without comment', async () => {
        /* Espero que  */
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,6544848415484484u',
        /* O resultado da promise não contenha erros*/
        })).rejects.toThrow();
    });

    /* logica do teste */
    /* não deveria ser possível enviar feedback, com screenshot inválida*/
    it('should not be able to submit feedback with an invalid screenshot', async () => {
        /* Espero que  */
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'ta tudo bugado',
            screenshot: 'test.jpg',
        /* O resultado da promise não contenha erros*/
        })).rejects.toThrow();
    });
});