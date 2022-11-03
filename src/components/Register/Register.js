import { register } from '../../api/data.js';
import { FcCheckmark } from 'react-icons/fc';
import Video from '../../video/video.mp4';
import { useNavigate } from 'react-router-dom'
import { Link as LinkRouter } from 'react-router-dom';
import { AuthNav } from '../AuthNav/AuthNav.js';
import { useState } from 'react';
import axios from 'axios';

export const Register = () => {

    const [error, setError] = useState(null)

    const [pic, setPic] = useState({});

    const handleChange = (e) => {
        setPic(e.target.files[0]);
    }

    const navigate = useNavigate();

    const token = sessionStorage.getItem('authToken');

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }


    const handleRegister = async (e) => {
        e.preventDefault()

        let formData = new FormData(e.target)

        let username = formData.get('username').trim();
        let password = formData.get('password').trim();
        let city = formData.get('city').trim();
        let rePassword = formData.get('rePassword').trim();

        let data = {
            username,
            password,
            city,
            rePassword
        }

        try {
            if ('name' in pic) {
                await register(data);
                navigate('/');

            } else {
                throw {
                    message: 'Image field is neccessary'
                }
            }

        } catch (error) {
            setError(error.message)
        }

    }

    const handleImage = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        axios.post('http://localhost:3030/user/upload', formData, {
            headers: {
                'Authorization': token
            }
        }).then(res => {
            console.log(res);
        })
    }


    return (

        <>
            <AuthNav />

            <section id="register-container">

                <div id="hero-video-container">
                    <video autoPlay loop muted src={Video} type="video/mp4" id='hero-video'></video>
                </div>

                <div className="register-container-info">

                    <form method="POST" className="container-text" onSubmit={handleRegister}>

                        <h2>Register</h2>

                        {error ?

                            <div className='error-div'>
                                <p className='error'>{error}</p>
                            </div>
                            :
                            <p>Register to join a community full of explorers.</p>
                        }

                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" placeholder="Username" className='username-input' name="username" />

                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" placeholder="City" name="city" />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" placeholder="*****" name="password" />

                        <label htmlFor="rePassword">Repeat password:</label>
                        <input type="password" id="re-password" placeholder="*****" name="rePassword" />

                        <button type="submit" className="register-btn">Register</button>

                        <div className="card-no-account">
                            <p>Already have an account? <LinkRouter to="/login"> Sign in </LinkRouter></p>
                        </div>

                    </form>

                    <form onSubmit={handleImage} className="image-form">
                        <label htmlFor="profileImage">Profile Image:</label> <br />
                        <input type="file" id="profileImage" name="profileImage" onChange={handleChange} />

                        <button type="submit" className="upload-btn" onClick={handleClick}>{isClicked ? <FcCheckmark /> : 'Upload'}</button>
                    </form>

                </div>
            </section>
        </>
    )
}