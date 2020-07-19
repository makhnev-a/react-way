import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/img/user.webp";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            src={user.photos.small != null ? user.photos.small : userPhoto}
                            alt="Аватарка"
                            className={styles.usersPhoto}
                        />
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <button
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unfollow(user.id)
                                }}
                                >unfollow</button>
                            : <button
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id)
                                }}>follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    );
};

export default User;