import { Navigate } from 'react-router-dom'


export const ProtectedAuth = ({ isLoggedIn, children }) => {

    if (isLoggedIn) {
        return <Navigate to='/' replace />;
    }
    return children;
};


export const ProtectedPost = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to='/register' replace />;
    }
    return children;
};
