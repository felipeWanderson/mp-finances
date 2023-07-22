import Image from 'next/image'
import logo from '@/assets/logo.svg'
import styles from '@/components/common/Logo/Logo.module.css'

export function Logo() {
  return (
    <div className={styles.logo}>
      <Image src={logo} alt="Logo MPFinances" /> <span>MPfinances</span>
    </div>
  )
}