import { useState } from "react";
import Header from "../../src/components/Header/Header";
import Nav from "../../src/components/Nav/Nav";
import Cardlist from "../../src/components/Cardlist/Cardlist";
import SearchBar from "../../src/components/SearchBar/SearchBar";
import Footer from "../../src/components/Footer/Footer";

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
