import Image from 'next/image'
import logo from '../../../public/logo.svg'
import styles from '@/styles/Dashboard.module.css'
import { Header } from '@/components/Header'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Card } from '@/components/common/Card';

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  const isAuthenticated = !!session;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])
  return (
    <main>
      <Header />
      <section className={styles.dashboardContent}>
        <div className={styles.cardsContainer}>
          <Card titleCard='Entradas' amount={17400.00} type='INCOME'/>
          <Card titleCard='Saídas' amount={1259.00} type='OUTCOME' />
          <Card titleCard='Total' amount={16141.00} type='TOTAL'/>
        </div>
      </section>
    </main>
  )

}
