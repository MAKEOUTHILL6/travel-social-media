import { Link as LinkRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const DiscoverNav = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem('username') != null) {
            setUser(sessionStorage.getItem('username'))
        }

    }, []);

    return (
        <nav className="discover-head-nav">

            <div id="discover-navbar-container">

                <LinkRouter to="/" id="discover-nav-logo">TRVL</LinkRouter>

                <ul id='searchbar-container'>
                    <li id='list-item'>
                        <form action="/search" method="POST" id='form-item' >
                            <input type="text" class="searchbar" name="search" placeholder="Search..." />
                        </form>
                    </li>
                </ul>

                {user ?
                    <>
                        <nav id="welcome-button-nav">
                            <LinkRouter to="/profile" id="welcome-button-link">
                                Welcome, <b id='welcome-user'>{user}</b>
                            </LinkRouter>
                        </nav>

                        <nav id="create-button-nav">
                            <LinkRouter to="/create-post" id="create-button-link">
                                Create Post
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
    )
}