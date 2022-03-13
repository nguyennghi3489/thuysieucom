import React from "react";
import { Nav } from "../nav";
import styles from "./header.module.scss";

export const Header = () => {
    return (
        <div className={styles.container}>
            <img src="/logo.png" className={styles.logo} />
            <Nav />
        </div>
    );
};
