import React from "react";
import "../styles/Cardlist.css";
import { useFetchCardsData } from "../hooks/useFetchCardsData";

export interface CardDataProps {
    id: number;
    url: string;
    title: string;
    description: string;
    imageSource?: string;
    timePassed: string;
    formattedDate: string;
}

interface CardListProps {
    searchTerm: string;
}
function CardList({ searchTerm }: CardListProps) {
    const data = useFetchCardsData();

    const filteredData = data.filter(
        (cardData: CardDataProps) =>
            cardData.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cardData.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cardData.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
    );

    return (
        <div className="cardlist">
            {searchTerm && (
                <div className="search-results-message">
                    <div className="search-results-text">{searchTerm}</div>으로
                    검색한 결과입니다
                </div>
            )}
            <div className="cards-container">
                {filteredData.map((cardData: CardDataProps) => (
                    <a
                        key={cardData.id}
                        href={cardData.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card"
                    >
                        <img
                            src={
                                cardData.imageSource ||
                                "/images/noimageicon.png"
                            }
                            alt={cardData.title}
                            className="cards-image"
                        />
                        <div className="text-container">
                            {" "}
                            <span>{cardData.timePassed}</span>
                            <p>{cardData.description}</p>
                            <p className="date-number">
                                {cardData.formattedDate}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default CardList;
