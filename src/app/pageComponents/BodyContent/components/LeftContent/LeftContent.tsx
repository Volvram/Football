import React from "react";

import styles from "./leftcontent.module.scss";

const LeftContent: React.FC = () => {
    return (
        <div className={styles.leftcontent}>
            <p className={styles.leftcontent_h}>Команды</p>
        </div>
    )
}

export default LeftContent;