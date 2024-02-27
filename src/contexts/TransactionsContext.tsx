import { ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

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

    const fetchTransactions = useCallback( 
        async (query?: string) => {
            const response = await api.get('transactions',{
                params:{
                    q:query,
                    _sort: 'createdAt',
                    _order:'desc',
                }
            })

            setTransactions(response.data);
        } , 
    []);

    const createTransaction = useCallback( 
        async (data: NewTransactionInput) => {
            const {category,description,price,type} = data;

            const response = await api.post('transactions', {
                description,
                price,
                category,
                type,
                createdAt: new Date(),
            });

            setTransactions(state => [response.data, ...state]);
        }, 
    []);

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