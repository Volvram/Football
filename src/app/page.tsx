import styles from './page.module.scss'
import Link from 'next/link'
import Header from '@/components/Header/Header'
import LeftBar from '@/components/LeftBar/LeftBar'

export default function Home() {
  return (
    <div>
        <main className={styles.main}>
            <Header />
            <div className={styles.main_body}>
              <LeftBar />
              <Link href="/example" style={{color: "blue", textDecoration: "underline", marginLeft: "auto", marginRight: "auto"}}>
                Перейти на страницу пример
              </Link>
            </div>
            
        </main>
    </div>
  )
}