import React from "react";
import './Input.scss';
import { InputProps } from "./Input.model";

const Input = ({ label="Label", helperText, type="text", placeholder="Placeholder", error, disabled, ...props }: React.PropsWithChildren<InputProps>) => {
    const isInvalid: boolean = error!==undefined && error!==false;
    const isDisabled: boolean = disabled!==undefined && disabled!==false;
    const finalClassname = [
        "input-wrapper",
        isInvalid ? "invalid" : undefined,
        isDisabled ? "disabled" : undefined
    ].filter(c => c).join(" ");
    const labelComponent = label ? <label>{label}</label> : undefined;
    const helperComponent = label ? <label className="helper-text">{helperText}</label> : undefined;
    return (
        <div className={finalClassname}>
            {labelComponent}
            <input disabled={isDisabled} {...props} type={type} placeholder={placeholder} />
            {helperComponent}
        </div>
    );
}

export default Input;