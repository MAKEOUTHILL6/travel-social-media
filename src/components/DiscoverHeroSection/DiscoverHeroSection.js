import { Publication } from './Publication';
import { useState, useEffect } from 'react';
import { getPublications } from '../../api/data';

export const DiscoverHeroSection = ({ searchedPosts }) => {

    const [publications, setPublications] = useState([]);

    useEffect(() => {
        getPublications()
            .then(res => {
                if (searchedPosts.length > 0) {
                    setPublications(searchedPosts)
                } else {
                    setPublications(res);

                }
            })
    }, [searchedPosts]);

    return (
        <main id="discover-main">
            <div id="publication-container">

                {publications.length > 0 ? publications.map(x => <Publication key={x._id} publication={x} />) : <h3 className='no-posts'>No publications yet.</h3>}

            </div>
        </main>
    )
}