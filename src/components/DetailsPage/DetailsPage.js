import PublicationContext from '../../services/PublicationContext';
import { useContext } from 'react';
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { deletePublication } from '../../api/data';



export const DetailsPage = () => {

    const navigate = useNavigate();

    const { postId } = useParams();

    const { publications } = useContext(PublicationContext);

    const publication = publications.find(x => x._id === postId);

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
                <article class="details-card">

                    <article class="details-card-image">

                        <div class="details-image-wrapper">
                            <img src={publication.image}
                                alt="art-image2" />
                        </div>

                    </article>

                    <article class="details-card-text">
                        <h2>Title:<br /> <a>{publication.title}</a></h2>
                        <h2>Description:<br /><span class="details-desc-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Dolores beatae
                            magnam quas fuga, dignissimos, veritatis blanditiis quisquam debitis voluptatibus sapiente nemo
                            corrupti dolor nisi perferendis eaque perspiciatis placeat, accusantium eum.</span></h2>


                        <div class="details-button-wrap">
                            <LinkRouter to='/edit' class="details-edit">Edit Post</LinkRouter>
                            <button class="details-delete" onClick={handleDelete}>Delete Post</button>
                        </div>

                    </article>

                    <div class="details-close-button" onClick={handleBack}>
                        <AiFillCloseCircle />
                    </div>

                </article>
            </section>
        </>

    )
}