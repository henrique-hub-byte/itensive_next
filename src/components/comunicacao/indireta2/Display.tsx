import 'tailwindcss/tailwind.css';

interface DisplayProps {
    valor: number
}

export default function Display(props: DisplayProps){
    return (
        <div className={`
        flex justify-center items-center flex-1
        text-rose-50 text-5xl font-black bg-zinc-800 rounded-md p-5
        `}>
            {props.valor}
        </div>
    )
}