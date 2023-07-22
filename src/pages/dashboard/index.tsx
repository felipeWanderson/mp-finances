import Image from 'next/image'
import logo from '../../../public/logo.svg'
import styles from '@/styles/Dashboard.module.css'
import { Header } from '@/components/Header'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

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
    </main>
  )

}
