import React from "react";
import { ButtonProps } from "./Button.model";
import './Button.scss';

const Button = ({ children, variant="default" }: React.PropsWithChildren<ButtonProps>) => {
    return (
        <button className={variant}>
            {children}
        </button>
    );
}

export default Button;