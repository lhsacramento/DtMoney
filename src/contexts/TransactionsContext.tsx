import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction{
    id: number;
    price: number;
    type: 'income' | 'outcome';
    description: string;
    category: string;
    createdAt: string;
}

interface NewTransactionInput{
    price: number;
    type: 'income' | 'outcome';
    description: string;
    category: string;
}

interface TransactionContextType{
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: NewTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps{
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({children}:TransactionsProviderProps){

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function fetchTransactions(query?: string){
        const response = await api.get('transactions',{
            params:{
                q:query,
                _sort: 'createdAt',
                _order:'desc',
            }
        })

        setTransactions(response.data);
    }

    async function createTransaction(data: NewTransactionInput){
        const {category,description,price,type} = data;

        const response = await api.post('transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date(),
        });

        setTransactions(state => [response.data, ...state]);
    }

    useEffect(() => {
        fetchTransactions();
    }, []);


    return(
        <TransactionsContext.Provider value={{
            transactions,
            fetchTransactions,
            createTransaction,
            }}>
            {children}
        </TransactionsContext.Provider>
    )
}