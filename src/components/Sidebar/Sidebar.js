import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const Sidebar = ({
    isOpen,
    toggle,
}) => {

    return (
        <aside id='sidebar-container' style={ isOpen ? {opacity: '100%', top: '0'}: {opacity: '0', top: '-100%'} } >

            <div id='icon-container' onClick={toggle}>
                <FaTimes id='icon'/>
            </div>

            <div id='sidebar-wrapper'>
                <ul id='sidebar-menu'>
                    <li><LinkScroll className='sidebar-item' onClick={toggle} to='about'>About</LinkScroll></li>
                    <li><LinkScroll className='sidebar-item' onClick={toggle} to='services'>Services</LinkScroll></li>
                    <li><LinkScroll className='sidebar-item' onClick={toggle} to=''>Discover</LinkScroll></li>
                </ul>

                <div id='sidebar-button-wrapper'>
                    <LinkRouter id='sidebar-button' to=''>Sign up</LinkRouter>
                </div>
            </div>

        </aside>
    )
}