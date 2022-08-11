import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton";

/* Recebendo via props do outro componente */
interface FeedbackTypeStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({ 
    feedbackType, 
    onFeedbackRestartRequested 
} : FeedbackTypeStepProps ) {
   /*  Pegando a imagem de print vinda do componente ScreenshotButton */
    const [screenshot, setScreenshot] = useState<string | null>(null);
    /* Pegando o comentário escrito */ 
    const [comment, setComment] = useState('');

    /* recebendo dados de outro componente */
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    
    /* Pegando os dados do comentário escrito e do print */
    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        console.log({
            screenshot,
            comment,
        })
    }

    return (
        <>
            <header>
                <button 
                    type="button" 
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" /> 
                </button>

                <span className="text-xl leading-6 flex item-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />
            </header>


            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <textarea
                    /* A caixa de texto vai ter uma largura mínima dew 304px e altura minima de 112px*/
                    className="min-w-[304px] w-full min-h-[112px] text-sm 
                             placeholder-zinc-400 text-zinc-100
                             border-zinc-600 bg-transparent rounded-md 
                             focus:border-brand-500 focus:ring-brand-500 
                             focus:ring-1 focus:outline-none resize-none
                             scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhe o que está acontecendo...."
                    /* Cada vez que o usuário digitar na textarea, será pegado o evento de digitação trazendo o texto*/
                    onChange={event => setComment(event.target.value)}
                />

                <footer className="flex gap-2 mt-2">
                    {/* Componente da função de tirar print */}
                    <ScreenshotButton 
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />

                    <button
                        type="submit"
                        /* desabilitando o envio do feedback, caso não tennha nada digitado */
                        disabled={comment.length === 0}
                        className="p-2 bg-brand-500 rounded-md border-transparent 
                                   flex-1 flex justify-center items-center text-sm 
                                 hover:bg-brand-300 focus:outline-none focus:ring-2 
                                   focus:ring-offset-2 focus:ring-offset-zinc-900
                                 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        Enviar Feedback
                    </button>
                </footer>
            </form>
        </>
    )
} 