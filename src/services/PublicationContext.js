import { createContext, useState, useEffect } from "react";
import { getPublications } from "../api/data";


const PublicationContext = createContext();



export function PublicationProvider({children}){

    const [publications, setPublications] = useState([]);

    useEffect(() => {
        getPublications()
            .then(res => {
                setPublications(res);
            })
    }, []);

    return(
        <PublicationContext.Provider value={{publications}}>
            {children}
        </PublicationContext.Provider>
    )
}

export default PublicationContext;