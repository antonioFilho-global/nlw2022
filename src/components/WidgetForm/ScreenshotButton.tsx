/* Importando ícone de camera */ 
import { Camera, Trash } from "phosphor-react";
/* Biblioteca que tem a função de tira print */
import html2canvas from "html2canvas";
import { useState } from "react";
/* Componente que contem ícone de Loading */
import { Loading } from "../Loading";
import { unmountComponentAtNode } from "react-dom";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { backgroundPosition } from "html2canvas/dist/types/css/property-descriptors/background-position";

/* Enviado o print para outro unmountComponentAtNode, no caso FeedbackContentStep */
interface ScreenshotButtonProps {
    screenshot: string | null;
    onScreenshotTook: (Screenshot: string | null) => void;
}


export function ScreenshotButton({ 
    screenshot,
    onScreenshotTook }: ScreenshotButtonProps) {

    /* Criando status, que representa se está ou não sendo tirado print da tela */
    const [isTakingScreenshot, setIsTakeingScreenshot] = useState(false);

    async function handleTakeScreenshot() {
        /* Auterando o status para verdadeiro, ou sejá o print está sendo tirado */
        setIsTakeingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        /* Tira um print do contúdo do HTML e salva em PNG no formato  base64, 
        que é um texto que representa a imagem */
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTook(base64image);
        /* Auterando o status para falso, ou sejá o print já foi tirado*/
        setIsTakeingScreenshot(false);
    }

    if (screenshot) {
        return (
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end
                           text-zinc-400 hover:text-zinc-100 transition-colors"
                           /* Ao clicar no icone de lixeira o screenshot é retornado para nulo, desfazendo assim o print tirado*/
                           onClick={() => onScreenshotTook(null)}
                           /* Exibindo o print em forma de preview */
                           style={{
                            backgroundImage: `url(${screenshot})`,
                            /* Para tonar mais visível para o usuário o conteúdo do print preview */ 
                            backgroundPosition: 'right bottom',
                            backgroundSize: 180,
                           }}
                        >

                    {/* Icone de lixeira da biblioca phosphor-react */}
                    <Trash weight="fill" />
            </button>
        );
    }

    return (
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="p-2 bg-zinc-800 rounded-md border-transparent 
                       hover:br-zinc-700 transition-colors focus:outline-none 
                       focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
                     focus:ring-brand-500"
        >
            {/* Por padrão exibe o componente de Camera, e quando o print 
            está sendo realizado muda para o componente de Loading */}
            { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" /> }
        </button>
    )
}