import { useEffect, useState } from 'react';
import { getPublicationById } from '../../api/data';
import { Link } from 'react-router-dom';

export const UserPosts = (publicationId) => {

    const [publication, setPublication] = useState([]);

    useEffect(() => {
        getPublicationById(publicationId.publication)
            .then(res => {
                setPublication(res);
            })
    }, [publicationId.publication]);

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <article className="profile-posts-wrapper" onMouseEnter={onHover} onMouseLeave={onHover}>
            <img src={publication.image} alt="image" />

            <Link to={`/discover/${publication._id}`} className="profile-read-more" style={hover ? { display: 'block' } : { display: 'none' }}>Read More</Link>
        </article>
    )
}