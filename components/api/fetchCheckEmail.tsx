async function fetchcheckemail(email) {
    try {
        const response = await fetch(
            "https://bootcamp-api.codeit.kr/api/check-email",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            }
        );

        if (response.status === 200) {
            return { available: true, message: "" };
        } else if (response.status === 409) {
            const data = await response.json();
            return {
                available: false,
                message: data.message || "이미 사용 중인 이메일입니다.",
            };
        } else {
            return {
                available: false,
                message: "중복 확인 요청 처리 중 오류 발생",
            };
        }
    } catch (error) {
        return {
            available: false,
            message: "네트워크 오류로 중복 확인을 완료할 수 없습니다.",
        };
    }
}

export default fetchcheckemail;
