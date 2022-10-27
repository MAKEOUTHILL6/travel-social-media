import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';



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

            <div className="location-desc-wrapper">
                <p className="location-desc">
                    {publication.description}
                </p>
            </div>


            <Link className="location-button" to={`/discover/${publication._id}`}>Read More</Link>

        </article>
    )
}