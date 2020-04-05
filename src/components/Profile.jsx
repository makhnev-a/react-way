import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvzUlAU015rlbnoipDlT4NrMSLuLYch8TWdOqHb2McaDI7WU1P&usqp=CAU"
                    alt='Profile img'/>
            </div>
            <div>
                ava + description
            </div>
            <div className={s.posts}>
                My posts
                <div className={s.item}>
                    new post
                </div>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    );
};

export default Profile;