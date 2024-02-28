import styles from "./page.module.css";
import SignupBox from "@/components/SignupBox/SignupBox";

function signup() {
    return (
        <div className={styles.body}>
            <SignupBox />
        </div>
    );
}

export default signup;
