import React from "react";
import { Header } from "../header";

interface Props {
    children: React.ReactChildren | React.ReactNode;
}
export const Layout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
};
