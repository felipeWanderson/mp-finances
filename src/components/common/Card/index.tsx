import styles from '@/components/common/Card/Card.module.css'
import IncommeSVG from '@/assets/income.svg'
import OutcommeSVG from '@/assets/outcome.svg'
import TotalSVG from '@/assets/total.svg'
import Image from 'next/image';

interface CardProps {
  titleCard: string;
  amount: number;
  upadateAt?: string;
  showValue: boolean;
  type: 'INCOME' | 'OUTCOME' | 'TOTAL';
}

const ICONCARD = {
  INCOME: IncommeSVG,
  OUTCOME: OutcommeSVG,
  TOTAL: TotalSVG
}

export function Card({ titleCard, type, amount, upadateAt, showValue }: CardProps) {

  const amountFomatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount || 0)
  const amountText = 'R$ ---------'

  const cardContainerClass = type !== 'TOTAL' ? styles.cardContainer : styles.cardContainerTotal
  const cardAmountClass = type !== 'TOTAL' ? styles.cardAmount : styles.cardAmountTotal
  const cardHeaderClass = type !== 'TOTAL' ? styles.cardHeader : styles.cardHeaderTotal

  return (
    <div className={cardContainerClass}>
      <header className={cardHeaderClass}>
        <span>{titleCard}</span>
        <Image src={ICONCARD[type]} alt='' />
      </header>
      <div className={styles.cardContent}>
        <p className={cardAmountClass}>{showValue ? amountFomatted: amountText}</p>
        {upadateAt && <span className={styles.lastUpdate}>{upadateAt}</span>}
      </div>
    </div>
  )
}