import { ReactNode, useCallback, useEffect, useState, createContext } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

// interface TransactionsContextType {
//   transactions: Transaction[]
//   fetchTransactions: (query?: string) => Promise<void>
//   createTransaction: (data: CreateTransactionInput) => Promise<void>
// }

export interface TransactionsContextType {
  transactions: Transaction[]
  showTransactions: boolean;
  handleShowTransaction: () => void;
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [showTransactions, setShowTransactions] = useState<boolean>(false)

  const handleShowTransaction = useCallback(() => {
    setShowTransactions(prevState => !prevState)
  }, [])

  // const createTransaction = useCallback(
  //   async (data: CreateTransactionInput) => {
  //     const { description, price, category, type } = data

  //     setTransactions((state) => [response.data, ...state])
  //   },
  //   [],
  // )

  // useEffect(() => {
  //   fetchTransactions()
  // }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{showTransactions, transactions, handleShowTransaction}}
    >
      {children}
    </TransactionsContext.Provider>
  )
}