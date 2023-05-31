import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import { useState } from 'react';

export default function ImagemAnimaisAleatoria(){
    const [pesquisa, setPesquisa] = useState<string>('insect')
    const [tamanho, setTamanho] = useState<number>(300)
    const url = 'http://source.unsplash.com/featured/200x200?'

    function renderizarBotao(valor: string){
        
        return (
            <button className={`
            bg-amber-200 px-4 py-3 rounded-md    
            `} onClick={() => {
                setPesquisa(valor)
                console.log(url)
            }}>
            {valor}
            </button>
        )
    }

    return (
        
        <div className='flex flex-col gap-3 border border-zinc-950 p-7 rounded-md bg-slate-400'  >
            <Image src={`${url}${tamanho}/${pesquisa}`} height={300} width={300} alt="Image"/>
        <div className='flex justify-between gap-5'>
                {renderizarBotao('insect')}
                {renderizarBotao('mammals')}
                {renderizarBotao('marine')}
        </div>

        <div>  
            <input type="number" value={tamanho} className='border border-amber-300 p-2 rounded-md outline-none w-full'
        onChange={e => {
            setTamanho(+e.target.value)
        }}/>
        </div>
        </div>
    )
}