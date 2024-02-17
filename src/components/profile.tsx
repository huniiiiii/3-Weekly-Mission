import React, { useState, useEffect } from "react";
import { fetchProfileData } from "./api/fetchProfileData";

function Profile() {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        fetchProfileData()
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
                src={profileData.profileImageSource}
                alt="Profile"
            />
            <p className="profile-email">{profileData.email}</p>
        </div>
    );
}

export default Profile;
