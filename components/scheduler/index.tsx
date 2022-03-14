import React from "react";
import { Button } from "../button";
import { Input } from "../input";
import { Separator } from "../separator";
import { Typography } from "../typography";
import styles from "./scheduler.module.scss";

export const Scheduler = () => {
    return (
        <div className={styles.container}>
            <Typography variant="h2" color="primary">
                Đặt lịch hẹn để được kiểm tra nước miễn phí
            </Typography>
            <Typography variant="h5" color="secondary">
                Nhập email của bạn chúng tôi sẽ liên hệ với bạn sớm nhất
            </Typography>
            <div className={styles.form}>
                <Input />
                <Button>Submit</Button>
            </div>
        </div>
    );
};
