import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";
/* Configurando o nodemailer, para enviar o feedback por email */
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a2b5c92a75c014",
        pass: "39cb098df52bf4"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail( { subject, body }: SendMailData) {
        /* Usando o nodemailer com o mailtrap para enviar emails */
        await transport.sendMail({
            /* Especificando para qual email vai ser mandado e o seu assunto */
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Antonio Filho <antonio.afce@gmail.com>',
            subject,
            /* formatando o conteúdo do email */
            html: body,
        });
    };
}