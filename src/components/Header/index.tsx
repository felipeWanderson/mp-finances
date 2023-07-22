
import styles from '@/components/Header/Header.module.css'
import EyeSVG from '@/assets/eye.svg'
import PowerSVG from '@/assets/power.svg'
import Image from 'next/image'
import { Avatar } from '../Avatar'
import { useSession, signOut } from "next-auth/react"
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
            <button type="button" className={styles.buttonAction}>
              <Image src={EyeSVG} alt='Olhos'/>
            </button>
            <button type="button" className={styles.buttonAction} onClick={() => signOut()}>
              <Image src={PowerSVG} alt='Deligar'/>
            </button>
          </div>
        </div>

      </header>
  )
}