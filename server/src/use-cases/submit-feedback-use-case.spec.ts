import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

//spies = espiões
//É utilizado para verificar se funções foram chamadas 

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    /* Testando sem depender de Banco de dados ou API's externas */
    /* Teste Mockado */
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
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

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
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