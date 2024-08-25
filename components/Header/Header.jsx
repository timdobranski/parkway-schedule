'use client';

import styles from './Header.module.css'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  return (
    <div className={styles.logoWrapper}>
      <img src='/photos//parkway.webp'  className={styles.shield} alt="Parkway Logo" onClick={() => router.push('/')}/>
      <h1 className={styles.title}>SCHEDULE</h1>
    </div>
  )
}

