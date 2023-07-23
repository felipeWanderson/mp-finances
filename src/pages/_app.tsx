import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"
import type { AppProps } from 'next/app'
import { TransactionsProvider } from '@/context/TransactionContext'

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <TransactionsProvider>
        <Component {...pageProps} />
      </TransactionsProvider>
      
    </SessionProvider>
  )
}
