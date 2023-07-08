"use client";
import  React from "react";
import Image from 'next/image'

import styles from "./middlecontent.module.scss";

import footballer from "@/assets/img/footballer.png"
import greenSector from "@/assets/img/greenSector.svg";

const MiddleContent: React.FC = () => {
    return (
        <div className={styles.middlecontent}>
            <div className={styles.middlecontent_event}>
                <Image draggable={false} src={footballer} className={styles.middlecontent_event_image} alt="Футболист" />
                <p className={styles.middlecontent_event_h}>Еженедельный футбольный челлендж</p>
                <Image draggable={false} src={greenSector} className={styles.middlecontent_event_sector} alt="Зелёный сектор" />
            </div>
            <div className={styles.middlecontent_matches}>
                <p className={styles.middlecontent_matches_h}>Предстоящие матчи</p>
                {/* <video  crossOrigin="anonymous" playsInline={true} src="https://bl.video.matchtv.ru/media/playlist/free_715505d22d66635eab225bf064b2bb59_hd/17_66100174/480/c8ca2cbd5e110f921ef3ef41f48e413b/4798791317.m3u8?sr=14&seek=1688810400"></video> */}
                {/* <video crossOrigin="anonymous" playsInline={true} controls preload="auto"
                    data-setup='{}'>
                    <source src="https://bl.video.matchtv.ru/media/playlist/free_715505d22d66635eab225bf064b2bb59_hd/17_66100174/480/c8ca2cbd5e110f921ef3ef41f48e413b/4798791317.m3u8?sr=14&seek=1688810400" type="application/x-mpegURL"/>
                </video> */}
                {/* <iframe src="https://livemoetv.com/czska-dinamo-moskva-08-07-2023-pryamaya-translyacziya/"></iframe> */}
                <div className={styles.middlecontent_matches_list}>
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(match => {
                        return (
                            <div key={match} className={styles.middlecontent_matches_list_match}>
                                <div className={styles.middlecontent_matches_list_match_teams}>
                                <div className={styles.middlecontent_matches_list_match_team}>

                                </div>
                                <div className={styles.middlecontent_matches_list_match_team}>
                                
                                </div>
                                
                                </div>
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