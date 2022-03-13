import React from "react";
import styles from "./reasons.module.scss";

const Reason = () => {
    return (
        <div className={styles.item}>
            <h3>Effectiveness</h3>
            <p>
                Our filter removes 99% of lead and asbestos and 62 other harmful
                contaminants.
            </p>
        </div>
    );
};

export const Reasons = () => {
    return (
        <div className={styles.container}>
            <Reason />
            <div className={styles.item}>Hello World</div>
            <div className={styles.item}>Hello World</div>
            <div className={styles.item}>Hello World</div>
        </div>
    );
};
