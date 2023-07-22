import * as AvatarRadix from '@radix-ui/react-avatar'
import styles from '@/components/Avatar/Avatar.module.css'
import { useSession } from 'next-auth/react'

export function Avatar() {
  const session = useSession();
  const { data } = session;


  return (
    <AvatarRadix.Root className={styles.AvatarRoot}>
      {data?.user?.image && (
        <AvatarRadix.Image
        className={styles.AvatarImage}
        src={data?.user?.image || ""}
        alt={data?.user?.name || ""}
      />
      )}
      <AvatarRadix.Fallback className={styles.AvatarFallback} delayMs={5000}>
        FW
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  )
} 
