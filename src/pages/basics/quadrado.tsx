import QuadradoComponente from "@/components/basics/QuadradoComponente"

export default function Quadrado (){
    return (
        <div className="flex justify-around items-center bg-zinc-500 h-screen">
            <QuadradoComponente text="Quad #1"></QuadradoComponente>
            <QuadradoComponente text="Quad #2"></QuadradoComponente>
            <QuadradoComponente text="Quad #3"></QuadradoComponente>
            <QuadradoComponente text="Quad #4" almostPerfect={true}></QuadradoComponente>
            
        </div>
        
    )
}