import React, { useState, useEffect } from "react";
import { useFetchFolders } from "./hooks/useFetchFolders";
import { fetchFolders } from "./api/fetchFolders";
import FolderContent from "./FolderContent";
import "../styles/FolderList.css";
import { Link } from "../interfaces/models";

interface FolderListProps {
    searchTerm: string;
}

function FolderList({ searchTerm }: FolderListProps) {
    const { folders, error: folderError } = useFetchFolders();
    const [links, setLinks] = useState<Link[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleFolderClick = (folderId: string) => {
        fetchFolders(folderId).then(setLinks).catch(setError);
    };

    useEffect(() => {
        fetchFolders("all")
            .then((fetchedLinks: Link[]) => {
                const filteredLinks = fetchedLinks.filter(
                    (link: Link) =>
                        link.title
                            ?.toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        link.description
                            ?.toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        link.url
                            ?.toLowerCase()
                            .includes(searchTerm.toLowerCase())
                );
                setLinks(filteredLinks);
            })
            .catch(setError);
    }, [searchTerm]);

    if (folderError || error)
        return <div>Error: {(folderError || error).message}</div>;

    return (
        <div>
            {searchTerm && (
                <div className="search-results-message">
                    <div className="search-results-text">{searchTerm}</div>으로
                    검색한 결과입니다.
                </div>
            )}
            <FolderContent
                folders={folders}
                links={links}
                onFolderClick={handleFolderClick}
            />
        </div>
    );
}

export default FolderList;
