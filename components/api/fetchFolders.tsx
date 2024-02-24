export function fetchFolders(folderId) {
    const url =
        folderId === "all"
            ? "https://bootcamp-api.codeit.kr/api/users/4/links"
            : `https://bootcamp-api.codeit.kr/api/users/4/links?folderId=${folderId}`;

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => data.data)
        .catch((error) => {
            throw error;
        });
}
