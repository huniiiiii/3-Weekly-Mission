"use client";
import React, { useState } from "react";
import FolderHeader from "@/components/FolderHeader/FolderHeader";
import LinkForm from "@/components/LinkForm/LinkForm";
import SearchBar from "@/components/SearchBar/SearchBar";
import FolderList from "@/components/FolderList/FolderList";
import Footer from "@/components/Footer/Footer";
import FloatingActionButton from "@/components/FloatingActionButton/FloatingActionButton";

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
