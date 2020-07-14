import React from "react";
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
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
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                <p>{props.profile.aboutMe}</p>
                <p>Ищу работу: {props.profile.lookingForAJob ? 'Да' : 'Нет'}</p>
                <ul>
                    <li>Мой VK: <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></li>
                    <li>Мой twitter: <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></li>
                    <li>Мой instagram: <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileInfo;