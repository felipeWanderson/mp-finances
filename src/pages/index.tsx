import logo from '../../public/logo.svg'
import googleIcon from '../../public/google-icon.svg'
import AppleIcon from '../../public/apple-icon.svg'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  const isAuthenticated = !!session;

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard')
    }
  }, [isAuthenticated, router])

  return (
    <main className={styles.homeBackground}>
     <section className={styles.homeContainer}>
       <header className={styles.logo}>
         <Image src={logo} alt="Logo MPFinances"/> <span>MPfinances</span>
       </header>
 
       <div className={styles.homeContent}>
         <h1>Controle suas finanças de forma muito simples</h1>
 
         <div className={styles.loginContainer}>
           <span>Faça seu login com uma das contas abaixo</span>
 
           <button className={styles.buttonLoginSocial} onClick={() => signIn()}>
             <Image src={googleIcon} alt='Icone do google'/> Entrar com o Google
           </button>
           <button className={styles.buttonLoginSocial}>
             <Image src={AppleIcon} alt='Icone da apple'/> 
             Entrar com a Apple
           </button>
         </div>
       </div>
       
     </section>
    </main>
   )
}
