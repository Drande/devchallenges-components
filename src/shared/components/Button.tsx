import React from "react";
import { ButtonProps } from "./Button.model";
import './Button.scss';

const Button = ({ children, variant="default", disableShadow, disabled, startIcon, endIcon, size, color="default", ...props }: React.PropsWithChildren<ButtonProps>) => {
    const isDisabled: boolean = disabled!==undefined && disabled!==false;
    const finalClassname = [
        variant,
        disableShadow ? undefined : "shadow",
        isDisabled ? "disabled" : undefined,
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
        <button {...props} className={finalClassname} disabled={isDisabled}>
            {startIconElement}
            <span>{children}</span>
            {endIconElement}
        </button>
    );
}

export default Button;