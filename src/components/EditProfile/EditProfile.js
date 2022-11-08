import { AuthNav } from "../AuthNav/AuthNav"
import Video from '../../video/video.mp4';
import { getUser, updateUser } from "../../api/data";
import { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink } from "react-router-dom";
import Image from '../../images/image.png';


export const EditProfile = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState([]);

    const { userId } = useParams();

    useEffect(() => {
        getUser(userId)
            .then(res => {
                setUser(res)
            })
    }, [userId]);

    const handleUserEdit = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let user = formData.get('username');
        let city = formData.get('city');

        let data = {
            user,
            city
        };

        await updateUser(userId, data);

        navigate(`/profile/${userId}`);

    }

    return (
        <>
            <AuthNav />

            <section id="register-container">

                <div id="hero-video-container">
                    <video autoPlay loop muted src={Video} type="video/mp4" id='hero-video'></video>
                </div>

                <div id="hero-background-container">
                    <img alt='image' src={Image} type="video/mp4" id='hero-background-img'></img>
                </div>

                <div className="register-container-info">

                    <form method="POST" className="container-text" onSubmit={handleUserEdit} >

                        <h2>Edit Profile</h2>

                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={user.username} disabled />

                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" placeholder={user.city} name="city" />

                        <button type="submit" className="register-btn">Edit</button>
                        <NavLink to={`/profile/${user._id}`} className="back-button">Back</NavLink>

                    </form>

                </div>
            </section>
        </>
    )
}