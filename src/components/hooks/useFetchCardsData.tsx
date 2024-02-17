import { useState, useEffect } from "react";
import { calculateTimePassed, formatDate } from "../utils";
import { CardDataProps } from "../Cardlist";

export function useFetchCardsData() {
    const [cardsData, setCardsData] = useState<CardDataProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://bootcamp-api.codeit.kr/api/sample/folder`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setCardsData(
                    data.folder.links.map((link) => ({
                        ...link,
                        timePassed: calculateTimePassed(link.createdAt),
                        formattedDate: formatDate(link.createdAt),
                    }))
                );
            } catch (error) {
                console.error("Error fetching card data:", error);
            }
        };

        fetchData();
    }, []);

    return cardsData;
}
