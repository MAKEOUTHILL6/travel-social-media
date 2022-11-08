import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Discover } from './pages/Discover';
import { CreatePublication } from './components/CreatePublication/CreatePublication';
import { DetailsPage } from './components/DetailsPage/DetailsPage';
import { Profile } from './components/Profile/Profile';
import { EditProfile } from './components/EditProfile/EditProfile';
import { PublicationEdit } from './components/PublicationEdit/PublicationEdit';
import { useEffect, useState } from 'react';
import { ProtectedAuth, ProtectedPost } from './services/Protected';
import { DisplayProvider } from './services/DisplayContext';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const updateUserRoute = (isLoggedIn) => {
        setIsLoggedIn(isLoggedIn);
    }

    useEffect(() => {
        if (sessionStorage.getItem('username')) {
            setIsLoggedIn(sessionStorage.getItem('username'));
        }
    }, [isLoggedIn]);


    return (
        <div>
            <DisplayProvider>
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/register' element={
                        <ProtectedAuth isLoggedIn={isLoggedIn} >
                            <Register updateUserRoute={updateUserRoute} />
                        </ProtectedAuth>
                    } />
                    <Route path='/login' element={
                        <ProtectedAuth isLoggedIn={isLoggedIn} >
                            <Login updateUserRoute={updateUserRoute} />
                        </ProtectedAuth>
                    } />

                    <Route path='/create-post' element={
                        <ProtectedPost isLoggedIn={isLoggedIn} >
                            <CreatePublication />
                        </ProtectedPost>
                    } />

                    <Route path='/discover' element={<Discover />} />

                    <Route path='/discover/:postId' element={<DetailsPage />} />
                    <Route path='/edit/:postId' element={<PublicationEdit />} />

                    <Route path='/profile/:userId' element={<Profile updateUserRoute={updateUserRoute} />} />
                    <Route path='/profile/edit/:userId' element={<EditProfile />} />

                </Routes>
            </DisplayProvider>
        </div>
    );
}

export default App;
