import { AuthNav } from "../AuthNav/AuthNav"
import Video from '../../video/video.mp4';
import { getUser, updateUser } from "../../api/data";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";


export const EditProfile = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState([]);

    const { userId } = useParams();

    useEffect(() => {
        getUser(userId)
            .then(res => {
                setUser(res)
            })
    }, []);

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

                <div className="register-container-info">

                    <form method="POST" className="container-text" onSubmit={handleUserEdit} >

                        <h2>Edit Profile</h2>

                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={user.username} disabled />

                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" placeholder={user.city} name="city" />

                        <button type="submit" className="register-btn">Edit</button>

                    </form>

                </div>
            </section>
        </>
    )
}