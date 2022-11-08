import { createContext, useState, useEffect } from "react";

const DisplayContext = createContext();


export function DisplayProvider({ children }) {

    const [displayWidth, setDisplayWidth] = useState(null);

    useEffect(() => {
        if (window.innerWidth <= 428) {
            setDisplayWidth(window.innerWidth);
        }
    }, [displayWidth]);

    return (
        <DisplayContext.Provider value={{ displayWidth }}>
            {children}
        </DisplayContext.Provider>
    )
}

export default DisplayContext;