import styles from './page.module.scss'
import Header from '@/components/Header/Header'
import LeftBar from '@/components/LeftBar/LeftBar'
import BodyContent from './pageComponents/BodyContent/BodyContent'

export default function Home() {
  return (
    <div className={styles.page}>
        <main className={styles.main}>
            <Header />
            <div className={styles.main_body}>
              <LeftBar />
              <BodyContent />
            </div>
        </main>
    </div>
  )
}