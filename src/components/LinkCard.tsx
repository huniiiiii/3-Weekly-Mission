import React, { useState } from "react";
import "../styles/LinkCard.css";
import KebabMenu from "./KebabMenu";

interface Link {
    id: string;
    url: string;
    title: string;
    description: string;
    imageSource?: string;
    created_at: string;
}

interface LinkCardProps {
    link: Link;
    setModalState: React.Dispatch<React.SetStateAction<any>>;
    calculateTimePassed: (date: string) => string;
    formatDate: (date: string) => string;
}

function LinkCard({
    link,
    setModalState,
    calculateTimePassed,
    formatDate,
}: LinkCardProps) {
    const [kebabVisible, setKebabVisible] = useState(false);

    const toggleKebab = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setKebabVisible(!kebabVisible);
    };
    const handleLinkClick = () => {
        window.open(link.url, "_blank");
    };

    return (
        <div className="link-card" onClick={handleLinkClick}>
            <div className="card-image-container">
                <img
                    src={link.image_source || "/images/noimageicon.png"}
                    alt={link.title}
                    className="card-image"
                />
                <button className="favorite-icon">
                    <img src="/images/star.png" alt="즐겨찾기" />
                </button>
            </div>
            <div className="card-text-container">
                <div className="card-content">
                    <span className="time-passed">
                        {calculateTimePassed(link.created_at)}
                    </span>
                    <p className="link-description">{link.description}</p>
                    <span className="date-number">
                        {formatDate(link.created_at)}
                    </span>
                </div>
                <button className="kebab-menu-icon" onClick={toggleKebab}>
                    <img src="/images/kebab.png" alt="메뉴" />
                </button>
                {kebabVisible && (
                    <KebabMenu setModalState={setModalState} link={link} />
                )}
            </div>
        </div>
    );
}

export default LinkCard;
