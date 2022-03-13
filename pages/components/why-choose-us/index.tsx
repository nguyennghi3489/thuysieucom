import React from "react";
import { Typography } from "../typography";
import { Reasons } from "./components/reasons";
import styles from "./why-choose-us.module.scss";

export const WhyChooseUs = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.subColumn}>
                    <Reasons />
                </div>
                <div className={styles.mainColumn}>
                    <Typography variant="h1">Hello World</Typography>
                </div>
            </div>
        </div>
    );
};
