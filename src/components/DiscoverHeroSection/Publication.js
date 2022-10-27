import { Link } from 'react-router-dom';



export const Publication = ({ publication }) => {


    return (
        <article className="publication-wrapper">

            <img className="publication-image"
                src={publication.image}
                alt="pic" />

            <ul className="location-list">
                <li className="location-tag">{publication.location}</li>
            </ul>

            <h2 className="location-title">{publication.title}</h2>

            {publication.description ?

                <p className="location-desc">
                    {publication.description}
                </p>
                :
                false
            }

            <Link className="location-button" to={`/discover/${publication._id}`}>Read More</Link>

        </article>
    )
}