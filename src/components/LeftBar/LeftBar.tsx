import React from "react";
import Image from "next/image";
import styles from "./leftbar.module.scss";
import soccerBallIcon from "@/assets/img/soccerBall.png";
import { leftbarSections } from "@/config/leftbarSections";

const LeftBar: React.FC = () => {
    return (
        <div className={styles.leftbar}>
            <hr className={styles.leftbar_hr} />
            <div className={styles.leftbar_sections}>
                {leftbarSections.map(section => {
                    return (
                        <Image src={section.image} className={styles.leftbar_sections_section} alt={section.name} />
                    )
                })
                }
            </div>
        </div>
    )
}

export default LeftBar;