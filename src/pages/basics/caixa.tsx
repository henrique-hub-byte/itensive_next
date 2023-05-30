import CaixaComponente from "@/components/CaixaComponente";

export default function Caixa (){
    return (
        <div className='flex gap-7 p-7'>
            <CaixaComponente>#1</CaixaComponente>
            <CaixaComponente>#2</CaixaComponente>
            <CaixaComponente>#3</CaixaComponente>
            <CaixaComponente>
                <ul className="list-disc">
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>
            </CaixaComponente>
        </div>
    )
}