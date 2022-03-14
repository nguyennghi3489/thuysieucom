import React from "react";
import Link from "next/link";
import styles from "./nav.module.scss";
import { Typography } from "../typography";

export const Nav = () => {
    return (
        <div className={styles.container}>
            <Link href="/">
                <Typography
                    color="secondary"
                    variant="body1"
                    overrideStyle={styles.link}
                >
                    Trang Chủ
                </Typography>
            </Link>
            <Link href="/blog">
                <Typography
                    color="secondary"
                    variant="body1"
                    overrideStyle={styles.link}
                >
                    Dịch Vụ
                </Typography>
            </Link>
            <Link href="/product">
                <Typography
                    color="secondary"
                    variant="body1"
                    overrideStyle={styles.link}
                >
                    Liên Hệ
                </Typography>
            </Link>
        </div>
    );
};
