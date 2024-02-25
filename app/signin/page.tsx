import styles from "./page.module.css";
import LoginBox from "@/components/LoginBox/LoginBox";

function signin() {
    return (
        <div className={styles.body}>
            <LoginBox />
        </div>
    );
}

export default signin;
