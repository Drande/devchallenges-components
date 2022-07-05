import React from "react";
import { ButtonProps } from "./Button.model";
import './Button.scss';

const Button = ({ children, variant="default", disableShadow, disabled }: React.PropsWithChildren<ButtonProps>) => {
    const finalClassname = [
        variant,
        disableShadow ? "" : "shadow",
        disabled ? "disabled" : "",
    ].join(" ");
    return (
        <button className={finalClassname}>
            {children}
        </button>
    );
}

export default Button;