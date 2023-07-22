
import styles from '@/components/Header/Header.module.css'
import { Logo } from '@/components/common/Logo'

export function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.headerContent}>
         
          <Logo />
          <button type="button" className={styles.buttonPrimary}>
            Nova Transação
          </button>
        </div>

      </header>
  )
}