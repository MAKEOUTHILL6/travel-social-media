import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { animateScroll } from "react-scroll";



export const Navigation = () => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        animateScroll.scrollToTop();
    };


    return (
        <>
            <nav id="head-nav" style={{ 'background-color': scrollNav ? '#transparent' : '#000' }}>

                <div id="navbar-container">

                    <Link to="/" id="nav-logo" onClick={toggleHome}>TRVL</Link>

                    <div id="mobile-icon">
                        <FaBars />
                    </div>

                    <ul id="nav-menu">
                        <li class="nav-item">
                            <Link to="about" class="nav-link"
                                smooth='true'
                                duration={500}
                                exact='true'
                                offset={-80}
                            >About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="services" class="nav-link"
                                smooth='true'
                                duration={500}
                                exact='true'
                                offset={-80}
                            >Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="" class="nav-link">Discover</Link>
                        </li>
                    </ul>

                    <nav id="button-nav">
                        <Link to="" id="button-link">
                            Sign up
                        </Link>
                    </nav>

                </div>

            </nav>
        </>
    )
}