import { Publication } from './Publication';
import PublicationContext from '../../services/PublicationContext';
import { useContext } from 'react';

export const DiscoverHeroSection = () => {

    
    const {publications} = useContext(PublicationContext);

    return (
        <main id="discover-main">
            <div id="publication-container">

                {publications.length > 0 ? publications.map(x => <Publication key={x._id} publication={x} />): <h3 className='no-posts'>No publications yet.</h3>}

            </div>
        </main>
    )
}