import { Link as LinkRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearchedPublications } from '../../api/data';


export const DiscoverNav = ({handleSearchPosts}) => {
    const [user, setUser] = useState(null);

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem('username') != null) {
            setUser(sessionStorage.getItem('username'))
        }

        if (sessionStorage.getItem('userId') != null) {
            setUserId(sessionStorage.getItem('userId'))
        }


    }, []);


    const handleSearch = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        let title = formData.get('search');

        let data = {
            title,
        }

        const publications = await getSearchedPublications(data);

        return handleSearchPosts(publications);
    }

    return (
        <nav className="discover-head-nav">

            <div id="discover-navbar-container">

                <LinkRouter to="/" id="discover-nav-logo">TRVL</LinkRouter>

                <ul id='searchbar-container'>
                    <li id='list-item'>
                        <form method="POST" id='form-item' onSubmit={handleSearch}>
                            <input type="text" className="searchbar" name="search" placeholder="Search by location title" />
                        </form>
                    </li>
                </ul>

                {user ?
                    <>
                        <nav id="welcome-button-nav">
                            <LinkRouter to={`/profile/${userId}`} id="welcome-button-link">
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