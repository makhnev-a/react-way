import React, {useDebugValue} from "react";
import cn from "classnames";
import styles from "./users.module.css";
import userPhoto from "../../assets/img/user.webp";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map((page, item) => {
                            return (
                                <span
                                    key={`page-${item}`}
                                    className={cn({[styles.selectedPage]: props.currentPage === page})}
                                    onClick={(e) => props.onPageChanged(page)}>
                                    {page}</span>
                            );
                        }
                    )
                }
            </div>
            {
                props.users.map(u => {
                    return <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img
                                    src={u.photos.small != null ? u.photos.small : userPhoto}
                                    alt="Аватарка"
                                    className={styles.usersPhoto}
                                />
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button disabled={props.followingInProgress} onClick={() => {
                                        props.toogleFollowingProgress(true);
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "43c44c71-4889-4c8a-9a5f-3020a8a0ec48"
                                            }
                                        })
                                            .then((response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toogleFollowingProgress(false);
                                            });
                                    }}>unfollow</button>
                                    : <button disabled={props.followingInProgress} onClick={() => {
                                        props.toogleFollowingProgress(true);
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "43c44c71-4889-4c8a-9a5f-3020a8a0ec48"
                                            }
                                        })
                                            .then((response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id);
                                                }
                                                props.toogleFollowingProgress(false);
                                            });
                                    }}>follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                    </div>
                })
            }
        </div>
    );
};

export default Users;