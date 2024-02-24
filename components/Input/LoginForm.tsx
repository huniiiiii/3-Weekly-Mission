"use client";
import React from "react";
import Input from "./Input";

function LoginForm() {
    const validatePassword = (value: string) => {
        return value.length < 7;
    };

    const validateId = (value: string) => {
        return false;
    };

    return (
        <form>
            <Input type="text" placeholder="아이디" onValidate={validateId} />
            <Input
                type="password"
                placeholder="비밀번호"
                onValidate={validatePassword}
            />
        </form>
    );
}

export default LoginForm;
