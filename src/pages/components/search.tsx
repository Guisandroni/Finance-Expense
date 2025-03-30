import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";



export function Search() {
    const  [text,setText] = useState('')
    return (
        <>
            <div className="flex flex-row mt-10 gap-4">
                <input
                    onChange={(item)=> setText(item.target.value)}
                    value={text}
                    placeholder="Busque uma transação"
                    type="text"
                    className="bg-base-gray1 w-full p-3 rounded-lg text-base-gray6 placeholder:text-base-gray6 " />
                    
                <button className="flex flex-row items-center justify-center cursor-pointer gap-2 text-green border border-bg-green px-6 rounded-lg py-2">
                    <MagnifyingGlass size={24} className="text-green" />
                    Buscar
                </button>
            </div>
        </>
    )
}