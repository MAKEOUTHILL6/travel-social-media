import { Link as LinkScroll } from 'react-scroll';
import Icon5 from '../../images/svg-5.svg'


export const AboutSection = () => {

    return (
        <>
            <div id="about-container">
                <div id="about-wrapper">
                    <div id="about-info">
                        <div id="col1">
                            <div id="text-wrapper">
                                <p id="topline">Premium Travelling</p>
                                <h1 id="heading">Communicate with friends throught your adventures!</h1>
                                <p id="subtitle">Sign up and join a community full of explorers</p>
                                <div id="button-wrapper">
                                    <LinkScroll id='about-button' to="signup">Get started</LinkScroll>
                                </div>
                            </div>
                        </div>
                        <div id='col2'>
                            <div id='image-wrap'>
                                <img id='about-image' src={Icon5}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};