"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import styles from "./LoginForm.module.css";
import Input from "../Input/Input";
import fetchlogin from "../api/fetchLogin";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    email: yup
        .string()
        .required("이메일을 입력해 주세요.")
        .email("올바른 이메일 주소가 아닙니다."),
    password: yup.string().required("비밀번호를 입력해 주세요."),
});

function LoginForm() {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema), // yupResolver 사용
    });

    const onSubmit = async (data) => {
        const response = await fetchlogin(data.email, data.password);
        if (response.success) {
            localStorage.setItem("accessToken", response.accessToken);
            localStorage.setItem("refreshToken", response.refreshToken);
            router.push("/folder");
        } else {
            setError("email", {
                type: "manual",
                message: "이메일을 확인해 주세요.",
            });
            setError("password", {
                type: "manual",
                message: "비밀번호를 확인해 주세요.",
            });
        }
    };

    return (
        <form className={styles.loginform} onSubmit={handleSubmit(onSubmit)}>
            <h4>이메일</h4>
            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <Input
                        {...field}
                        type="text"
                        placeholder="이메일을 입력해 주세요."
                        error={errors.email && errors.email.message}
                    />
                )}
            />
            {errors.email && (
                <p className={styles.errormessage}>{errors.email.message}</p>
            )}

            <h4>비밀번호</h4>
            <Controller
                name="password"
                control={control}
                render={({ field }) => (
                    <Input
                        {...field}
                        type="password"
                        placeholder="비밀번호를 입력해 주세요."
                        error={errors.password && errors.password.message}
                    />
                )}
            />
            {errors.password && (
                <p className={styles.errormessage}>{errors.password.message}</p>
            )}

            <button className={styles.loginbutton} type="submit">
                로그인
            </button>
        </form>
    );
}

export default LoginForm;
