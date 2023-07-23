import styles from '@/components/Form/NewTransaction/NewTransactioForm.module.css'
import IncomeSVG from '@/assets/income.svg'
import OutcomeSVG from '@/assets/outcome.svg'
import Image from 'next/image'

export function NewTransactioForm() {
  return (
    <form className={styles.formContainer}>
      <div className={styles.inputNewTransaction}>
        <input type="text" placeholder='Nome' />
      </div>
      <div className={styles.inputNewTransaction}>
        <input type="text" placeholder='Preço' />
      </div>
     
      <div className={styles.buttonAction}>
        <button className={styles.buttonIncomme}>
          <Image src={IncomeSVG} alt="" />
          Entradas
        </button>
        <button className={styles.buttonOutcomme}>
          <Image src={OutcomeSVG} alt="" />
          Saídas
        </button>
      </div>
      <div className={styles.inputNewTransaction}>
        <input type="text" placeholder='Categoria' />
      </div>

      <button type="submit" className={styles.buttonSubmit}>Cadastrar</button>
    </form>
  )
}