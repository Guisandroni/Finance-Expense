import { createContext, ReactNode, useEffect, useState } from "react";

interface ParamsTransaction {
    id: number,
    description: string,
    type: 'entrando' | 'saindo',
    category: string,
    price: number,
    createdAt: string,

}

interface  TransactionContextType{
    transactions:ParamsTransaction[]
}


 export const TransactionContext = createContext({} as TransactionContextType)

export const TransactionsProvider= ({children}:{children:ReactNode}) =>{
    const [transactions, setTransactions] = useState<ParamsTransaction[]>([])

    const fetchTransactions = async () => {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()
        setTransactions(data)
    }

    useEffect(() => {
        fetchTransactions()
    }, [])
    return(
        <TransactionContext.Provider value={{transactions}}>
            {children}
        </TransactionContext.Provider>
    )
}