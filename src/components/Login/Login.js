import { useNavigate } from 'react-router-dom'
import { login } from '../../api/data.js';
import Video from '../../video/video.mp4';
import { Link as LinkRouter } from 'react-router-dom';
import { AuthNav } from '../AuthNav/AuthNav.js';


export const Login = () => {

    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();

        const formData = new FormData(e.target)

        const username = formData.get('username').trim();
        const password = formData.get('password').trim();

        await login(username, password);

        navigate('/');
    }


    return (
        <>
            <AuthNav />
            
            <section id="login-container">

                <div id="hero-video-container">
                    <video autoPlay loop muted src={Video} type="video/mp4" id='hero-video'></video>
                </div>

                <div className="login-container-info">

                    <form method="POST" className="login-container-text" onSubmit={handleLogin}>

                        <h2>Login</h2>
                        <p>Welcome, see the new masterpieces!</p>

                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" placeholder="Username" name="username" />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" placeholder="*****" name="password" />

                        <button type="submit" className="login-btn">Login</button>

                        <div className="login-card-no-account">
                            <p>Don't have an account? <LinkRouter to="/register">Sign up</LinkRouter>.</p>
                        </div>

                    </form>
                </div>

            </section>
        </>

    )
}