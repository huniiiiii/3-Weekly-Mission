import axios from "axios";

async function fetchLogin(email, password) {
    try {
        const response = await axios.post(
            "https://bootcamp-api.codeit.kr/api/sign-in",
            {
                email,
                password,
            }
        );

        const data = response.data;

        if (response.status === 200) {
            return {
                success: true,
                accessToken: data.data.accessToken,
                refreshToken: data.data.refreshToken,
            };
        } else {
            return {
                success: false,
                message: data.message || "로그인 오류가 발생했습니다.",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: error.response
                ? error.response.data.message
                : "로그인 요청 중 네트워크 오류가 발생했습니다.",
        };
    }
}

export default fetchLogin;
