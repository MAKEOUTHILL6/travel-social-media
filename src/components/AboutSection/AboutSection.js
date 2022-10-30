import { Link as LinkScroll } from 'react-scroll';
import Icon5 from '../../images/svg-5.svg'
import { useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';

export const AboutSection = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem('username') != null) {
            setUser(sessionStorage.getItem('username'))
        }

    }, []);

    return (
        <>
            <div className="about-container" id='about'>
                <div id="about-wrapper">
                    <div id="about-info">
                        <div id="col1">
                            <div id="text-wrapper">
                                <p id="topline">Premium Travelling</p>
                                <h1 id="heading">Communicate with friends throught your adventures!</h1>

                                {user ?
                                    <>
                                        <p id="subtitle">Click discover and see what your friends are up to</p>
                                        <div id="button-wrapper">
                                            <LinkRouter id='about-button' to="/discover">Discover</LinkRouter>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <p id="subtitle">Sign up and join a community full of explorers</p>
                                        <div id="button-wrapper">
                                            <LinkRouter id='about-button' to="/register">Get started</LinkRouter>
                                        </div>
                                    </>
                                }


                            </div>
                        </div>
                        <div id='col2'>
                            <div id='image-wrap'>
                                <img id='about-image' alt='car' src={Icon5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};