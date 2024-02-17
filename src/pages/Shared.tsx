import { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Cardlist from "../components/Cardlist";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

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
