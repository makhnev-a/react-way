import React from "react";
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvzUlAU015rlbnoipDlT4NrMSLuLYch8TWdOqHb2McaDI7WU1P&usqp=CAU"
                    alt='MyPosts img'/>
            </div>
            <div className={styles.descriptionBlock}>
                <img src={profile.photos.large} alt=""/>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
                <p>{profile.aboutMe}</p>
                <p>Ищу работу: {profile.lookingForAJob ? 'Да' : 'Нет'}</p>
                <ul>
                    <li>Мой VK: <a href={profile.contacts.vk}>{profile.contacts.vk}</a></li>
                    <li>Мой twitter: <a href={profile.contacts.twitter}>{profile.contacts.twitter}</a></li>
                    <li>Мой instagram: <a href={profile.contacts.instagram}>{profile.contacts.instagram}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileInfo;