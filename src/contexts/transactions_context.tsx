import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface ParamsTransaction {
    id: number,
    description: string,
    type: 'entrando' | 'saindo',
    category: string,
    price: number,
    createdAt: string,

}

interface TransactionContextType {
    transactions: ParamsTransaction[];
    fetchTransactions: (query?: string) => Promise<void>
}


export const TransactionContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<ParamsTransaction[]>([])

    const fetchTransactions = async (query?: string) => {
        try {
            const response = await api.get('/transactions', {
                params: {
                    q:query
                }
            })
            setTransactions(response.data)
        } catch (error) {
            console.error('Erro',error)
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])
    return (
        <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
            {children}
        </TransactionContext.Provider>
    )
}