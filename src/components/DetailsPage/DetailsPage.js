import PublicationContext from '../../services/PublicationContext';
import { useContext } from 'react';
import { useParams } from "react-router-dom";


export const DetailsPage = () => {

    const { postId } = useParams();

    const { publications } = useContext(PublicationContext);

    const publication = publications.find(x => x._id === postId);


    return (
        <>
            <section id="details-page">
                <article class="details-card">

                    <article class="details-card-image">

                        <div class="details-image-wrapper">
                            <img src='https://lp-cms-production.imgix.net/features/2018/02/Aleksander-Nevski-Cathedral-Sofia-6303650c1b02.jpg'
                                alt="art-image2" />
                        </div>

                    </article>

                    <article class="details-card-text">
                        <h2>Title:<br /> Sofia</h2>
                        <h3>Posted By: User</h3>
                        <h2>Description:<br /><span class="desc-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Dolores beatae
                            magnam quas fuga, dignissimos, veritatis blanditiis quisquam debitis voluptatibus sapiente nemo
                            corrupti dolor nisi perferendis eaque perspiciatis placeat, accusantium eum.</span></h2>


                        <div class="details-button-wrap">
                            <button class="details-edit">Edit Post</button>
                            <button class="details-delete">Delete Post</button>
                        </div>

                    </article>

                    <div class="close-button">
                        <button />
                    </div>

                </article>
            </section>
        </>

    )
}