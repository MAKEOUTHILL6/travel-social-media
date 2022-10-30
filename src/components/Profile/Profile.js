import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import { getUser } from "../../api/data";
import { UserPosts } from "./UserPosts";
import { Link as LinkRouter } from 'react-router-dom';
import { logout } from "../../api/data.js";


export const Profile = () => {

    const { userId } = useParams();

    const [user, setUser] = useState([]);

    const [postCollection, setPostCollection] = useState([]);

    useEffect(() => {
        getUser(userId)
            .then(res => {
                setUser(res)
                setPostCollection(res.postCollection)
            })
    }, [userId]);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();

        navigate('/');

    };


    return (
        <>

            <nav className="head-nav" style={{ backgroundColor: 'black' }}>

                <div id="navbar-container">

                    <LinkRouter to="/" id="nav-logo">TRVL</LinkRouter>

                </div>

            </nav>

            <div className="profile-background">
                <div className="profile-wrapper">
                    <div className="profile-header">

                        <div className="profile-img-wrapper">
                            <img src="https://icons.veryicon.com/png/o/miscellaneous/youyinzhibo/guest.png"
                                alt="" className="profile-img" />
                            <button className="profile-logout-button" onClick={handleLogout}>Logout</button>
                            <LinkRouter to={`/profile/edit/${userId}`} className="profile-edit-button">Edit Profile</LinkRouter>

                        </div>



                        <div className="profile-user-info">
                            <h2 className="profile-user-name">{user.username}</h2>
                            <p className="profile-user-city">City: {user.city}</p>

                        </div>

                    </div>

                    <div className="profile-body">

                        <div className="profile-statistic-info">
                            <div className="profile-photos">

                                <div>
                                    <p className="profile-statistic-count">{postCollection.length}</p>
                                    <p className="profile-statistic-type">Photos</p>

                                </div>

                            </div>
                        </div>
                    </div>

                    <h1 className="h1-recent">Recent posts</h1>

                    <div className="profile-posts">

                        {postCollection.map(x => <UserPosts key={x} publication={x} />)}

                    </div>
                </div>
            </div>
        </>

    )
}