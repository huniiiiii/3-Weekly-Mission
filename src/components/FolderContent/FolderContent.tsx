import React, { useState } from "react";
import "../styles/FolderContent.css";
import ActionContainer from "../ActionContainer/ActionContainer";
import LinkCard from "../LinkCard/LinkCard";
import { calculateTimePassed, formatDate } from "../utils";
import useModal from "../hooks/useModal";
import Modal from "../Modal/Modal";
import { Folder, Link } from "../../interfaces/models";

interface FolderContentProps {
    folders: Folder[];
    links: Link[];
    onFolderClick: (folderId: string) => void;
}

function FolderContent({ folders, links, onFolderClick }: FolderContentProps) {
    const [modalState, setModalState, onHandleCancel] = useModal();
    const [selectedFolderName, setSelectedFolderName] =
        useState<string>("전체");

    const handleFolderClick = (folderId: string) => {
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
                <a className="folder-add-box">
                    <p>폴더추가</p>
                    <img className="folder-add" src="/images/add.png" />
                </a>
            </div>
            <div className="links-container-box">
                <ActionContainer folderName={selectedFolderName} />
                {links.length === 0 ? (
                    <div className="links-container-empty">
                        저장된 링크가 없습니다.
                    </div>
                ) : (
                    <div className="links-container">
                        {links.map((link) => (
                            <LinkCard
                                key={link.id}
                                link={link}
                                setModalState={setModalState}
                                calculateTimePassed={calculateTimePassed}
                                formatDate={formatDate}
                            />
                        ))}
                    </div>
                )}
                <Modal
                    values={modalState}
                    onClose={onHandleCancel}
                    folders={folders}
                />
            </div>
        </div>
    );
}

export default FolderContent;
