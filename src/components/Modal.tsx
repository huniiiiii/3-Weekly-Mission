import "../styles/Modal.css";
import { useState } from "react";
import KakaoShareButton from "./api/KakaoShareButton";

interface ModalProps {
    values: {
        visibility: boolean;
        target?: string;
        url?: string;
    };
    onClose: () => void;
    folderName?: string;
    folders?: Folder[];
    userId?: string;
}

function Modal({ values, onClose, folderName, folders, userId }: ModalProps) {
    const [selectedFolderId, setSelectedFolderId] = useState(null);
    const closeModal = () => onClose(false);
    const { url } = values;

    const handleFolderButtonClick = (folderId) => {
        setSelectedFolderId(folderId);
    };

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };
    const createShareLink = () => {
        const hostAddress =
            "https://65a51c5548eafc32d5a3a2c9--clinquant-licorice-99c7b0.netlify.app/";
        return `${hostAddress}/shared?user=${userId}&folder=${folderName.id}`;
    };

    const handleShare = (platform) => {
        const shareLink = createShareLink();
        let url = "";

        if (platform === "facebook") {
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareLink
            )}`;
        }

        window.open(url, "_blank");
    };

    const handleCopyLink = async () => {
        const shareLink = createShareLink();
        await navigator.clipboard.writeText(shareLink);
        alert("링크가 클립보드에 복사되었습니다.");
    };

    if (!values["visibility"]) return null;

    return (
        <div className="modal-wrapper">
            <div className="modal-background" onClick={handleBackgroundClick} />

            <div className="modal-container">
                <button onClick={closeModal} className="modal-cancel-btn">
                    <img src="/images/cancel2.png" alt="취소버튼" />
                </button>
                {values["target"] === "이름 변경" && (
                    <>
                        <h2 id="modalTitle" className="modal-title">
                            폴더 이름 변경
                        </h2>
                        <input className="modal-input" autoFocus />
                        <button className="modal-button">변경하기</button>
                    </>
                )}
                {values["target"] === "추가하기" && (
                    <>
                        <h2 id="modalTitle" className="modal-title">
                            폴더 추가
                        </h2>
                        <input className="modal-input" autoFocus />
                        <button className="modal-button">변경하기</button>
                    </>
                )}
                {values["target"] === "공유" && (
                    <>
                        <h2 id="modalTitle" className="modal-title">
                            폴더 공유
                        </h2>
                        <h3>{folderName}</h3>
                        <div className="modal-shared-icon">
                            <KakaoShareButton />

                            <button onClick={() => handleShare("facebook")}>
                                <img src="/images/Telegram.png" />
                            </button>
                            <button onClick={handleCopyLink}>
                                <img src="/images/More.png" />
                            </button>
                        </div>
                    </>
                )}
                {values["target"] === "삭제" && (
                    <>
                        <h2 id="modalTitle" className="modal-title">
                            폴더 삭제
                        </h2>
                        <h3>{folderName}</h3>
                        <button className="modal-delete-button">
                            삭제하기
                        </button>
                    </>
                )}
                {values["target"] === "삭제하기" && (
                    <>
                        <h2 id="modalTitle" className="modal-title">
                            링크 삭제
                        </h2>
                        <h3>{url}</h3>
                        <button className="modal-delete-button">
                            삭제하기
                        </button>
                    </>
                )}
                {values["target"] === "폴더에 추가" && (
                    <div
                        className={`modal-container ${
                            values["target"] === "폴더에 추가"
                                ? "folder-add-active"
                                : ""
                        }`}
                    >
                        <h2 id="modalTitle" className="modal-title">
                            폴더에 추가
                        </h2>
                        <h3>{url}</h3>
                        {folders.map((folder) => (
                            <div className="modal-add-active-box">
                                <button
                                    className={`modal-folder-add-box ${
                                        selectedFolderId === folder.id
                                            ? "selected"
                                            : ""
                                    }`}
                                    key={folder.id}
                                    onClick={() =>
                                        handleFolderButtonClick(folder.id)
                                    }
                                >
                                    <div className="folder-info">
                                        <span className="folder-name">
                                            {folder.name}
                                        </span>
                                        <span className="link-count">
                                            {folder.link.count}개 링크
                                        </span>
                                    </div>
                                    {selectedFolderId === folder.id && (
                                        <img
                                            className="folder-add-img"
                                            src="/images/check.png"
                                        />
                                    )}
                                </button>
                            </div>
                        ))}
                        <button className="modal-button">추가하기</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;
