import React from "react";
import "@/components/Modal/Modal.css";

export default function AddToFolderModal({
    folders,
    selectedFolderId,
    onSelectFolder,
    onAdd,
}) {
    return (
        <div>
            <h2 className="modal-title">폴더에 추가</h2>
            {folders.map((folder) => (
                <div className="modal-add-active-box" key={folder.id}>
                    <button
                        className={`modal-folder-add-box ${
                            selectedFolderId === folder.id ? "selected" : ""
                        }`}
                        onClick={() => onSelectFolder(folder.id)}
                    >
                        <div className="folder-info">
                            <span className="folder-name">{folder.name}</span>
                            <span className="link-count">
                                {folder.link.count}개 링크
                            </span>
                        </div>
                        {selectedFolderId === folder.id && (
                            <img
                                className="folder-add-img"
                                src="/images/check.png"
                                alt="Check"
                            />
                        )}
                    </button>
                </div>
            ))}
            <button className="modal-button" onClick={onAdd}>
                추가하기
            </button>
        </div>
    );
}
