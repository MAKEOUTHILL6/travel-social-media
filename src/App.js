import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Discover } from './pages/Discover';
import { CreatePublication } from './components/CreatePublication/CreatePublication';
import { DetailsPage } from './components/DetailsPage/DetailsPage';
import { PublicationProvider } from './services/PublicationContext';
import { Profile } from './components/Profile/Profile';
import { EditProfile } from './components/EditProfile/EditProfile';
import { PublicationEdit } from './components/PublicationEdit/PublicationEdit';


function App() {

    return (
        <div>
            <PublicationProvider>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />

                    <Route path='/create-post' element={<CreatePublication />} />
                    <Route path='/discover' element={<Discover />} />
                    <Route path='/discover/:postId' element={<DetailsPage />} />
                    <Route path='/edit/:postId' element={<PublicationEdit />} />

                    <Route path='/profile/:userId' element={<Profile />} />
                    <Route path='/profile/edit/:userId' element={<EditProfile />} />
                </Routes>
            </PublicationProvider>
        </div>
    );
}

export default App;
