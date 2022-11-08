import { AuthNav } from "../AuthNav/AuthNav"
import Video from '../../video/video.mp4';
import { useNavigate } from 'react-router-dom';
import { createPost } from "../../api/data";
import { useEffect, useState, useContext } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import DisplayContext from '../../services/DisplayContext';
import Image from '../../images/image.png';
import axios from 'axios';


export const CreatePublication = () => {

    const { displayWidth } = useContext(DisplayContext);

    const [error, setError] = useState(null)

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

    const [isClicked, setIsClicked] = useState(false);

    const [uploading, setUploading] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setUploading(true);
        setTimeout(() => {
            setUploading(false);
        }, 5000)
    }

    const [pic, setPic] = useState([]);

    const handleChange = (e) => {
        setPic(e.target.files[0]);
    }

    const navigate = useNavigate();

    const handleCreatePost = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        const title = formData.get('title').trim();
        // const image = formData.get('image').trim();
        const location = formData.get('location').trim();
        const description = formData.get('description').trim();
        const ownerId = userId;
        const user = username

        const data = {
            title,
            location,
            description,
            ownerId,
            user,
        };

        try {
            if ('name' in pic) {
                if (isClicked) {
                    await createPost(data)
                    navigate('/discover');
                } else {
                    throw {
                        message: 'Upload the photo!'
                    }
                }
            } else {
                throw {
                    message: 'Image field is required!'
                }
            }

        } catch (error) {
            setError(error.message)
        }

    }

    const token = sessionStorage.getItem('authToken');

    const handleImage = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        axios.post('https://trvl-social-backend.onrender.com/data/publication/upload', formData, {
            headers: {
                'Authorization': token
            }
        })
    }

    return (

        <>
            <AuthNav />

            <section id="createPost-container">

                {displayWidth ?

                    <div id="hero-video-container">
                        <img src={Image} id='hero-video'></img>
                    </div>
                    :
                    <div id="hero-video-container">
                        <video autoPlay loop muted src={Video} type="video/mp4" id='hero-video'></video>
                    </div>

                }

                <div className="createPost-container-info">

                    <form method="POST" className="container-text" onSubmit={handleCreatePost} >

                        <h2>Create Publication</h2>

                        {error ?

                            <div className='error-div'>
                                <p className='error'>{error}</p>
                            </div>
                            :
                            <p>Share your experience with the world.</p>
                        }

                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" placeholder="Location name" name="title" />

                        <label htmlFor="location">Location:</label>
                        <select type="text" id="location" placeholder="Enter location" name="location">
                            <option value='Bulgaria'>Bulgaria</option>
                            <option value='Greece'>Greece</option>
                            <option value='Spain'>Spain</option>
                            <option value='Italy'>Italy</option>
                            <option value='Germany'>Germany</option>
                            <option value='USA'>USA</option>
                            <option value='United Kingdom'>United Kingdom</option>
                        </select>


                        <label htmlFor="description">Description:</label>
                        <textarea type="textarea" id="description" placeholder="Minimum 10 characters" name="description" />


                        {uploading ? <button disabled className="createPost-button">Loading...</button> : <button type="submit" className="createPost-button">Create Post</button>}



                    </form>


                    <form onSubmit={handleImage} className="createImage-form">
                        <label htmlFor="postImage">Publication Image:</label> <br />
                        <input type="file" id="postImage" name="postImage" onChange={handleChange} />

                        <button type="submit" className="upload-btn" onClick={handleClick}>{isClicked ? <FcCheckmark /> : 'Upload'}</button>
                    </form>

                </div>
            </section>

        </>
    )
}