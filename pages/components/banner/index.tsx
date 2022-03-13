import React from "react";
import { Button } from "../button";
import { Typography } from "../typography";
import styles from "./banner.module.scss";

export const Banner = () => {
    return (
        <div
            className={styles.container}
            style={{ backgroundImage: 'url("/water-background.png")' }}
        >
            <div className={styles.header}>
                {/* <h1 className={styles.title}> */}
                <Typography variant="h1">
                    Hãy để chúng tôi mang nguồn nước sạch trở về
                </Typography>
                {/* </h1> */}
                <Button className={styles.contactButton} type="primary">
                    Liên Hệ Với Chúng Tôi
                </Button>
            </div>
            {/* <img className={styles.bannerImage} src="/water-background.png" /> */}
        </div>
    );
};
