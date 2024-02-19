import React from "react";
import "@/components/Modal/Modal.css";

export default function DeleteFolderModal({ url, onDelete }) {
    return (
        <>
            <h2 className="modal-title">폴더 삭제</h2>
            <h3>{url}</h3>
            <button className="modal-delete-button" onClick={onDelete}>
                삭제하기
            </button>
        </>
    );
}
