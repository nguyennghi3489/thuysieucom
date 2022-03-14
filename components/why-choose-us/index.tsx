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
                    <Typography variant="h4">Why choose us</Typography>
                    <Typography variant="h2" color="primary">
                        Protect your family with one of the best water filtering
                        system
                    </Typography>
                    <Typography variant="subtitle2">
                        We produce high-tech solutions in the field of water
                        purification that meet the most stringent quality
                        standards and customer requirements. Purification is
                        carried out with the help of innovative developments of
                        the brand.
                    </Typography>
                </div>
            </div>
        </div>
    );
};
