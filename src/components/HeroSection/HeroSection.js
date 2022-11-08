import { MdArrowForward, MdArrowRight } from 'react-icons/md';
import { Link as LinkRouter } from 'react-router-dom';
import { useEffect, useState } from "react";
import Video from '../../video/video.mp4';
import Image from '../../images/image.png';

export const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem('username') != null) {
            setUser(sessionStorage.getItem('username'))
        }

    }, []);


    return (
        <div id="hero-container">

            <div id="hero-video-container">
                <video autoPlay loop muted src={Video} type="video/mp4" id='hero-video'></video>
            </div>

            <div id="hero-background-container">
                <img alt='image' src={Image} type="video/mp4" id='hero-background-img'></img>
            </div>

            <div id="hero-content">
                <div id="hero-h1">
                    Travelling Made Fun
                </div>

                {user ? <p id="hero-p">
                    Click discover and see what your friends are up to
                </p>
                    :
                    <p id="hero-p">
                        Sign up today and see what your friends are up to
                    </p>
                }

                {user ?
                    <div id="hero-button-wrapper">
                        <LinkRouter to='/discover' onMouseEnter={onHover} onMouseLeave={onHover} id='hero-button'>Discover {hover ? <MdArrowForward /> : <MdArrowRight />} </LinkRouter>
                    </div>
                    :
                    <div id="hero-button-wrapper">
                        <LinkRouter to='/register' onMouseEnter={onHover} onMouseLeave={onHover} id='hero-button'>Get Started {hover ? <MdArrowForward /> : <MdArrowRight />} </LinkRouter>
                    </div>
                }

            </div>
        </div>
    )
}