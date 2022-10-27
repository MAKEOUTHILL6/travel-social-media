import PublicationContext from '../../services/PublicationContext';
import { useContext } from 'react';
import { useParams } from "react-router-dom";


export const DetailsPage = () => {

    const { postId } = useParams();

    const { publications } = useContext(PublicationContext);

    const publication = publications.find(x => x._id === postId);


    return(
        <h1>Yo</h1>
    )
}