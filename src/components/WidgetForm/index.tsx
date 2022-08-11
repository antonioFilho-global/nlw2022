import { useState } from "react";

import { CloseButton } from "../CloseButton";

/* importando imagens dos icones */
import bugImageURL from '../../assets/bug.svg';
import ideaImageURL from '../../assets/idea.svg';
import thoughtImageURL from '../../assets/thought.svg';
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

/* Criando objeto que contem as categorias de feedbacks */
export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageURL,
            alt: 'Image de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageURL,
            alt: 'Image de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageURL,
            alt: 'Image de um balão de pensamento'
        }
    },
};

/* export type FeedbackType = keyof typeof feedbackTypes; */
export type FeedbackType = keyof typeof feedbackTypes;

/* // Object.entries(feedbackType) =>
Salvando em forma de vetor, que vai ser percorrido com um .map
[ 
    ['BUG', {..conteudo...}],
    ['IDEA', {..conteudo...}]
    [' thought', {..conteudo...}],
] */

export function WidgetForm() {
    /* Salvando como state a categoria de feedback selecionada pelo usuário */ 
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    /* Criando status se o feedback foi enviado ou não */
    const [feedbackSent, setFeedbackSent] = useState(false);

    /* Retorna e restarta o tipo de feedback anteriormente escolhido  */
    function handleRestartFeedback() {
        setFeedbackType(null)
    }


    return (
        /*   A biblioteca é util para fazer a recursividade de maneira prática: w-[calc(100vw-2rem)] md:w-auto */
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {/* Se o feedback já foi enviado com Sucesso será exibido o componente FeedbackSuccessStep  */}
            {feedbackSent ? (
                <FeedbackSuccessStep />
            ) : (
                /* Se não será exibido o fluxo de seleção de tipo de feedback */
                <>
                    {/* Selecionando o tipo de feedback */}
                    {!feedbackType ? (
                        /*  Eviando função de um componente pai para um componente filho fia propriedade*/
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        /* Passando informações entre componentes via propriedade */
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}
            

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" href="mailto:antonio.afce@gmail.com" >Antonio Filho</a> 
            </footer>
        </div>
    );
}