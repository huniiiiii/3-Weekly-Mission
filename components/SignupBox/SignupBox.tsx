"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "../Input/Input";
import Link from "next/link";
import styles from "./SignupBox.module.css";
import fetchcheckemail from "../api/fetchCheckEmail";
import fetchsignup from "../api/fetchSignUp";

function SignupBox() {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
        setError,
        clearErrors,
    } = useForm({ mode: "onBlur" });

    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            setError("confirmPassword", {
                type: "manual",
                message: "비밀번호가 일치하지 않아요.",
            });
            return;
        }

        const response = await fetchsignup(data.email, data.password);

        if (response.success) {
            router.push("/folder");
        } else {
            setError("signupError", {
                type: "manual",
                message: response.message,
            });
        }
    };

    return (
        <div>
            <div className={styles.headerbox}>
                <Link href="/">
                    <img src="/images/logo2.svg" alt="Logo" />
                </Link>
                <div className={styles.headertext}>
                    이미 회원이신가요?{" "}
                    <Link href="/signin">
                        <span className={styles.signupLink}>로그인 하기</span>
                    </Link>
                </div>
            </div>
            <form
                className={styles.signupForm}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: "이메일을 입력해 주세요.",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "올바른 이메일 주소가 아닙니다.",
                        },
                    }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            type="text"
                            placeholder="이메일을 입력해 주세요."
                            onBlur={async (e) => {
                                field.onBlur(e);
                                const emailValue = e.target.value;

                                if (
                                    emailValue &&
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                        emailValue
                                    )
                                ) {
                                    const result = await fetchcheckemail(
                                        emailValue
                                    );
                                    if (!result.available) {
                                        setError("email", {
                                            type: "manual",
                                            message: result.message,
                                        });
                                    } else {
                                        clearErrors("email");
                                    }
                                }
                            }}
                            error={errors.email && errors.email.message}
                        />
                    )}
                />

                {errors.email && (
                    <p className={styles.errormessage}>
                        {errors.email.message}
                    </p>
                )}

                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: "비밀번호를 입력해 주세요.",
                        minLength: {
                            value: 8,
                            message: "비밀번호는 8자 이상이어야 합니다.",
                        },
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message: "비밀번호는 영문, 숫자 조합이어야 합니다.",
                        },
                    }}
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
                    <p className={styles.errormessage}>
                        {errors.password.message}
                    </p>
                )}

                <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{
                        validate: (value) =>
                            value === watch("password") ||
                            "비밀번호가 일치하지 않아요.",
                    }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            type="password"
                            placeholder="비밀번호 확인"
                            error={
                                errors.confirmPassword &&
                                errors.confirmPassword.message
                            }
                        />
                    )}
                />
                {errors.confirmPassword && (
                    <p className={styles.errormessage}>
                        {errors.confirmPassword.message}
                    </p>
                )}

                <button className={styles.signupbutton} type="submit">
                    회원가입
                </button>
            </form>

            <div className={styles.sosialwapper}>
                <div className={styles.sosialbox}>
                    <div className={styles.sosialtext}>소셜 로그인</div>
                    <div className={styles.sosialiconbox}>
                        <Link
                            href="https://www.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/images/google.svg" alt="Google" />
                        </Link>
                        <Link
                            href="https://www.kakaocorp.com/page"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/images/kakao.svg" alt="kakao" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupBox;
