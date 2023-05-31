import ImagemAnimaisAleatoria from "@/components/hooks/ImagemAnimaisAleatoria";

export default function PaginaImagensAnimalis(){
    return (
        <div className={`
            flex justify-center items-center h-screen gap-5 bg-black
        `}>
            <ImagemAnimaisAleatoria></ImagemAnimaisAleatoria>
            <ImagemAnimaisAleatoria></ImagemAnimaisAleatoria>
            <ImagemAnimaisAleatoria></ImagemAnimaisAleatoria>
        </div>
    )
}