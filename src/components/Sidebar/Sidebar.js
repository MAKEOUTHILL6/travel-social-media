import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const Sidebar = ({
    isOpen,
    toggle,
}) => {


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
        <aside id='sidebar-container' style={isOpen ? { opacity: '100%', top: '0' } : { opacity: '0', top: '-100%' }} >

            <div id='icon-container' onClick={toggle}>
                <FaTimes id='icon' />
            </div>

            <div id='sidebar-wrapper'>
                <ul id='sidebar-menu'>
                    <li><LinkScroll className='sidebar-item' onClick={toggle} to='about'>About</LinkScroll></li>
                    <li><LinkScroll className='sidebar-item' onClick={toggle} to='services'>Services</LinkScroll></li>
                    <li><LinkRouter className='sidebar-item' onClick={toggle} to='/discover'>Discover</LinkRouter></li>
                </ul>

                {user ?
                    <div id='sidebar-button-wrapper'>
                        <LinkRouter id='sidebar-button' to={`/profile/${userId}`}>Welcome, <b id='welcome-user'>{user}</b></LinkRouter>
                    </div>

                    :
                    <div id='sidebar-button-wrapper'>
                        <LinkRouter id='sidebar-button' to='/register'>Sign up</LinkRouter>
                    </div>
                }

            </div>

        </aside>
    )
}