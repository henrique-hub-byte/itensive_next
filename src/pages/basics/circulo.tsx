import CirculoComponente from "@/components/CirculoComponente";

export default function Circulo(){
    return (
        <div className="flex justify-around items-center h-screen bg-black">
        <CirculoComponente text="Circ #1"></CirculoComponente>
        <CirculoComponente text="Circ #2"></CirculoComponente>
        <CirculoComponente text="Circ #3"></CirculoComponente>
        <CirculoComponente text="Circ #4" quasePerfeito={true}/>
        </div>
    )
}