import styles from './page.module.scss'
import Link from 'next/link'
import Header from '@/components/Header/Header'

export default function Home() {
  return (
    <div>
        <main className={styles.main}>
            <Header />
            <Link href="/example" style={{color: "blue", textDecoration: "underline", marginLeft: "auto", marginRight: "auto"}}>
                Перейти на страницу пример
            </Link>
        </main>
    </div>
  )
}