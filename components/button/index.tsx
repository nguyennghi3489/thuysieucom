import React from "react";
import classNames from "classnames";
import styles from "./button.module.scss";
import { Typography } from "../typography";

const getStyleByType = (type?: string) => {
    switch (type) {
        case "primary":
            return styles.primary;
        default:
            return undefined;
    }
};

export const Button = ({ children, className, type }: any) => {
    const styleByType = getStyleByType(type);
    const style = className;

    return (
        <>
            <button
                className={classNames(styles.button, styleByType, className)}
            >
                <Typography
                    variant="button"
                    color="light"
                    overrideStyle={styleByType}
                >
                    {children}
                </Typography>
            </button>
        </>
    );
};
