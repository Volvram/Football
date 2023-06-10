import Meta from "@/app/meta";
import styles from "./styles.module.scss";
import Link from "next/link";

const Example: React.FC = () => {
    return (
        <div className={styles.example}>
            <Meta title="Example" description="Example page for training"/>
            <div className={styles.example_body}>
                <h2 className={styles.example_body_title}>Это страница-пример!</h2>
                <Link href="/" className={styles.example_body_back}>
                    Вернуться на главную страницу
                </Link>
            </div>
            
        </div>
    )
}

export default Example;