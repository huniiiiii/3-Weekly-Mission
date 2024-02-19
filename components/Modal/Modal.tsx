import "@/components/Modal/Modal.css";
import { useState } from "react";
import AddFolderModal from "./AddFolderModal";
import AddToFolderModal from "./AddToFolderModal";
import DeleteFolderModal from "./DeleteFolderModal";
import RenameFolderModal from "./RenameFolderModal";
import ShareFolderModal from "./ShareFolderModal";
import DeleteLinkModal from "./DeleteLinkModal";
import { Folder } from "@/types";

interface FolderName {
    id: string;
}

interface ModalProps {
    values?: {
        visibility: boolean;
        target?: string;
        url?: string;
    };
    onClose: () => void;
    folderName?: FolderName;
    folders?: Folder[];
    userId?: string;
}

function Modal({ values, onClose, folderName, folders, userId }: ModalProps) {
    const [selectedFolderId, setSelectedFolderId] = useState(null);
    const closeModal = () => onClose();
    const { url } = values || {};

    const handleFolderButtonClick = (folderId) => {
        setSelectedFolderId(folderId);
    };

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const createShareLink = () => {
        if (!userId || !folderName) {
            console.error("userId or folderName is undefined");
            return "";
        }
        const hostAddress =
            "https://65a51c5548eafc32d5a3a2c9--clinquant-licorice-99c7b0.netlify.app/";
        return `${hostAddress}/shared?user=${userId}&folder=${folderName}`;
    };

    const handleShare = (platform) => {
        const shareLink = createShareLink();
        let url = "";
        switch (platform) {
            case "facebook":
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareLink
                )}`;
                break;
            default:
                alert("지원하지 않는 플랫폼입니다.");
                return;
        }
        if (url) {
            window.open(url, "_blank");
        }
    };

    const handleCopyLink = async () => {
        const shareLink = createShareLink();
        await navigator.clipboard.writeText(shareLink);
        alert("링크가 클립보드에 복사되었습니다.");
    };

    if (!values?.visibility) return null;

    return (
        <div className="modal-wrapper">
            <div className="modal-background" onClick={handleBackgroundClick} />
            <div className="modal-container">
                <button onClick={closeModal} className="modal-cancel-btn">
                    <img src="/images/cancel2.png" alt="취소버튼" />
                </button>
                {values.target === "이름 변경" && (
                    <RenameFolderModal onClose={closeModal} />
                )}
                {values.target === "추가하기" && (
                    <AddFolderModal onClose={closeModal} />
                )}
                {values.target === "공유" && (
                    <ShareFolderModal
                        folderName={folderName}
                        onShare={handleShare}
                        onCopyLink={handleCopyLink}
                    />
                )}
                {values.target === "삭제" && (
                    <DeleteFolderModal
                        url={values.url || ""}
                        onDelete={() => {}}
                    />
                )}
                {values.target === "폴더에 추가" && (
                    <AddToFolderModal
                        folders={folders}
                        selectedFolderId={selectedFolderId}
                        onSelectFolder={handleFolderButtonClick}
                    />
                )}
                {values.target === "삭제하기" && (
                    <DeleteLinkModal url={values.url || ""} />
                )}
            </div>
        </div>
    );
}

export default Modal;
