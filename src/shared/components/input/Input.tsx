import React from "react";
import './Input.scss';
import { InputProps } from "./Input.model";

const Input = ({ label="Label", helperText, type="text", placeholder="Placeholder", error, disabled, startIcon, endIcon, size="md", ...props }: React.PropsWithChildren<InputProps>) => {
    const isInvalid: boolean = error!==undefined && error!==false;
    const isDisabled: boolean = disabled!==undefined && disabled!==false;
    const finalClassname = [
        "input-wrapper",
        isInvalid ? "invalid" : undefined,
        isDisabled ? "disabled" : undefined,
        size
    ].filter(c => c).join(" ");
    const labelElement = label ? <label>{label}</label> : undefined;
    const helperElement = label ? <label className="helper-text">{helperText}</label> : undefined;
    const startIconElement = startIcon ? ( <span className={"material-icons start input-icon".concat(size?" "+size:"")}>{startIcon}</span> ): "";
    const endIconElement = endIcon ? ( <span className={"material-icons end input-icon".concat(size?" "+size:"")}>{endIcon}</span> ): "";
    return (
        <div className={finalClassname}>
            {labelElement}
            <div className="field-wrapper">
                {startIconElement}
                {endIconElement}
                <input disabled={isDisabled} {...props} type={type} placeholder={placeholder}></input>
            </div>
            {helperElement}
        </div>
    );
}

export default Input;