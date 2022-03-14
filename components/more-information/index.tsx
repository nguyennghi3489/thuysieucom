import React from "react";
import { Typography } from "../typography";
import styles from "./more-information.module.scss";

export const MoreInformation = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Typography variant="h2" color="light">
                    Protect your family with one of the best water filtering
                    system
                </Typography>
                <Typography variant="h4" color="light">
                    Call us:
                    <Typography
                        variant="h4"
                        component="span"
                        color="interactive"
                        overrideStyle={styles.phone}
                    >
                        09213932103
                    </Typography>
                </Typography>
            </div>
        </div>
    );
};
