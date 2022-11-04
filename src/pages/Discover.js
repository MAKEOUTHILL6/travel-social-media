import { DiscoverHeroSection } from "../components/DiscoverHeroSection/DiscoverHeroSection";
import { DiscoverNav } from "../components/DiscoverNav/DiscoverNav";
import { useEffect, useState } from "react";
import { DiscoverSidebar } from "../components/DiscoverSidebar/DiscoverSidebar";
import ScaleLoader from "react-spinners/ScaleLoader";


export const Discover = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const [searchedPosts, setSearchedPosts] = useState([]);

    const handleSearchPosts = (publications) => {
        setSearchedPosts(publications)
    }

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, []);

    return (
        <>

            {loading ?

                <ScaleLoader
                    color={'#01bf71'}
                    loading={loading}
                    size={200}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className="scale-loader"
                />
                :
                <>
                    <DiscoverSidebar isOpen={isOpen} toggle={toggle} handleSearchPosts={handleSearchPosts} />
                    <DiscoverNav toggle={toggle} handleSearchPosts={handleSearchPosts} />
                    <DiscoverHeroSection searchedPosts={searchedPosts} />
                </>

            }



        </>
    )
}