import React, { useState } from "react";
import FolderHeader from "../components/FolderHeader";
import LinkForm from "../components/LinkForm";
import SearchBar from "../components/SearchBar";
import FolderList from "../components/FolderList";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";

function Folder() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="Folder">
            <FolderHeader />
            <LinkForm />
            <SearchBar setSearchTerm={setSearchTerm} />
            <FloatingActionButton />
            <FolderList searchTerm={searchTerm} />
            <Footer />
        </div>
    );
}

export default Folder;
