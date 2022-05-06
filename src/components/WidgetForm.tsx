import { CloseButton } from "./CloseButton";

/* importando imagens dos icones */
import bugImageURL from '../assets/bug.svg';
import ideaImageURL from '../assets/idea.svg';
import thoughtImageURL from '../assets/thought.svg';

/* Criando objeto que contem as categorias de feedbacks */
const feedbackType = {
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

/* // Object.entries(feedbackType) =>
Salvando em forma de vetor, que vai ser percorrido com um .map
[ 
    ['BUG', {..conteudo...}],
    ['IDEA', {..conteudo...}]
    [' thought', {..conteudo...}],
] */

export function WidgetForm() {
    return (
        /*   A biblioteca é util para fazer a recursividade de maneira prática: w-[calc(100vw-2rem)] md:w-auto */
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

               {/*  Nao esta funcionado */}
                <CloseButton /> 
            </header>
            
            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackType).map(([key, value]) =>{
                    return(
                        <button
                            key={key}
                            className="br-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 
                                       border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            /* onClick{} */
                            type="button"
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                }) }
            </div>
            

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" href="mailto:antonio.afce@gmail.com" >Antonio Filho</a> 
            </footer>
        </div>
    );
}