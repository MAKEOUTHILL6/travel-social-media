import {Link as LinkRouter} from 'react-router-dom';


export const AuthNav = () => {


    return (
        <nav className="head-nav"  style={{backgroundColor: 'transparent'}}>

            <div id="navbar-container">

                <LinkRouter to="/" id="nav-logo">TRVL</LinkRouter>

            </div>

        </nav>
    )
}