import React, { useState, useEffect } from "react";
import { fetchFolderProfileData } from "./api/fetchFolderProfileData";

function FolderProfile() {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        fetchFolderProfileData()
            .then((data) => {
                setProfileData(data);
            })
            .catch((error) => {
                console.error("Error fetching profile data:", error);
            });
    }, []);

    if (!profileData) {
        return <button>로그인</button>;
    }

    return (
        <div className="profile-items">
            <img
                className="profile-image"
                src={profileData.image_source}
                alt="Profile"
            />
            <p className="profile-email">{profileData.email}</p>
        </div>
    );
}

export default FolderProfile;
