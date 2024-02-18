export const fetchProfileData = async () => {
    try {
        const response = await fetch(
            "https://bootcamp-api.codeit.kr/api/sample/user"
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching profile data:", error);
        throw error;
    }
};
