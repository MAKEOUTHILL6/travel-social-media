import { Link } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import { useEffect, useState } from "react";


export const Publication = ({ publication }) => {


    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 800)
    }, []);


    return (
        <article className="publication-wrapper">

            <div className='publication-image-container'>
                {loading ? <ScaleLoader color={'#01bf71'}
                    loading={loading}
                    size={200}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className="post-loader" />

                    :
                    <img src={`https://trvl-social-backend.onrender.com/data/publication/image/${publication.postImage}`}
                        alt="regular version" className="publication-image" />
                }
            </div>

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