import React from "react";
import Image from "next/image";
import styles from "./leftbar.module.scss";
import soccerBallIcon from "@/assets/img/soccerBall.png";

const LeftBar: React.FC = () => {
    return (
        <div className={styles.leftbar}>
            <hr className={styles.leftbar_hr} />
            <div className={styles.leftbar_sections}>
                <Image src={soccerBallIcon} className={styles.leftbar_sections_section} alt="Футбол" />
            </div>
        </div>
    )
}

export default LeftBar;