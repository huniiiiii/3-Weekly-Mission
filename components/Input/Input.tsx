"use client";
import React, { useState, forwardRef } from "react";
import "@/components/Input/Input.css";

interface InputProps {
    type: "text" | "password";
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
    name?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type, placeholder, onChange, onBlur, value, name, error }, ref) => {
        const [inputType, setInputType] = useState<"text" | "password">(type);
        const inputContainerClassName = `input-container ${
            error ? "error" : ""
        }`;

        const toggleVisibility = () => {
            setInputType((prevType) =>
                prevType === "password" ? "text" : "password"
            );
        };

        return (
            <div className="input-wrapper">
                <div className={inputContainerClassName}>
                    <input
                        ref={ref}
                        type={inputType}
                        name={name}
                        placeholder={placeholder}
                        value={value || ""}
                        onChange={onChange}
                        onBlur={onBlur}
                        className="input-field"
                    />

                    {type === "password" && (
                        <div
                            onClick={toggleVisibility}
                            className="password-toggle"
                        >
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
            </div>
        );
    }
);

export default Input;
