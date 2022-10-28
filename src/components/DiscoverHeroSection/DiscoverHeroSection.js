import { Publication } from './Publication';
import { useState, useEffect } from 'react';
import { getPublications } from '../../api/data';

export const DiscoverHeroSection = () => {


    const [publications, setPublications] = useState([]);

    useEffect(() => {
        getPublications()
            .then(res => {
                setPublications(res);
            })
    }, []);

    return (
        <main id="discover-main">
            <div id="publication-container">

                {publications.length > 0 ? publications.map(x => <Publication key={x._id} publication={x} />) : <h3 className='no-posts'>No publications yet.</h3>}

            </div>
        </main>
    )
}