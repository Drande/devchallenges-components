import React from "react";
import { ButtonProps } from "./Button.model";
import './Button.scss';

const Button = ({ children, variant="default", disableShadow }: React.PropsWithChildren<ButtonProps>) => {
    const finalClassname = [
        variant,
        disableShadow ? "" : "shadow"
    ].join(" ");
    return (
        <button className={finalClassname}>
            {children}
        </button>
    );
}

export default Button;