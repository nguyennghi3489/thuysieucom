import React from "react";
import Image from "next/image";
import { Nav } from "../nav";
import styles from "./header.module.scss";

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image
                    src="/logo.png"
                    width={60}
                    height={50}
                    layout="responsive"
                    alt="Thủy Siêu Logo"
                />
            </div>
            <Nav />
        </div>
    );
};
