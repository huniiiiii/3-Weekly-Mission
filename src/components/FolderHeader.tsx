import React from "react";
import FolderProfile from "./FolderProfile";
import "../styles/FolderHeader.css";

function FolderHeader() {
    return (
        <header className="header">
            <div className="header-logo">
                <a href="/">
                    <img src="/images/logo.png" alt="로고" />
                </a>
            </div>
            <div className="header-content">
                <FolderProfile />
            </div>
        </header>
    );
}

export default FolderHeader;
