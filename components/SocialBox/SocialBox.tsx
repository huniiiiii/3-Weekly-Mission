import styles from "./SocialBox.module.css";

export default function SocialBox() {
    return (
        <div className={styles.socialwapper}>
            <div className={styles.socialbox}>
                <div className={styles.socialtext}>소셜 로그인</div>
                <div className={styles.socialiconbox}>
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
    );
}
