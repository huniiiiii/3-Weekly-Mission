import React from "react";
import styles from "./LoginBox.module.css";
import LoginForm from "../LoginForm/LoginForm";
import Link from "next/link";

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

            <div className={styles.sosialwapper}>
                <div className={styles.sosialbox}>
                    <div className={styles.sosialtext}>소셜 로그인</div>
                    <div className={styles.sosialiconbox}>
                        <a
                            href="https://www.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/images/google.svg" alt="Google" />
                        </a>
                        <a
                            href="https://www.kakaocorp.com/page"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/images/kakao.svg" alt="kakao" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginBox;
