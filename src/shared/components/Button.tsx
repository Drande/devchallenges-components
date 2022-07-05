import React from "react";
import { ButtonProps } from "./Button.model";
import './Button.scss';

const Button = ({ children, variant="default", disableShadow, disabled, startIcon, endIcon, size, color }: React.PropsWithChildren<ButtonProps>) => {
    const finalClassname = [
        variant,
        disableShadow ? undefined : "shadow",
        disabled ? "disabled" : undefined,
        size,
        color
    ].filter(c => c).join(" ");
    const startIconElement = startIcon ? (
        <span className="material-icons start">{startIcon}</span>
    ):"";
    const endIconElement = endIcon ? (
        <span className="material-icons end">{endIcon}</span>
    ):"";
    return (
        <button className={finalClassname}>
            {startIconElement}
            <span>{children}</span>
            {endIconElement}
        </button>
    );
}

export default Button;