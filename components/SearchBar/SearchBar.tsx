import React, { useState } from "react";
import "@/components/SearchBar/SearchBar.css";

function SearchBar({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent) => {
    setInputValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchTerm(inputValue);
  };

  const handleClearSearch = () => {
    setInputValue("");
    setSearchTerm("");
  };

  return (
    <div className="search-bar-box">
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <img src="/images/Search.png" alt="Search" />
        <input
          type="text"
          placeholder="링크를 검색해 보세요."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" style={{ display: "none" }}>
          검색
        </button>
        <img
          src="/images/close.svg"
          alt="Close"
          onClick={handleClearSearch}
          style={{ cursor: "pointer" }}
        />
      </form>
    </div>
  );
}

export default SearchBar;
