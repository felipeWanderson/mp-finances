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
          <Card titleCard='Entradas' amount={17400.00} type='INCOME' />
          <Card titleCard='Saídas' amount={1259.00} type='OUTCOME' />
          <Card titleCard='Total' amount={16141.00} type='TOTAL' />
        </div>
        <div className={styles.listContainer}>
          <table>
            <thead>
              <th>Titulo</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Data</th>
            </thead>
            <tbody>
              <tr>
                <td width="50%">Desenvolvimento de site</td>
                <td>R$ 12.000,00</td>
                <td>Venda</td>
                <td>13/04/2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )

}
