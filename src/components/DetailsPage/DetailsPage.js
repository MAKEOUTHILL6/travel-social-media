import PublicationContext from '../../services/PublicationContext';
import { useContext, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { deletePublication } from '../../api/data';
import { getPublicationById } from '../../api/data';



export const DetailsPage = () => {

    const navigate = useNavigate();

    const [publication, setPublication] = useState([]);

    const { postId } = useParams();

    useEffect(() => {
        getPublicationById(postId)
            .then(res => {
                setPublication(res);
            })
    }, [])


    // const { publications } = useContext(PublicationContext);

    // const publication = publications.find(x => x._id === postId);

    const handleBack = () => {
        navigate('/discover');
    }

    const handleDelete = async () => {
        await deletePublication(publication._id);

        navigate('/discover');
    }


    return (
        <>
            <section id="details-page">
                <article className="details-card">

                    <article className="details-card-image">

                        <div className="details-image-wrapper">
                            <img src={publication.image}
                                alt="art-image2" />
                        </div>

                    </article>

                    <article className="details-card-text">
                        <h2>Title:<br /> <a>{publication.title}</a></h2>
                        <h2>Description:<br /><span className="details-desc-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Dolores beatae
                            magnam quas fuga, dignissimos, veritatis blanditiis quisquam debitis voluptatibus sapiente nemo
                            corrupti dolor nisi perferendis eaque perspiciatis placeat, accusantium eum.</span></h2>


                        <div className="details-button-wrap">
                            <LinkRouter to='/edit' className="details-edit">Edit Post</LinkRouter>
                            <button className="details-delete" onClick={handleDelete}>Delete Post</button>
                        </div>

                    </article>

                    <div className="details-close-button" onClick={handleBack}>
                        <AiFillCloseCircle />
                    </div>

                </article>
            </section>
        </>

    )
}