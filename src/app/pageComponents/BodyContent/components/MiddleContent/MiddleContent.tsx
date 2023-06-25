import React from "react";
import Image from 'next/image'

import styles from "./middlecontent.module.scss";

import footballer from "@/assets/img/footballer.png"
import greenSector from "@/assets/img/greenSector.svg";

const MiddleContent: React.FC = () => {
    return (
        <div className={styles.middlecontent}>
            <div className={styles.middlecontent_event}>
                <Image src={footballer} className={styles.middlecontent_event_image} alt="Футболист" />
                <p className={styles.middlecontent_event_h}>Еженедельный футбольный челлендж</p>
                <Image src={greenSector} className={styles.middlecontent_event_sector} alt="Зелёный сектор" />
            </div>
            <div className={styles.middlecontent_matches}>
                <p className={styles.middlecontent_matches_h}>Предстоящие матчи</p>
                <div className={styles.middlecontent_matches_list}>
                    {[1,2,3,4,5,6,7,8,9].map(match => {
                        return (
                            <div key={match} className={styles.middlecontent_matches_list_match}>
                                <p className={styles.middlecontent_matches_list_match_team}>NY Yorks</p>
                                <p className={styles.middlecontent_matches_list_match_team}>NY Yorks</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default MiddleContent;