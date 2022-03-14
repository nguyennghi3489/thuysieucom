import classNames from "classnames";
import React from "react";
import { Typography } from "../../../typography";
import styles from "./reasons.module.scss";

interface ReasonProps {
    title: string;
    subTitle: string;
    isEven?: boolean;
}
const Reason = ({ title, subTitle, isEven = false }: ReasonProps) => {
    return (
        <div className={classNames([styles.item, { [styles.even]: isEven }])}>
            <Typography variant="h4" color="primary">
                {title}
            </Typography>
            <Typography variant="body2">{subTitle}</Typography>
        </div>
    );
};

export const Reasons = () => {
    return (
        <div className={styles.container}>
            <Reason
                title="Effectiveness"
                subTitle="Our filter removes 99% of lead and asbestos and 62 other harmful
                contaminants."
                isEven
            />
            <Reason
                title="Value"
                subTitle="Provides excellent long-term value – enjoy fresh, clean water for less than 12 cents a gallon."
            />

            <Reason
                title="Easy to use"
                subTitle="Is easy to use… and even better, easy to install. Everything you need is included."
                isEven
            />
        </div>
    );
};
