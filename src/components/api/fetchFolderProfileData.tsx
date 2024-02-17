export const fetchFolderProfileData = async () => {
    try {
        const response = await fetch(
            "https://bootcamp-api.codeit.kr/api/users/1"
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.data[0];
    } catch (error) {
        console.error("Error fetching folder profile data:", error);
        throw error;
    }
};
