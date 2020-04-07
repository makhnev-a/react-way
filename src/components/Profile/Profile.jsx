import React from "react";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvzUlAU015rlbnoipDlT4NrMSLuLYch8TWdOqHb2McaDI7WU1P&usqp=CAU"
                    alt='MyPosts img'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;