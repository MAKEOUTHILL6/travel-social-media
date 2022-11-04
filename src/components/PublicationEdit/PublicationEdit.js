import Video from '../../video/video.mp4';
import { AuthNav } from '../AuthNav/AuthNav';
import { getPublicationById, updatePublication } from '../../api/data';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


export const PublicationEdit = () => {

    const navigate = useNavigate();

    const { postId } = useParams();

    const [publication, setPublication] = useState([]);

    useEffect(() => {
        getPublicationById(postId)
            .then(res => {
                setPublication(res);
            })
    }, [postId]);

    const handleEdit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        const title = formData.get('title').trim();
        const image = formData.get('image').trim();
        const location = formData.get('location').trim();
        const description = formData.get('description').trim();

        const data = {
            title,
            image,
            location,
            description,
        };

        await updatePublication(postId, data);

        navigate(`/discover/${postId}`);
    }

    return (
        <>
            <AuthNav />

            <section id="register-container">

                <div id="hero-video-container">
                    <video autoPlay loop muted src={Video} type="video/mp4" id='hero-video'></video>
                </div>

                <div className="register-container-info">

                    <form method="POST" className="container-text" onSubmit={handleEdit} >

                        <h2>Edit Post</h2>

                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" defaultValue={publication.title} name="title" />

                        <label htmlFor="location">Location:</label>
                        <input type="text" id="location" defaultValue={publication.location} name="location" />

                        <label htmlFor="description">Description:</label>
                        <textarea type="password" id="description" defaultValue={publication.description} name="description" />

                        <button type="submit" className="post-button">Edit Post</button>

                    </form>

                </div>
            </section>
        </>
    )
};