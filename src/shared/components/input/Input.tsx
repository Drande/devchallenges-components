import React from "react";
import './Input.scss';
import { InputProps } from "./Input.model";

const Input = ({ label="Label", helperText, type="text", placeholder="Placeholder", error, disabled, startIcon, endIcon, size="md", fullWidth, multiline, rows=4, ...props }: React.PropsWithChildren<InputProps>) => {
    const isInvalid: boolean = error!==undefined && error!==false;
    const isDisabled: boolean = disabled!==undefined && disabled!==false;
    const finalClassname = [
        "input-wrapper",
        isInvalid ? "invalid" : undefined,
        isDisabled ? "disabled" : undefined,
        fullWidth ? "expanded" : undefined,
        size,
    ].filter(c => c).join(" ");
    let inputElement;
    let startIconElement;
    let endIconElement;
    const labelElement = label ? <label>{label}</label> : undefined;
    const helperElement = label ? <label className="helper-text">{helperText}</label> : undefined;
    if(multiline) {
        inputElement = <textarea rows={rows} disabled={isDisabled} {...props} placeholder={placeholder} /> 
    } else {
        inputElement = <input disabled={isDisabled} {...props} type={type} placeholder={placeholder} />;
        startIconElement = startIcon ? ( <span className={"material-icons start input-icon".concat(size?" "+size:"")}>{startIcon}</span> ): "";
        endIconElement = endIcon ? ( <span className={"material-icons end input-icon".concat(size?" "+size:"")}>{endIcon}</span> ): "";
    }
    return (
        <div className={finalClassname}>
            {labelElement}
            <div className="field-wrapper">
                {startIconElement}
                {endIconElement}
                {inputElement}
            </div>
            {helperElement}
        </div>
    );
}

export default Input;