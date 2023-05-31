import 'tailwindcss/tailwind.css';

export default function Blocos(props: any){
    return (
        <div className={`
            flex justify-center items-center
            bg-orange-600 rounded-md p-2 w-64 h-64 text-xl font-bold
        `}>
            {props.children}
        </div>
    )
}