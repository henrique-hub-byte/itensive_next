import Avo from "@/components/comunicacao/direta/Avo";

export default function Direta(){
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen bg-black">
            <h1 className="text-5xl text-rose-50 mb-10">Comunicação Direta</h1>
            <Avo nome="Lionel" sobrenome="Messi"></Avo>
            <Avo nome="Mila" sobrenome="Rubio"></Avo>
        </div>
    )
}