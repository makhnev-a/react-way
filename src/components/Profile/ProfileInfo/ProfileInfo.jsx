import React from "react";
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";

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
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;