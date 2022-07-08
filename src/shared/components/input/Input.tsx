import React from "react";
import './Input.scss';
import { InputProps } from "./Input.model";

const Input = ({ label="Label", placeholder="Placeholder", error, ...props }: React.PropsWithChildren<InputProps>) => {
    const isInvalid: boolean = error!==undefined && error!==false;
    const finalClassname = [
        isInvalid ? "invalid" : undefined
    ].filter(c => c).join(" ");
    return (
        <>
            <label className={finalClassname}>
                {label}
                <input {...props} type="text" placeholder={placeholder}>
                    
                </input>
            </label>
        </>
    );
}

export default Input;