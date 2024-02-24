import React from "react";
import "@/components/Modal/Modal.css";

interface DeleteLinkModalProps {
    url: string;
    onDelete: () => void;
}

const DeleteLinkModal: React.FC<DeleteLinkModalProps> = ({ url, onDelete }) => {
    return (
        <>
            <h2 id="modalTitle" className="modal-title">
                링크 삭제
            </h2>
            <h3>{url}</h3>
            <button className="modal-delete-button" onClick={onDelete}>
                삭제하기
            </button>
        </>
    );
};

export default DeleteLinkModal;
