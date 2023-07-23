
import styles from '@/components/Header/Header.module.css'
import EyeSVG from '@/assets/eye.svg'
import PowerSVG from '@/assets/power.svg'
import Image from 'next/image'
import { Avatar } from '../Avatar'
import { useSession, signOut } from "next-auth/react"
import { Eye, Plus, Power } from '@phosphor-icons/react'
import { NewTransaction } from '../common/NewTransaction'
export function Header() {
  const session = useSession()
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
            <button type="button" className={styles.buttonAction}>
              <Eye size={24} color='#FF872C' />
            </button>
            <button type="button" className={styles.buttonAction} onClick={() => signOut()}>
              <Power size={24} color='#FF872C' />
            </button>
          </div>
        </div>

      </header>
  )
}