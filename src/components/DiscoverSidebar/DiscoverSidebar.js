import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';
import { getSearchedPublications } from '../../api/data';


export const DiscoverSidebar = ({
    toggle,
    isOpen,
    handleSearchPosts,
}) => {

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

    return (
        <aside id='discover-sidebar-container' style={isOpen ? { opacity: '100%', top: '0' } : { opacity: '0', top: '-100%' }} >

            <div id='icon-container' onClick={toggle}>
                <FaTimes id='icon' />
            </div>

            <div id='discover-sidebar-wrapper'>
                <ul id='sidebar-searchbar-container'>
                    <li id='sidebar-list-item'>
                        <form method="POST" id='sidebar-form-item' onSubmit={handleSearch}>
                            <input type="text" className="sidebar-searchbar" name="search" placeholder="Search by location title" />
                        </form>
                    </li>
                </ul> 

                {user ?
                    <>
                        <div className='discover-sidebar-button-wrapper'>
                            <LinkRouter to={`/profile/${userId}`} id="welcome-button-link">
                                Welcome, <b id='welcome-user'>{user}</b>
                            </LinkRouter>
                            <LinkRouter to="/create-post" className="discover-sidebar-button">
                                Create Post
                            </LinkRouter>
                        </div>
                    </>

                    :
                    <div className='discover-sidebar-button-wrapper'>
                        <LinkRouter className='discover-sidebar-button' to='/register'>Sign up</LinkRouter>
                    </div>
                }

            </div>

        </aside>
    )
}