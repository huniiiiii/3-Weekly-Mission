"use client";

import React, { useState } from "react";
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import Cardlist from "@/components/Cardlist/Cardlist";
import SearchBar from "@/components/SearchBar/SearchBar";
import Footer from "@/components/Footer/Footer";

function Shared() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="shared">
      <Header />
      <Nav />
      <SearchBar setSearchTerm={setSearchTerm} />
      <Cardlist searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default Shared;
