import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import { logout } from "../../api/data.js";


export const Navigation = ({ toggle }) => {

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

        return () => {
            window.removeEventListener('scroll', changeNav);
        };

    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem('username') != null) {
            setUser(sessionStorage.getItem('username'))
        }

    }, []);


    const handleLogout = async () => {
        await logout();

        window.location.reload(false)

    }

    return (
        <>
            <nav className="head-nav" style={scrollNav ? { backgroundColor: '#000' } : { backgroundColor: 'transparent' }}>

                <div id="navbar-container">

                    <LinkRouter to="/" id="nav-logo" onClick={toggleHome}>TRVL</LinkRouter>

                    <div id="mobile-icon" onClick={toggle}>
                        <FaBars />
                    </div>

                    <ul id="nav-menu">
                        <li className="nav-item">
                            <Link className="nav-link"
                                to="about"
                                smooth='true'
                                duration={500}
                                exact='true'
                                offset={-80}
                            >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"
                                to="services"
                                smooth='true'
                                duration={500}
                                exact='true'
                                offset={-50}
                            >Services</Link>
                        </li>
                        <li className="nav-item">
                            <LinkRouter to="/discover" className="nav-link">Discover</LinkRouter>
                        </li>
                    </ul>

                    {user ?
                        <>

                        
                            <nav id="welcome-button-nav">
                                <LinkRouter to="/profile" id="welcome-button-link">
                                    Welcome, <b id='welcome-user'>{user}</b>
                                </LinkRouter>
                            </nav>

                            <nav id="button-nav">
                                <LinkRouter id="button-link" onClick={handleLogout}>
                                    Logout
                                </LinkRouter>
                            </nav>
                        </>

                        :
                        <nav id="button-nav">
                            <LinkRouter to="/register" id="button-link">
                                Sign up
                            </LinkRouter>
                        </nav>
                    }

                </div>

            </nav>
        </>
    )
}