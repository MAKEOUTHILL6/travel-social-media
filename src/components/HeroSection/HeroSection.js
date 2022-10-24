import { MdKeyboardArrowRight, MdArrowForward, MdArrowBack, MdArrowRight } from 'react-icons/md';
import { Link as LinkScroll } from 'react-scroll';
import { useState } from "react";
import Video from '../../video/video.mp4'


export const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };


    return (
        <div id="hero-container">

            <div id="hero-video-container">
                <video autoPlay loop muted src={Video} type="video/mp4" id='hero-video'></video>
            </div>

            <div id="hero-content">
                <div id="hero-h1">
                    Travelling Made Easy
                </div>

                <p id="hero-p">
                    Sign up today and see what your friends are up to
                </p>

                <div id="hero-button-wrapper">
                    <LinkScroll onMouseEnter={onHover} onMouseLeave={onHover} id='hero-button'>Get Started {hover? <MdArrowForward />: <MdArrowRight />} </LinkScroll>
                </div>
            </div>
        </div>
    )
}