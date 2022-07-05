import React from "react";
import { ButtonProps } from "./Button.model";
import './Button.scss';

const Button = ({ children, variant="default", disableShadow, disabled, startIcon, endIcon }: React.PropsWithChildren<ButtonProps>) => {
    const finalClassname = [
        variant,
        disableShadow ? "" : "shadow",
        disabled ? "disabled" : "",
    ].join(" ");
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