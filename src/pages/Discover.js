import { DiscoverHeroSection } from "../components/DiscoverHeroSection/DiscoverHeroSection";
import { DiscoverNav } from "../components/DiscoverNav/DiscoverNav";
import { useState } from "react";
import { DiscoverSidebar } from "../components/DiscoverSidebar/DiscoverSidebar";



export const Discover = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const [searchedPosts, setSearchedPosts] = useState([]);

    const handleSearchPosts = (publications) => {
        setSearchedPosts(publications)
    }

    return (
        <>
            <DiscoverSidebar isOpen={isOpen} toggle={toggle} handleSearchPosts={handleSearchPosts} />
            <DiscoverNav toggle={toggle} handleSearchPosts={handleSearchPosts} />
            <DiscoverHeroSection searchedPosts={searchedPosts} />

        </>
    )
}