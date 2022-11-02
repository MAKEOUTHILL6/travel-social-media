import { Link } from 'react-router-dom';


export const Publication = ({ publication }) => {

    return (
        <article className="publication-wrapper">

            {publication.postImage && <img src={`http://localhost:3030/data/publication/image/${publication.postImage}`}
                alt="regular version" className="publication-image" />}

            <ul className="location-list">
                <li className="location-tag">{publication.location}</li>
            </ul>

            <h2 className="location-title">{publication.title}</h2>

            <div className="location-user-wrapper">
                <p className="location-user">
                    Posted By: <Link className='location-pub-user'>{publication.user}</Link>
                </p>
            </div>


            <Link className="location-button" to={`/discover/${publication._id}`}>Read More</Link>

        </article>
    )
}