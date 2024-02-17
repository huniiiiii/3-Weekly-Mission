import React from "react";
import "../styles/ActionContainer.css";
import Modal from "./Modal";
import useModal from "./hooks/useModal";

function ActionContainer({ folderName }) {
    const [modalState, setModalState, onHandleCancel] = useModal();

    return (
        <div className="action-container-box">
            <p>{folderName}</p>
            {folderName !== "전체" && (
                <div className="action-container-icon">
                    <a
                        onClick={(e) => {
                            setModalState({
                                visibility: true,
                                target: e.target.innerText,
                            });
                        }}
                    >
                        <img src="/images/share.png" />
                        <div className="action-shared">공유</div>
                    </a>
                    <a
                        onClick={(e) => {
                            setModalState({
                                visibility: true,
                                target: e.target.innerText,
                            });
                        }}
                    >
                        <img src="/images/pen.png" />
                        <div className="action-name">이름 변경</div>
                    </a>
                    <a
                        onClick={(e) => {
                            setModalState({
                                visibility: true,
                                target: e.target.innerText,
                            });
                        }}
                    >
                        <img src="/images/delete.png" />
                        <div className="action-delete">삭제</div>
                    </a>
                </div>
            )}

            <Modal
                values={modalState}
                onClose={onHandleCancel}
                folderName={folderName}
            />
        </div>
    );
}

export default ActionContainer;
