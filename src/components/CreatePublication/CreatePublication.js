import { AuthNav } from "../AuthNav/AuthNav"
import Video from '../../video/video.mp4';
import { useNavigate } from 'react-router-dom';
import { createPost } from "../../api/data";
import { useEffect, useState } from 'react';


export const CreatePublication = () => {

    const [userId, setUserId] = useState(null);

    const [username, setUser] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem('userId') != null) {
            setUserId(sessionStorage.getItem('userId'))
        }

        if (sessionStorage.getItem('username') != null) {
            setUser(sessionStorage.getItem('username'))
        }

    }, []);

    const navigate = useNavigate();

    const handleCreatePost = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        const title = formData.get('title').trim();
        const image = formData.get('image').trim();
        const location = formData.get('location').trim();
        const description = formData.get('description').trim();
        const ownerId = userId;
        const user = username
        
        const data = {
            title,
            image,
            location,
            description,
            ownerId,
            user,
        };

        await createPost(data)

        navigate('/discover');

    }

    return (

        <>
            <AuthNav />

            <section id="register-container">

                <div id="hero-video-container">
                    <video autoPlay loop muted src={Video} type="video/mp4" id='hero-video'></video>
                </div>

                <div className="register-container-info">

                    <form method="POST" className="container-text" onSubmit={handleCreatePost} >

                        <h2>Create Publication</h2>
                        <p>Share your experience with the world.</p>

                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" placeholder="Location name" name="title" />

                        <label htmlFor="image">Image:</label>
                        <input type="text" id="image" placeholder="http/https" name="image" />

                        <label htmlFor="location">Location:</label>
                        <select type="text" id="location" placeholder="Enter location" name="location">
                            <option value='Bulgaria'>Bulgaria</option>
                            <option value='Greece'>Greece</option>
                            <option value='Spain'>Spain</option>
                            <option value='Italy'>Italy</option>
                        </select>


                        <label htmlFor="description">Description:</label>
                        <textarea type="textarea" id="description" placeholder="Minimum 20 characters" name="description" />

                        <button type="submit" className="post-button">Create Post</button>

                    </form>

                </div>
            </section>

        </>
    )
}