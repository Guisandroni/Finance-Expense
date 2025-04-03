import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TransactionContext } from "../../contexts/transactions_context";
import {  useContext } from "react";

const SearchParams = z.object({
    query: z.string().min(1, 'Busque uma transação')
})
type SearchParamsInputs = z.infer<typeof SearchParams>

export function Search() {

    const { register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchParamsInputs>({
        resolver: zodResolver(SearchParams)
    })

    const {fetchTransactions} = useContext(TransactionContext)

    const handleSearchTransactions =  async (data: SearchParamsInputs) => {
        await fetchTransactions(data.query)
        console.log('fazendo pesquisa', data.query)
    }
    return (
        <>
            <form
                onSubmit={handleSubmit(handleSearchTransactions)}
                className="flex flex-row mt-10 gap-4">
                <input

                    placeholder="Busque uma transação"
                    {...register('query')}
                    type="text"
                    className="bg-base-gray1 w-full p-3 rounded-lg text-base-gray6 placeholder:text-base-gray6 " />

                <button
                    type="submit"
                    disabled={isSubmitting}

                    className={`flex flex-row items-center justify-center  gap-2 text-green border border-bg-green px-6 rounded-lg py-2 
                        `}>
                    <MagnifyingGlass size={24} className="text-green" />
                    Buscar
                </button>

            </form>

{/* 
            ${isSubmitting ? 'cursor-pointer duration-200 '
                            : 'cursor-not-allowed opacity-75'} */}

        </>
    )
}