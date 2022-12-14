import Video from '../../video/video.mp4';
import { AuthNav } from '../AuthNav/AuthNav';
import { getPublicationById, updatePublication } from '../../api/data';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import DisplayContext from '../../services/DisplayContext';
import Image from '../../images/image.png';


export const PublicationEdit = () => {

    const { displayWidth } = useContext(DisplayContext);

    const navigate = useNavigate();

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem('userId')) {
            setUserId(sessionStorage.getItem('userId'));
        };

    }, [userId])

    const { postId } = useParams();

    const [publication, setPublication] = useState([]);

    useEffect(() => {
        getPublicationById(postId)
            .then(res => {
                setPublication(res);
            })
    }, [postId]);

    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        if (userId === publication.ownerId) {
            setIsOwner(true);
        };
    }, [userId, publication.ownerId])

    const handleEdit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        const title = formData.get('title').trim();
        const location = formData.get('location').trim();
        const description = formData.get('description').trim();

        const data = {
            title,
            location,
            description,
        };

        await updatePublication(postId, data);

        navigate(`/discover/${postId}`);
    }

    return (
        <>

            {isOwner ?
                <>
                    <AuthNav />

                    <section id="register-container">

                        {displayWidth ?

                            <div id="hero-video-container">
                                <img src={Image} id='hero-video'></img>
                            </div>
                            :
                            <div id="hero-video-container">
                                <video autoPlay loop muted src={Video} type="video/mp4" id='hero-video'></video>
                            </div>

                        }

                        <div className="register-container-info">

                            <form method="POST" className="post-edit-container-text" onSubmit={handleEdit} >

                                <h2>Edit Post</h2>

                                <label htmlFor="title">Title:</label>
                                <input type="text" id="title" defaultValue={publication.title} name="title" />

                                <label htmlFor="location">Location:</label>
                                <input type="text" id="location" defaultValue={publication.location} name="location" />

                                <label htmlFor="description">Description:</label>
                                <textarea type="password" id="description" defaultValue={publication.description} name="description" />

                                <button type="submit" className="post-button">Edit Post</button>
                                <NavLink to={`/discover/${publication._id}`} className="back-button">Back</NavLink>

                            </form>

                        </div>
                    </section>
                </>
                :
                <h3>Not authorised</h3>
            }

        </>
    )
};