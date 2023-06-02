import Contador from "@/components/comunicacao/indireta2/Contador";

export default function Indireta2() {
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen bg-black">
            <h1 className="text-5xl text-rose-50 mb-10">Comunicação Indireta</h1>
            <div className="flex gap-5">
                <Contador></Contador>
                <Contador></Contador>
                <Contador></Contador>
            </div>
        </div>
    )
}