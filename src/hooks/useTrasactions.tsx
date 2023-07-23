import { TransactionsContext, TransactionsContextType } from "@/context/TransactionContext";
import { useContext } from "react";

export function useTransaction(): TransactionsContextType {
  const context = useContext(TransactionsContext);

  if (!context) {
    throw new Error('useAuth só pode ser usado com o AuthProvider');
  }

  return context;
}

