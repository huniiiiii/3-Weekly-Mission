import React, { useState, useEffect } from "react";
import "../styles/FolderContent.css";
import ActionContainer from "../components/ActionContainer";
import { calculateTimePassed, formatDate } from "./utils";

function FolderContent({ folders, links, onFolderClick }) {
    const [selectedFolderName, setSelectedFolderName] = useState("전체");
    const enhancedLinks = links.map((link) => ({
        ...link,
        timePassed: calculateTimePassed(link.created_at),
        formattedDate: formatDate(link.created_at),
    }));

    useEffect(() => {
        onFolderClick("all");
    }, []);

    const handleFolderClick = (folderId) => {
        onFolderClick(folderId);
        const folderName =
            folderId === "all"
                ? "전체"
                : folders.find((folder) => folder.id === folderId)?.name ||
                  "폴더 없음";

        setSelectedFolderName(folderName);
    };

    const renderFolderButtons = () =>
        folders.map((folder) => (
            <button
                className="folder-button"
                key={folder.id}
                onClick={() => handleFolderClick(folder.id)}
            >
                {folder.name}
            </button>
        ));

    const renderLinkCards = () =>
        enhancedLinks.map((link) => (
            <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-card"
            >
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
                        <span className="time-passed">{link.timePassed}</span>
                        <p className="link-description">{link.description}</p>
                        <span className="date-number">
                            {link.formattedDate}
                        </span>
                    </div>
                    <button className="kebab-menu-icon">
                        <img src="/images/kebab.png" alt="메뉴" />
                    </button>
                </div>
            </a>
        ));

    return (
        <div>
            <div className="folder-box">
                <div className="folder-button-box">
                    <button
                        className="folder-button"
                        onClick={() => handleFolderClick("all")}
                    >
                        전체
                    </button>
                    {renderFolderButtons()}
                </div>
                <a>
                    <img className="folder-add" src="/images/add.png" />
                </a>
            </div>

            <div className="links-container-box">
                {links.length === 0 ? (
                    <div className="links-container-empty">
                        저장된 링크가 없습니다.
                    </div>
                ) : (
                    <div className="links-container">
                        <ActionContainer folderName={selectedFolderName} />
                        {renderLinkCards()}
                    </div>
                )}
            </div>
        </div>
    );
}

export default FolderContent;
