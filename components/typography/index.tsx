import classNames from "classnames";
import { ReactChildren, ReactNode } from "react";
import styles from "./typography.module.scss";
type IHeadingVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type ISubTitleVariants = "subtitle1" | "subtitle2";
type IBodyVariants = "body1" | "body2";
type IOtherVariants = "button" | "caption" | "overline";

type IColor =
    | "primary"
    | "secondary"
    | "interactive"
    | "disabled"
    | "error"
    | "light"
    | "default";

type ITypographyVariants =
    | IHeadingVariants
    | ISubTitleVariants
    | IBodyVariants
    | IOtherVariants;

interface Props {
    component?: string;
    variant: ITypographyVariants;
    children: ReactNode;
    color?: IColor;
    overrideStyle?: string;
    for?: string;
}

const buildTypography = (variant: ITypographyVariants) => {
    switch (variant) {
        case "h1":
            return {
                component: "h1",
            };
        case "h2":
            return {
                component: "h2",
            };
        case "h3":
            return {
                component: "h3",
            };
        case "h4":
            return {
                component: "h4",
            };
        case "h5":
            return {
                component: "h5",
            };
        case "h6":
            return {
                component: "h6",
            };
        case "subtitle1":
            return {
                component: "h6",
            };
        case "subtitle2":
            return {
                component: "h6",
            };
        case "body1":
            return {
                component: "p",
            };
        case "body2":
            return {
                component: "p",
            };
        case "button":
            return {
                component: "span",
            };
        case "caption":
            return {
                component: "span",
            };
        case "overline":
            return {
                component: "span",
            };
        default:
            return { component: "p" };
    }
};

const combineStyles = (
    className: ITypographyVariants,
    color: IColor,
    overrideStyle?: string
) => {
    return classNames([styles[className], styles[color], overrideStyle ?? {}]);
};

export const Typography = ({
    variant = "body1",
    color = "default",
    overrideStyle,
    component,
    children,
    ...rest
}: Props) => {
    const typography = buildTypography(variant);
    const TypographyComponent = component ?? (typography.component as any);
    const combinedStyle = combineStyles(variant, color, overrideStyle);

    return (
        <TypographyComponent className={combinedStyle} {...rest}>
            {children}
        </TypographyComponent>
    );
};
