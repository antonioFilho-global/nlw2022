/* Importando icones da biblioteca phosphor-react */
import { ChatTeardropDots } from 'phosphor-react';
/* Biblioteca que ajuda na Acessibilidade */
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';


export function Widget() {
    /* Cria um icone que representa feedback, que tem a funcionalidade de hover, 
    mostrando e escondendo o texto com transição de movimento linear */
    return (
       /*  Posicionando o icone */
       /* Funcionamento do Popover: é usado o Popover.Button onde se clicado nessa parte ira abrir o o Popover.Panel e sera exibido seu conteudo */
       /* Ajudando na acessibilidade, atraves da nevagação pelo teclado */ 
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
            <Popover.Panel>
                <WidgetForm/>
            </Popover.Panel> 

            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6" />

               {/* overflow-hidden: esconde todo texto que estrapolar o tamanho do elemento pai,
               foi criado um grupo de elementos na class button, e um houver para ser aplicado nesse grupo*/}
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    FeedBack
                </span>
            </Popover.Button>
        </Popover>
    )
}