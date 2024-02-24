"use client";

import React, { useState } from "react";
import "@/components/Input/Input.css";

interface InputProps {
    type: "text" | "password";
    onValidate?: (value: string) => boolean;
}

function Input({ type, onValidate }: InputProps) {
    const [inputType, setInputType] = useState<string>(type);
    const [value, setValue] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);

    const toggleVisibility = () => {
        setInputType((prevType) =>
            prevType === "password" ? "text" : "password"
        );
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);

        if (!newValue) {
            setIsError(false);
        } else {
            const error = onValidate ? onValidate(newValue) : false;
            setIsError(error);
        }
    };

    return (
        <div className="input-wrapper">
            <div className={`input-container ${isError ? "error" : ""}`}>
                <input
                    type={inputType}
                    placeholder="내용 입력"
                    value={value}
                    onChange={handleChange}
                    className="input-field"
                />
                {type === "password" && (
                    <div onClick={toggleVisibility} className="password-toggle">
                        <img
                            src={
                                inputType === "password"
                                    ? "/images/eye-off.svg"
                                    : "/images/eye-on.svg"
                            }
                            alt="Toggle Password Visibility"
                        />
                    </div>
                )}
            </div>
            {value && isError && (
                <p className="error-message">
                    글자수를 8자 이상으로 사용해주세요.
                </p>
            )}
        </div>
    );
}

export default Input;
