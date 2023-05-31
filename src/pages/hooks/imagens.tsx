import ImagemAleatoria from "@/components/hooks/ImagemAleatoria";

export default function PaginaImagens () {
    return (
        <div className={
            `flex justify-center items-center h-screen gap-5 bg-amber-400`
        }>
            <ImagemAleatoria></ImagemAleatoria>
            <ImagemAleatoria></ImagemAleatoria>
            <ImagemAleatoria></ImagemAleatoria>
        </div>
    )
}