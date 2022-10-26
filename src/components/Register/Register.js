import { register } from '../../api/data.js';
import Video from '../../video/video.mp4'
import { useNavigate } from 'react-router-dom'
import { Link as LinkRouter } from 'react-router-dom';
import { AuthNav } from '../AuthNav/AuthNav.js';

export const Register = () => {

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault()

        let formData = new FormData(e.target)

        let username = formData.get('username').trim();
        let password = formData.get('password').trim();
        let rePassword = formData.get('rePassword').trim();

        await register(username, password, rePassword);

        navigate('/');
    }

    return (

        <>
            <AuthNav />

            <section id="register-container">

                <div id="hero-video-container">
                    <video autoPlay loop muted src={Video} type="video/mp4" id='hero-video'></video>
                </div>

                <div className="register-container-info">

                    <form method="POST" className="container-text" onSubmit={handleRegister} >

                        <h2>Register</h2>
                        <p>Register to join a community full of explorers.</p>

                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" placeholder="Username" name="username" />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" placeholder="*****" name="password" />

                        <label htmlFor="rePassword">Repeat password:</label>
                        <input type="password" id="re-password" placeholder="*****" name="rePassword" />

                        <button type="submit" className="register-btn">Register</button>

                        <div className="card-no-account">
                            <p>Already have an account? <LinkRouter to="/login"> Sign in </LinkRouter></p>
                        </div>

                    </form>

                </div>
            </section>
        </>



    )
}