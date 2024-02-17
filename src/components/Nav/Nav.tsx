import React, { useState, useEffect } from "react";
import "../styles/Nav.css";

function Nav() {
    const [folderInfo, setFolderInfo] = useState({
        ownerName: "",
        folderName: "",
        profileImage: "",
    });

    useEffect(() => {
        const fetchFolderInfo = async () => {
            try {
                const response = await fetch(
                    "https://bootcamp-api.codeit.kr/api/sample/folder"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setFolderInfo({
                    ownerName: data.folder.owner.name,
                    folderName: data.folder.name,
                    profileImage: data.folder.owner.profileImageSource,
                });
            } catch (error) {
                console.error("Error fetching folder data:", error);
            }
        };

        fetchFolderInfo();
    }, []);

    return (
        <nav className="nav">
            <div className="nav-item">
                <div className="mark">
                    <img
                        src={folderInfo.profileImage}
                        alt={folderInfo.ownerName}
                    />
                </div>
                <p className="owner-name">@{folderInfo.ownerName}</p>
                <p className="folder-name">{folderInfo.folderName}</p>
            </div>
        </nav>
    );
}

export default Nav;
