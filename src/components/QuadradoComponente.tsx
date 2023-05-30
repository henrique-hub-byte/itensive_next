import 'tailwindcss/tailwind.css';

interface QuadradoProps {
    text: string
    almostPerfect?: boolean
}

export default function Quadrado (props: QuadradoProps) {
    return (
        <div className={`
            flex justify-center items-center text-4xl
            bg-slate-950 text-white h-64 w-64
            ${props.almostPerfect ? 'rounded-full' : 'rounded-2x1'}
        `}>
            {props.text}
        </div>
    )
}