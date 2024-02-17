import React, { useState } from "react";
import FolderHeader from "../../src/components/FolderHeader/FolderHeader";
import LinkForm from "../../src/components/LinkForm/LinkForm";
import SearchBar from "../../src/components/SearchBar/SearchBar";
import FolderList from "../../src/components/FolderList/FolderList";
import Footer from "../../src/components/Footer/Footer";
import FloatingActionButton from "../../src/components/FloatingActionButton/FloatingActionButton";

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
