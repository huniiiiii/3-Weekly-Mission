import React from "react";
import styles from "./LoginBox.module.css";
import LoginForm from "../LoginForm/LoginForm";
import Link from "next/link";
import SocialBox from "../SocialBox/SocialBox";

function LoginBox() {
    return (
        <div>
            <div className={styles.headerbox}>
                <Link href="/">
                    <img src="/images/logo2.svg" alt="Logo" />
                </Link>
                <div className={styles.headertext}>
                    회원이 아니신가요?{" "}
                    <Link href="/signup">
                        <span className={styles.signupLink}>회원 가입하기</span>
                    </Link>
                </div>
            </div>
            <LoginForm />
            <SocialBox />
        </div>
    );
}

export default LoginBox;
