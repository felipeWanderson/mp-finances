
import styles from '@/components/Header/Header.module.css'
import { Avatar } from '../Avatar'
import { useSession, signOut } from "next-auth/react"
import { Eye, EyeSlash, Power } from '@phosphor-icons/react'
import { NewTransaction } from '../common/NewTransaction'
import {useTransaction} from '@/hooks/useTrasactions'
export function Header() {
  const session = useSession()
  const {showTransactions, handleShowTransaction} = useTransaction();
  return (
    <header className={styles.header}>
        <div className={styles.headerContent}>
         
          <div className={styles.headerProfile}>
            <Avatar />
            <span>
              Olá, <strong>{session.data?.user?.name}</strong>
            </span>
          </div>
          <div className={styles.headerActions}>
            <NewTransaction />
            <button type="button" className={styles.buttonAction} onClick={handleShowTransaction}>
              {!showTransactions ? <EyeSlash size={24} color='#FF872C'  /> : <Eye size={24} color='#FF872C' />}
            </button>
            <button type="button" className={styles.buttonAction} onClick={() => signOut()}>
              <Power size={24} color='#FF872C' />
            </button>
          </div>
        </div>

      </header>
  )
}