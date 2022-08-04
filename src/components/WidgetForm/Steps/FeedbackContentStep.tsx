import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

/* Recebendo via props do outro componente */
interface FeedbackTypeStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({ 
    feedbackType, 
    onFeedbackRestartRequested 
} : FeedbackTypeStepProps ) {
    /* recebendo dados de outro componente */
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    
    
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


            <form className="my-4 w-full">
                <textarea
                    /* A caixa de texto vai ter uma largura mínima dew 304px e altura minima de 112px*/
                    className="min-w-[304px] w-full min-h-[112px] text-sm 
                             placeholder-zinc-400 text-zinc-100
                             border-zinc-600 bg-transparent rounded-md 
                             focus:border-brand-500 focus:ring-brand-500 
                             focus:ring-1 focus:outline-none resize-none
                             scrollbar scrollbar-thumb-zinc-700"
                    placeholder="Conte com detalhe o que está acontecendo...."
                />
            </form>
        </>
    )
} 