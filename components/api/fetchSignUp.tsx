import axios from "axios";

async function fetchSignup(email, password) {
    try {
        const response = await axios.post(
            "https://bootcamp-api.codeit.kr/api/sign-up",
            {
                email,
                password,
            }
        );

        const data = response.data;

        if (response.status === 200) {
            return {
                success: true,
                accessToken: data.accessToken,
                refreshToken: data.refreshToken,
            };
        } else {
            return {
                success: false,
                message: data.message || "회원가입 오류가 발생했습니다.",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: error.response
                ? error.response.data.message
                : "회원가입 요청 중 네트워크 오류가 발생했습니다.",
        };
    }
}

export default fetchSignup;
