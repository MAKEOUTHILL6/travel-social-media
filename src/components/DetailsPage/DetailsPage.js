import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { deletePublication } from '../../api/data';
import { getPublicationById } from '../../api/data';
import { IconContext } from "react-icons/lib";


export const DetailsPage = () => {

    const [publication, setPublication] = useState([]);

    const { postId } = useParams();

    useEffect(() => {
        getPublicationById(postId)
            .then(res => {
                setPublication(res);
            })
    });


    const [userId, setUserId] = useState([]);

    useEffect(() => {
        if (sessionStorage.getItem('userId')) {
            setUserId(sessionStorage.getItem('userId'))
        };
    }, [])


    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        if (userId === publication.ownerId) {
            setIsOwner(true);
        };
    }, [userId, publication.ownerId])


    // const { publications } = useContext(PublicationContext);
    // const publication = publications.find(x => x._id === postId);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/discover');
    }

    const handleDelete = async () => {
        await deletePublication(publication._id);

        navigate(-1);
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <article className="details-card">

                    <div className="details-close-button" onClick={handleBack}>
                        <AiFillCloseCircle />
                    </div>

                    <div className="details-card-header">

                        <div className='details-card-title'>
                            <h1>{publication.title}</h1>
                        </div>

                        <div className="details-image-wrapper">
                            {publication.postImage && <img src={`http://localhost:3030/data/publication/image/${publication.postImage}`}
                                alt="regular version" className="details-img" />}
                        </div>
                    </div>


                    <h2 className="h2-desc">Description</h2>
                    <div className="details-card-body">

                        <div className="details-desc-wrapper">
                            <span className="details-desc-text">{publication.description}</span>
                        </div>

                        {isOwner ? <div className="details-button-wrap">
                            <LinkRouter to={`/edit/${postId}`} className="details-edit">Edit Post</LinkRouter>
                            <LinkRouter className="details-delete" onClick={handleDelete}>Delete Post</LinkRouter>
                        </div> : false}

                    </div>

                </article>
            </IconContext.Provider>

        </>

    )
}