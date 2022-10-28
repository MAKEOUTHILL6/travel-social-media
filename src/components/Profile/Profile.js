import { useParams } from "react-router-dom"


export const Profile = () => {

    const { userId } = useParams();


    return (
        <div class="profile-background">
            <div class="profile-wrapper">

                <div class="profile-header">

                    <div class="profile-img-wrapper">
                        <img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
                            alt="" class="profile-img" />

                        <button class="profile-edit-button">Edit Profile</button>
                    </div>

                    <div class="profile-user-info">
                        <h2 class="profile-user-name">Andy Hwerts</h2>
                        <p class="profile-user-city">Sofia</p>
                    </div>

                </div>

                <div class="profile-body">
                    <div class="profile-statistic-info">
                        <div class="profile-photos">

                            <div>
                                <p class="profile-statistic-count">14</p>
                                <p class="profile-statistic-type">Photos</p>

                            </div>

                            <div>
                                <p class="profile-statistic-count">14</p>
                                <p class="profile-statistic-type">Likes</p>
                            </div>

                        </div>
                    </div>
                </div>

                <h1 class="h1-about">About</h1>

                <div class="profile-about">
                    <ul class="profile-about-list">

                        <li class="profile-list-item">
                            Web Developer
                        </li>

                        <li class="profile-list-item">
                            Lawyer
                        </li>

                        <li class="profile-list-item">
                            Wrestler
                        </li>

                    </ul>
                </div>

                <h1 class="h1-recent">Recent posts</h1>

                <div class="profile-posts">
                </div>
            </div>
        </div>
    )
}