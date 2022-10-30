import { DiscoverHeroSection } from "../components/DiscoverHeroSection/DiscoverHeroSection";
import { DiscoverNav } from "../components/DiscoverNav/DiscoverNav";
import { useState } from "react";



export const Discover = () => {

    const [searchedPosts, setSearchedPosts] = useState([]);

    const handleSearchPosts = (publications) => {
        setSearchedPosts(publications)
    }

    return (
        <>
            <DiscoverNav handleSearchPosts={handleSearchPosts}/>
            <DiscoverHeroSection searchedPosts={searchedPosts} />

        </>
    )
}