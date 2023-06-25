import React from "react";
import styles from "./bodycontent.module.scss";
import LeftContent from "./components/LeftContent/LeftContent";
import Matches from "./components/MiddleContent/MiddleContent";

const BodyContent: React.FC = () => {
    return (
        <div className={styles.bodycontent}>
            <LeftContent />
            <Matches />
        </div>
    )
}

export default BodyContent;