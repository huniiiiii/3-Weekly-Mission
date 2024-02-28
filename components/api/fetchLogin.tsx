async function fetchlogin(email, password) {
    try {
        const response = await fetch(
            "https://bootcamp-api.codeit.kr/api/sign-in",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            }
        );
        const data = await response.json();

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
            message: "로그인 요청 중 네트워크 오류가 발생했습니다.",
        };
    }
}

export default fetchlogin;
