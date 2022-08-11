/* Importando ícone de camera */ 
import { Camera } from "phosphor-react";
/* Biblioteca que tem a função de tira print */
import html2canvas from "html2canvas";
import { useState } from "react";

export function ScreenshotButton() {

    /* Criando status, que representa se está ou não sendo tirado print da tela */
    const [isTakingScreenshot, setIsTakeingScreenshot] = useState(false);

    async function handleTakeScreenshot() {
        /* Auterando o status para verdadeiro, ou sejá o print está sendo tirado */
        setIsTakeingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        /* Tira um print do contúdo do HTML e salva em PNG no formato  base64, 
        que é um texto que representa a imagem */
        const base64image = canvas.toDataURL('image/png');

        console.log(base64image);

        /* Auterando o status para falso, ou sejá o print já foi tirado*/
        setIsTakeingScreenshot(false);
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
            <Camera className="w-6 h-6" />
        </button>
    )
}