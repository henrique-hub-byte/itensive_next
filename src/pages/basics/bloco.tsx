import BlocosComponentes from "@/components/basics/blocosComponentes";

export default function Blocos () {
    return (
        <div className="flex justify-center items-center gap-7 p-7 bg-black h-screen">
            <BlocosComponentes>#</BlocosComponentes>
            <BlocosComponentes>#</BlocosComponentes>
            <BlocosComponentes>#</BlocosComponentes>
            <BlocosComponentes>
                <ul className="list-disc">
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>
            </BlocosComponentes>
        </div>
    )
}