import React from "react";
import { useLocation } from "react-router-dom";
import Profile from "./profile";
import "../styles/Header.css";

function Header() {
    const location = useLocation();
    const isFolderPage = location.pathname === "/folder";
    const headerClass = isFolderPage ? "header" : "header fixed";

    return (
        <header className={headerClass}>
            <div className="header-logo">
                <a href="/">
                    <img src="/images/logo.png" alt="로고" />
                </a>
            </div>
            <div className="header-content">
                <Profile />
            </div>
        </header>
    );
}

export default Header;
