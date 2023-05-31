import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import { useState } from 'react';

export default function ImagemAleatoria() {
    const [pesquisa, setPesquisa] = useState<string>('abstract')
    const [tamanho, setTamanho] = useState<number>(300)
    const url = 'http://source.unsplash.com/featured/200x200?'

    /* function urlImagem() {
        return `${url}${setPesquisa}`
    } */

    function renderizarBotao(valor: string) {
        return (

            <button className={`
                bg-blue-500 px-4 py-3 rounded-md
            `} onClick={() => {
                    setPesquisa(valor)
                    console.log(valor) 
                }}>

                {valor}
            </button>
        )
    }

    return (
        <div className='flex flex-col gap-3 border border-zinc-800 p-7 rounded-md bg-black'>
            
            <Image src={`${url}${tamanho}x${tamanho}?${pesquisa}`} height={300} width={300} alt="Imagem"/>
            
            <div className='flex justify-between gap-5'>
                {renderizarBotao('abstract')}
                {renderizarBotao('city')}
                {renderizarBotao('person')}
            </div>

            <div>
                <input type="number" value={tamanho}
                className='border border-black p-2 rounded-md outline-none w-full'
                onChange={e => {
                    setTamanho(+e.target.value)

                }}
                />
            </div>
        </div>
    )
}