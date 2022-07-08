import React from "react";
import './Input.scss';
import { InputProps } from "./Input.model";

const Input = ({ label="Label", type="text", placeholder="Placeholder", error, disabled, ...props }: React.PropsWithChildren<InputProps>) => {
    const isInvalid: boolean = error!==undefined && error!==false;
    const isDisabled: boolean = disabled!==undefined && disabled!==false;
    const finalClassname = [
        "input-wrapper",
        isInvalid ? "invalid" : undefined,
        isDisabled ? "disabled" : undefined
    ].filter(c => c).join(" ");

    return (
        <div className={finalClassname}>
            <label>{label}</label>
            <input disabled={isDisabled} {...props} type={type} placeholder={placeholder} />
        </div>
    );
}

export default Input;