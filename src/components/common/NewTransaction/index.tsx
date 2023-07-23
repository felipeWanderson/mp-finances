import { useState } from "react"
import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X } from "@phosphor-icons/react"

import {NewTransactioForm} from '@/components/Form/NewTransaction'
import styles from '@/components/common/NewTransaction/NewTransaction.module.css'

export function NewTransaction() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button type="button" className={styles.buttonAction}>
          <Plus size={24} color='#FF872C' />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
      <Dialog.Overlay className={styles.DialogOverlay} />
      <Dialog.Content className={styles.DialogContent}>
        <Dialog.Title className={styles.DialogTitle}>Cadastrar transação</Dialog.Title>
        <NewTransactioForm />
        <Dialog.Close asChild>
          <button className={styles.IconButton} aria-label="Close">
            <X size={20} color='#969CB3'/>
          </button>
        </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}