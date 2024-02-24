import React from "react";
import "@/components/Modal/Modal.css";
import KakaoShareButton from "../api/KakaoShareButton";

export default function ShareFolderModal({ folderName, onShare, onCopyLink }) {
    return (
        <>
            <h2 className="modal-title">폴더 공유</h2>
            <h3>{folderName}</h3>
            <div className="modal-shared-icon">
                <KakaoShareButton />
                <button onClick={() => onShare("facebook")}>
                    <img src="/images/Telegram.png" alt="Facebook share" />
                </button>
                <button onClick={onCopyLink}>
                    <img src="/images/More.png" alt="Copy link" />
                </button>
            </div>
        </>
    );
}
